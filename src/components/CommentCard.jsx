import React from 'react';
import styles from './CommentCard.module.css';

const CommentCard = ({ comment }) => {

    const formattedDate = new Date(comment.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.author}>{comment.author}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>
      
      <div className={styles.body}>
        <p>{comment.body}</p>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.votes}>
          {comment.votes} {comment.votes === 1 ? 'vote' : 'votes'}
        </span>
      </div>
    </div>
  );
};

export default CommentCard;