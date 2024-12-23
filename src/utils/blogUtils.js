import urlUtils from "./urlUtils";

export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      data: {},
      content: content,
    };
  }

  const frontmatter = match[1];
  const contentBody = match[2];

  const data = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      const value = valueParts.join(":").trim();
      data[key.trim()] = value.replace(/^["'](.*)["']$/, "$1");
    }
  });

  return {
    data,
    content: contentBody,
  };
}

export async function loadBlogPosts() {
  try {
    const bundleUrl = urlUtils.getContentUrl("blogs", "content-bundle.json");
    const bundleResponse = await fetch(bundleUrl);
    if (!bundleResponse.ok) {
      throw new Error(`Failed to load blog bundle: ${bundleResponse.status}`);
    }

    const contentBundle = await bundleResponse.json();

    const indexUrl = urlUtils.getContentUrl("blogs", "index.json");
    const indexResponse = await fetch(indexUrl);
    if (!indexResponse.ok) {
      throw new Error(`Failed to load blog index: ${indexResponse.status}`);
    }

    const files = await indexResponse.json();

    const posts = files.map((filename) => {
      try {
        const content = contentBundle[filename];
        if (!content) {
          return null;
        }

        const { data, content: markdownContent } = parseFrontmatter(content);

        const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-(.*)\.md$/, "$1");
        const wordCount = markdownContent.trim().split(/\s+/).length;
        const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} minute read`;

        return {
          title: data.title || "Untitled",
          date: data.date || null,
          slug,
          readTime,
          content: markdownContent,
          excerpt: data.excerpt || markdownContent.split("\n\n")[0],
          tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
        };
      } catch (err) {
        return null;
      }
    });

    return posts
      .filter((post) => post !== null && post.date !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    throw err;
  }
}
