import React, { Component } from "react";

class Articles extends Component {
  render() {
    const { articles } = this.props;
    const articleList = articles.map((article) => {
      return (
        <div className="Article" key={article.id}>
          <div>Title: {article.title}</div>
          <div>Contents: {article.contents}</div>
          <div>Author: {article.author}</div>
        </div>
      );
    });
    return <div className="article-list">{articleList}</div>;
  }
}

export default Articles;
