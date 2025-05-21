import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <article className={styles.card}>
      {/* Article image */}
      <div className={styles.imageContainer}>
        <img 
          src={article.article_img_url || '/default-article.jpg'} 
          alt={article.title}
          className={styles.image}
        />
      </div>
      
      {/* Article content */}
      <div className={styles.content}>
        {/* Title as a link to the article detail */}
        <h3 className={styles.title}>
          <Link to={`/articles/${article.article_id}`}>
            {article.title}
          </Link>
        </h3>
        
        {/* Article metadata */}
        <div className={styles.meta}>
          <span className={styles.topic}>
            {article.topic}
          </span>
          <span className={styles.author}>
            By {article.author}
          </span>
          <span className={styles.date}>
            {article.created_at}
          </span>
        </div>
        
        {/* Article statistics */}
        <div className={styles.stats}>
          <span className={styles.votes}>
            <i className="icon-thumbs-up"></i> {article.votes} votes
          </span>
          <span className={styles.comments}>
            <i className="icon-comment"></i> {article.comment_count} comments
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;