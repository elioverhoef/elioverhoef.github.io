import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";

function BlogList() {
  const posts = [
    {
      title: "The Ultimate AI Coding Prompt: Revolutionizing Software Development with Claude and ChatGPT",
      date: "2024-08-29",
      readTime: "16 minute read",
      slug: "ai-coding-prompt",
      excerpt: "In the ever-evolving landscape of software development, artificial intelligence has emerged as a game-changing force..."
    },
    {
      title: "Mastering Claude AI: Advanced Tips and Tricks for Effortless Coding and Beyond",
      date: "2024-08-20",
      readTime: "17 minute read",
      slug: "mastering-claude-ai",
      excerpt: "Advanced techniques and best practices for getting the most out of Claude AI..."
    },
    {
      title: "My 91 Weekly Supplements for Optimal Health and Longevity",
      date: "2024-07-24",
      readTime: "4 minute read",
      slug: "supplements",
      excerpt: "A detailed breakdown of my supplement stack for health optimization..."
    },
    // Add more blog posts here
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog Posts</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {posts.map((post, index) => (
            <Col md={12} className="blog-card" key={index}>
              <Link to={`/blog/${post.slug}`} className="blog-link">
                <div className="blog-card-inner">
                  <h2>{post.title}</h2>
                  <div className="blog-meta">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span> · </span>
                    <span>{post.readTime}</span>
                  </div>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default BlogList;