import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../../api';
import CommentSection from './CommentSection';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
  // Get article_id from URL params
  const { article_id } = useParams();
  
  // State for article data, loading state, and errors
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch article data when component mounts
  useEffect(() => {
    setLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error loading article');
        setLoading(false);
        console.error(err);
      });
  }, [article_id]);

  // Show loading spinner while fetching
  if (loading) return (
    <div className={styles.loadingContainer}>
      <p>Loading article...</p>
    </div>
  );
  
  // Show error message if fetching fails
  if (error) return (
    <div className={styles.errorContainer}>
      <p>{error}</p>
      <Link to="/" className={styles.backLink}>Back to Articles</Link>
    </div>
  );

  // If article not found
  if (!article) return (
    <div className={styles.errorContainer}>
      <p>Article not found</p>
      <Link to="/" className={styles.backLink}>Back to Articles</Link>
    </div>
  );

  // Format the date
  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <article className={styles.container}>
      {/* Back button */}
      <Link to="/" className={styles.backLink}>
        &larr; Back to Articles
      </Link>

      {/* Article header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        
        <div className={styles.meta}>
          <span className={styles.topic}>{article.topic}</span>
          <span className={styles.author}>By {article.author}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
      </header>

      {/* Featured image */}
      <div className={styles.imageContainer}>
        <img 
          src={article.article_img_url || '/default-article.jpg'} 
          alt={article.title}
          className={styles.image}
        />
      </div>

      {/* Article body */}
      <div className={styles.content}>
        <p>{article.body}</p>
      </div>

      {/* Article footer with stats */}
      <footer className={styles.footer}>
        <div className={styles.stats}>
          <div className={styles.votes}>
            <span className={styles.count}>{article.votes}</span> votes
          </div>
          <div className={styles.comments}>
            <span className={styles.count}>{article.comment_count}</span> comments
          </div>
        </div>
      </footer>

      {/* Comments section */}
      <CommentSection article_id={article_id} />
    </article>
  );
};

export default ArticleDetail;