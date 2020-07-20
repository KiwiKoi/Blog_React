import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// Create article component
class AddArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContents = this.onChangeContents.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      contents: "",
      author: "",
      articles: [],
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeContents(e) {
    this.setState({
      contents: e.target.value,
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onSubmit(e) {
    const article = {
      title: this.state.title,
      contents: this.state.contents,
      author: this.state.author,
    };

    console.log(article);

    axios
      .post("https://blog-react-practice.herokuapp.com/articles/add", article)
      //"http://localhost:8080/articles/add"
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      contents: "",
      author: "",
    });
  }

  render() {
    return (
      <div id="create-component">
        <h2>Create an article</h2>
        <form onSubmit={this.onSubmit} className="new-article-form">
          <div className="form-group">
            <label>Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Contents: </label>
            <textarea
              id="contents"
              name="contents"
              type="text"
              rows="10"
              required
              className="form-control"
              value={this.state.contents}
              onChange={this.onChangeContents}
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <Button
              className="customBtn"
              variant="outline-danger"
              type="submit"
              value="create article"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddArticle;
