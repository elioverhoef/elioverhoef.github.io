import logging from './logging';

export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content
    };
  }

  const frontmatter = match[1];
  const contentBody = match[2];
  
  // Parse frontmatter
  const data = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      // Remove quotes if they exist
      data[key.trim()] = value.replace(/^["'](.*)["']$/, '$1');
    }
  });

  return {
    data,
    content: contentBody
  };
}

export async function loadBlogPosts() {
  const logger = logging.getLogger('blogUtils');
  logger.info('Loading blog posts');
  
  try {
    // Get base URL from package.json homepage or default to ''
    const baseUrl = process.env.PUBLIC_URL || '';
    const indexUrl = `${baseUrl}/blogs/index.json`;
    logger.info('Fetching index from:', indexUrl);
    
    const indexResponse = await fetch(indexUrl);
    if (!indexResponse.ok) {
      logger.error('Failed to load blog index:', {
        status: indexResponse.status,
        statusText: indexResponse.statusText,
        url: indexUrl
      });
      throw new Error(`Failed to load blog index: ${indexResponse.status}`);
    }
    
    const blogFiles = await indexResponse.json();
    logger.info('Successfully loaded blog index:', blogFiles);
    
    const posts = await Promise.all(
      blogFiles.map(async (filename) => {
        try {
          const blogUrl = `${baseUrl}/blogs/${filename}`;
          logger.info(`Fetching blog post: ${blogUrl}`);
          
          const response = await fetch(blogUrl);
          if (!response.ok) {
            throw new Error(`Failed to load ${filename}: ${response.status}`);
          }
          const content = await response.text();
          
          // Get slug from filename without date and extension
          const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-(.*)\.md$/, '$1');
          
          const { data, content: markdownContent } = parseFrontmatter(content);
          
          // Extract first paragraph for preview (skip headers and empty lines)
          const contentLines = markdownContent.split('\n');
          let preview = '';
          for (const line of contentLines) {
            if (line.trim() && !line.startsWith('#')) {
              preview = line.trim();
              break;
            }
          }
          
          // Calculate read time (rough estimate: 200 words per minute)
          const wordCount = markdownContent.trim().split(/\s+/).length;
          const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} minute read`;
          
          return {
            title: data.title || 'Untitled',
            date: data.date || null,
            slug,
            readTime,
            excerpt: preview || 'No preview available',
            tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : [],
            content: markdownContent
          };
        } catch (err) {
          logger.error(`Failed to parse blog post ${filename}:`, err);
          return null;
        }
      })
    );

    // Filter out any failed loads and sort by date
    return posts
      .filter(post => post !== null && post.date !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    logger.error('Failed to load blog posts:', err);
    throw err;
  }
}