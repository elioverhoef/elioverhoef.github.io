# Adding a New Blog Post

This document outlines the process for adding a new blog post to the website.

## Input Format

When requesting to add a new blog post, provide:

1. The URL of the blog post (e.g. from Medium)
2. The command: "Please add this blog post: [URL]"

## Process Steps

1. The blog post will be downloaded and converted to markdown format
2. A header will be added with:
   ```yaml
   ---
   title: "[Title from blog]"
   date: [Publication date YYYY-MM-DD]
   permalink: /posts/[YYYY]/[MM]/[slug]/
   tags:
     - [relevant tags]
   ---
   ```
3. The file will be saved as `public/blogs/YYYY-MM-DD-[slug].md`
4. The blog will be added to `public/blogs/index.json` in chronological order
5. The content bundle will be regenerated using `node scripts/bundle-content.js`

## Example

Input:

```
Please add this blog post: https://medium.com/@author/my-awesome-post-123456
```

This will:

1. Create `public/blogs/2024-01-01-my-awesome-post.md` with proper frontmatter
2. Update `public/blogs/index.json`
3. Regenerate the content bundle

## Notes

- The date in the filename should match the publication date
- Tags should be relevant to the content and consistent with existing tags
- Images should be preserved with their original URLs
- Code blocks should be properly formatted with language hints
- The post should be added in chronological order in index.json
