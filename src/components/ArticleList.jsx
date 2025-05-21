import React, { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import ArticleCard from './ArticleCard';
import styles from './ArticleList.module.css';


const ArticlesList = ({ topic }) => {
    // State for storing articles, loading state, and errors
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch articles when component mounts or when topic changes
    useEffect(() => {
      setLoading(true);
      getArticles(topic)
        .then(({ data }) => {
          setArticles(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          setError('Error loading articles');
          setLoading(false);
        });
    }, [topic]);
  
    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error...Something went wrong!!!</p>;
  
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {topic ? `Articles on ${topic}` : 'All Articles'}
        </h2>
        
        {/* Display message if no articles found */}
        {articles.length === 0 ? (
          <p className={styles.noArticles}>No articles found.</p>
        ) : (
          <div className={styles.articleGrid}>
            {/* Map through articles and render ArticleCard for each */}
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ArticlesList;