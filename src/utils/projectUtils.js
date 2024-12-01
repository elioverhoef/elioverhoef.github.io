import logging from './logging';

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
    const baseUrl = process.env.PUBLIC_URL || '';
    const indexUrl = `${baseUrl}/${type}/index.json`;
    logger.info(`Loading ${type} index from: ${indexUrl}`);
    
    const indexResponse = await fetch(indexUrl);
    if (!indexResponse.ok) {
      logger.error(`Failed to load ${type} index:`, {
        status: indexResponse.status,
        statusText: indexResponse.statusText,
        url: indexUrl
      });
      throw new Error(`Failed to load ${type} index: ${indexResponse.status}`);
    }
    
    // Log the raw response text for debugging
    const responseText = await indexResponse.text();
    logger.info(`Raw index response:`, responseText);
    
    let files;
    try {
      files = JSON.parse(responseText);
      logger.info(`Successfully parsed ${type} index:`, files);
    } catch (parseError) {
      logger.error(`Failed to parse ${type} index JSON:`, {
        error: parseError.message,
        responseText
      });
      throw parseError;
    }

    const items = await Promise.all(
      files.map(async (filename) => {
        try {
          logger.info(`Fetching ${type}/${filename}...`);
          const response = await fetch(`/${type}/${filename}`);
          
          if (!response.ok) {
            logger.error(`Failed to fetch ${filename}:`, {
              status: response.status,
              statusText: response.statusText
            });
            return null;
          }
          
          const text = await response.text();
          logger.info(`Content for ${filename}:`, {
            length: text.length,
            preview: text.substring(0, 200) // Log first 200 chars
          });
          
          const { data, content } = parseFrontmatter(text);
          logger.info(`Parsed ${filename}:`, {
            frontmatter: data,
            contentPreview: content.substring(0, 100)
          });
          
          // Extract first paragraph for excerpt if not provided
          let preview = '';
          if (!data.excerpt) {
            const firstParagraph = content.match(/^(.+?)(?:\n\n|\n$)/);
            preview = firstParagraph ? firstParagraph[1] : content;
            preview = preview.replace(/[#*[\]`]/g, '').trim();
          }

          const result = {
            ...data,
            content,
            slug: filename.replace(/\.md$/, ''),
            excerpt: data.excerpt || preview || 'No preview available',
            tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : [],
          };
          
          logger.info(`Processed ${filename}:`, {
            slug: result.slug,
            excerpt: result.excerpt,
            tags: result.tags
          });
          
          return result;

        } catch (err) {
          logger.error(`Failed to process ${type} file ${filename}:`, {
            error: err.message,
            stack: err.stack
          });
          return null;
        }
      })
    );

    // Filter out any null items and sort by date
    const filteredItems = items.filter(item => item !== null);
    logger.info(`Successfully loaded ${filteredItems.length} ${type} items`);
    
    const sortedItems = filteredItems.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    logger.info(`Sorted ${type} items:`, sortedItems.map(item => ({
      slug: item.slug,
      date: item.date
    })));

    return sortedItems;
    
  } catch (error) {
    logger.error(`Failed to load ${type}:`, {
      error: error.message,
      stack: error.stack
    });
    throw error;
  }
} 