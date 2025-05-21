import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-news-vcsj.onrender.com/api'
});

export const getArticles = (topic, sort_by = 'created_at', order = 'desc') => {
  return api.get('/articles', { params: { topic, sort_by, order } });
};
