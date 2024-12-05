import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { loadBlogPosts } from "../../utils/blogUtils";
import { ArrowRight } from "lucide-react";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        const blogPosts = await loadBlogPosts();
        if (mounted) {
          setPosts(blogPosts);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load blog posts. Please try again later.');
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const NoLinksMarkdown = ({ children }) => (
    <ReactMarkdown
      components={{
        a: ({node, children}) => <span>{children}</span>
      }}
    >
      {children}
    </ReactMarkdown>
  );

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blog posts...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="error-message">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section blog-list">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ marginBottom: "50px" }}>
          My Recent <strong className="purple">Blog Posts</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {posts.map((post, index) => (
            <Col md={12} className="blog-card" key={index}>
              <Link to={`/blog/${post.slug}`} className="blog-link">
                <div className="blog-card-inner">
                  <h2 className="blog-title">{post.title}</h2>
                  <div className="blog-meta">
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="separator">·</span>
                    <span className="read-time">{post.readTime}</span>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span className="separator">·</span>
                        <span className="tags">{post.tags.join(', ')}</span>
                      </>
                    )}
                  </div>
                  <div className="blog-excerpt markdown-content">
                    <NoLinksMarkdown>{post.excerpt}</NoLinksMarkdown>
                  </div>
                  <div className="read-more">
                    Read more <ArrowRight size={16} />
                  </div>
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