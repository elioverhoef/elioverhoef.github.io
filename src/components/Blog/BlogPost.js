import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Particle from "../Particle";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch the markdown content
    // from your content directory based on the slug
    fetch(`/content/blog/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        setPost(text);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blog post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div>Loading...</div>
        </Container>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div>Post not found</div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="blog-post">
            <ReactMarkdown>{post}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost;