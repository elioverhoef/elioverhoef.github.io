# GitHub Pages SPA Routing

This site uses the spa-github-pages solution for client-side routing. The 404.html + index.html redirect trick allows direct URL access to work with React Router on GitHub Pages.

Reference: https://github.com/rafgraph/spa-github-pages

Important files:
- public/404.html - Handles redirect for direct URL access
- public/index.html - Contains script to restore the proper URL after redirect
