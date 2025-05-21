import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import './App.css';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
      <Router>
        <div className="app-container">
          
          <main className="main-content">
            <Routes>
              {/* Home page route - shows all articles */}
              <Route path="/" element={<HomePage />} />

              {/* Article detail route */}
              <Route path="/articles/:article_id" element={<ArticleDetail />} />

            </Routes>
          </main>
          
        </div>
      </Router>
);
}

export default App;