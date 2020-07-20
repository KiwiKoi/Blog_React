import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

// Individual Article

const Article = (props) => (
  <div className="card">
    <div className="card-header article-title">{props.article.title}</div>
    <br />
    <div className="card-body">
      <div className="article-contents">{props.article.contents}</div>
      <br />
      <div className="article-author">{`Author:${props.article.author}`}</div>
    </div>

    <button
      className="btn-outline-primary customBtn"
      onClick={() => {
        props.deleteArticle(props.article._id);
      }}
    >
      Delete
    </button>
  </div>
);

// Article List Component

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios
      .get("https://https://blog-react-practice.herokuapp.com/articles")
      //"http://localhost:8080/articles"
      .then((response) => {
        this.setState({
          articles: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Delete article
  deleteArticle(id) {
    axios
      .delete("https://https://blog-react-practice.herokuapp.com/articles" + id)
      //http://localhost:8080/articles/
      .then((res) => console.log(res.data));
    this.setState({
      articles: this.state.articles.filter((el) => el._id !== id),
    });
  }

  // Render article list
  articleList() {
    return this.state.articles.map((currentarticle) => {
      return (
        <Article
          article={currentarticle}
          deleteArticle={this.deleteArticle}
          key={currentarticle._id}
        />
      );
    });
  }

  render() {
    return (
      <main id="list-component">
        <h2>Articles</h2>
        <Table className="article-list" responsive variant="light">
          <tbody>{this.articleList()}</tbody>
        </Table>
      </main>
    );
  }
}
