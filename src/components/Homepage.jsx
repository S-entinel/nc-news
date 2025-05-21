import React from 'react';
import ArticlesList from '../components/ArticleList';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>   
      <div className={styles.content}>
        <ArticlesList />
      </div>
    </div>
  );
};

export default HomePage;