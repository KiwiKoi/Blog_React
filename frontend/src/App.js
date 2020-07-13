import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/navbar.component";
import Articles from "./components/Articles";
import CreateArticle from "./components/create-article.component";
import Footer from "./components/footer.component";

class App extends Component {
  state = {
    articles: [
      {
        id: 1,
        title: "First Article",
        contents: "This is the first article",
        author: "Daniel",
      },
      {
        id: 2,
        title: "Second Article",
        contents: "This is the second article",
        author: "Daniel",
      },
      {
        id: 3,
        title: "Third Article",
        contents: "This is the third article",
        author: "Daniel",
      },
    ],
  };

  addArticle = (article) => {
    article.id = Math.random();
    let articles = [...this.state.articles, article];
    this.setState({
      articles: articles,
    });
  };

  deleteArticle = (id) => {
    let articles = this.state.articles.filter((article) => {
      return article.id !== id;
    });
    this.setState({
      articles: articles,
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <h1>My Blog</h1>
          <p>Welcome</p>
          <Articles
            deleteArticle={this.deleteArticle}
            articles={this.state.articles}
          />
          <CreateArticle addArticle={this.addArticle} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
