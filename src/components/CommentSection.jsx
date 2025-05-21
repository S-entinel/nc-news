import React, { useState, useEffect } from 'react';
import { getCommentsByArticleId } from '../../api';
import CommentCard from './CommentCard';
import styles from './CommentSection.module.css';

const CommentSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ data }) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error loading comments');
        setLoading(false);
        console.error(err);
      });
  }, [article_id]);

  if (loading) return <p className={styles.loading}>Loading comments...</p>;
  
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        Comments {comments.length > 0 ? `(${comments.length})` : ''}
      </h2>
      
      {comments.length === 0 ? (
        <p className={styles.noComments}>No comments yet. Be the first to comment!</p>
      ) : (
        <div className={styles.commentSection}>
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CommentSection;