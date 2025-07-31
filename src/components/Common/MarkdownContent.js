import React, { useState, useEffect } from "react";
import { Container, Badge } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar } from "lucide-react";
import Particle from "../Particle";

function MarkdownContent({ type, loadContent }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchContent() {
      try {
        const data = await loadContent(slug);
        if (mounted) {
          setContent(data);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(`Failed to load ${type}. Please try again later.`);
          setLoading(false);
          setTimeout(() => navigate(`/${type}`), 2000);
        }
      }
    }

    fetchContent();

    return () => {
      mounted = false;
    };
  }, [slug, type, loadContent, navigate]);

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="loading-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading {type}...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error || !content) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="error-message">
            <div className="alert alert-danger" role="alert">
              {error || `${type} not found`}. Redirecting...
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
        <article className="markdown-content">
          <Link to={`/${type}`} className="back-link">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to {type.charAt(0).toUpperCase() + type.slice(1)}s
          </Link>

          <header className="content-header">
            <div className="tag-container">
              {content.tags?.map((tag) => (
                <Badge key={tag} className="content-tag">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="content-title">{content.title}</h1>

            {content.date && (
              <div className="content-meta">
                <span className="date">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(content.date).toLocaleDateString()}
                </span>
              </div>
            )}
          </header>

          <div className="markdown-content prose prose-invert prose-purple">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.content}</ReactMarkdown>
          </div>
        </article>
      </Container>
    </Container>
  );
}

export default MarkdownContent;
