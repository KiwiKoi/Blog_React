import React from "react";

const Articles = ({ articles, deleteArticle }) => {
  return (
    <div className="article-list">
      {articles.map((article) => {
        return (
          <div className="article" key={article.id}>
            <div>Title: {article.title}</div>
            <div>Contents: {article.contents}</div>
            <div>Author: {article.author}</div>
            <button
              onClick={() => {
                deleteArticle(article.id);
              }}
            >
              Delete Article
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
