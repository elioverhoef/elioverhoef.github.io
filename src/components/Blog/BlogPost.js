import React, { useState, useEffect, useMemo } from "react";
import { Container, Badge } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Particle from "../Particle";
import { loadBlogPosts } from "../../utils/blogUtils";
import logging from "../../utils/logging";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const logger = useMemo(() => logging.getLogger('BlogPost'), []);

  useEffect(() => {
    let mounted = true;

    const loadPost = async () => {
      try {
        const posts = await loadBlogPosts();
        const foundPost = posts.find(p => p.slug === slug);
        
        if (!foundPost && mounted) {
          throw new Error('Blog post not found');
        }
        
        if (mounted) {
          setPost(foundPost);
          setLoading(false);
        }
      } catch (err) {
        logger.error("Error loading blog post:", err);
        if (mounted) {
          setError('Blog post not found');
          setLoading(false);
          setTimeout(() => navigate('/blog'), 2000);
        }
      }
    };

    loadPost();

    return () => {
      mounted = false;
    };
  }, [slug, navigate, logger]);

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blog post...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="error-message">
            <div className="alert alert-danger" role="alert">
              {error || 'Post not found'}. Redirecting to blog list...
            </div>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <article className="blog-post">
          <Link to="/blog" className="back-link">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <header className="blog-header">
            <div className="tag-container">
              {post.tags?.map(tag => (
                <Badge key={tag} className="blog-tag">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="blog-title">{post.title}</h1>
            
            <div className="blog-meta">
              <span className="date">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="separator">·</span>
              <span className="read-time">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </span>
            </div>
          </header>
          
          <div className="markdown-content prose prose-invert prose-purple">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </Container>
    </Container>
  );
}

export default BlogPost;