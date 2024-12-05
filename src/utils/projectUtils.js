import urlUtils from './urlUtils';

export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content
    };
  }

  const yamlContent = match[1];
  const markdownContent = match[2];

  const data = {};
  yamlContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      data[key.trim()] = value;
    }
  });

  return {
    data,
    content: markdownContent
  };
}

export async function loadContent(type) {
  try {
    const bundleUrl = urlUtils.getContentUrl(type, 'content-bundle.json');
    const bundleResponse = await fetch(bundleUrl);
    if (!bundleResponse.ok) {
      throw new Error(`Failed to load ${type} bundle: ${bundleResponse.status}`);
    }
    
    const contentBundle = await bundleResponse.json();

    const indexUrl = urlUtils.getContentUrl(type, 'index.json');
    const indexResponse = await fetch(indexUrl);
    if (!indexResponse.ok) {
      throw new Error(`Failed to load ${type} index: ${indexResponse.status}`);
    }
    
    const files = await indexResponse.json();
    
    const items = files.map(filename => {
      try {
        const content = contentBundle[filename];
        if (!content) {
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
        return null;
      }
    });

    return items
      .filter(item => item !== null)
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    
  } catch (error) {
    throw error;
  }
} 