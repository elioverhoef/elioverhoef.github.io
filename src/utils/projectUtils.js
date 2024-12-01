import logging from './logging';
import urlUtils from './urlUtils';

const logger = logging.getLogger('projectUtils');

export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    logger.warn('No frontmatter found in content');
    return {
      data: {},
      content: content
    };
  }

  const yamlContent = match[1];
  const markdownContent = match[2];

  // Parse YAML content
  const data = {};
  yamlContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();
      // Remove quotes if they exist
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      data[key.trim()] = value;
    }
  });

  logger.info('Parsed frontmatter:', { data });
  return {
    data,
    content: markdownContent
  };
}

export async function loadContent(type) {
  const logger = logging.getLogger('projectUtils');
  
  try {
    // First load the content bundle
    const bundleUrl = urlUtils.getContentUrl(type, 'content-bundle.json');
    logger.info(`Loading ${type} bundle from:`, bundleUrl);
    
    const bundleResponse = await fetch(bundleUrl);
    if (!bundleResponse.ok) {
      throw new Error(`Failed to load ${type} bundle: ${bundleResponse.status}`);
    }
    
    const contentBundle = await bundleResponse.json();
    logger.info(`Loaded content bundle with ${Object.keys(contentBundle).length} items`);

    // Load index to maintain order
    const indexUrl = urlUtils.getContentUrl(type, 'index.json');
    const indexResponse = await fetch(indexUrl);
    if (!indexResponse.ok) {
      throw new Error(`Failed to load ${type} index: ${indexResponse.status}`);
    }
    
    const files = await indexResponse.json();
    
    // Process files using the bundle
    const items = files.map(filename => {
      try {
        const content = contentBundle[filename];
        if (!content) {
          logger.error(`Content not found in bundle for ${filename}`);
          return null;
        }

        const { data, content: markdownContent } = parseFrontmatter(content);
        
        let preview = '';
        if (!data.excerpt) {
          const firstParagraph = markdownContent.match(/^(.+?)(?:\n\n|\n$)/);
          preview = firstParagraph ? firstParagraph[1] : markdownContent;
          preview = preview.replace(/[#*[\]`]/g, '').trim();
        }

        return {
          ...data,
          content: markdownContent,
          slug: filename.replace(/\.md$/, ''),
          excerpt: data.excerpt || preview || 'No preview available',
          tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : [],
        };
      } catch (err) {
        logger.error(`Failed to process ${filename}:`, err);
        return null;
      }
    });

    const filteredItems = items.filter(item => item !== null);
    logger.info(`Successfully processed ${filteredItems.length} ${type} items`);
    
    return filteredItems.sort((a, b) => 
      new Date(b.date || 0) - new Date(a.date || 0)
    );
    
  } catch (error) {
    logger.error(`Failed to load ${type}:`, error);
    throw error;
  }
} 