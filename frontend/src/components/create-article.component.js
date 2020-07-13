import React, { Component } from "react";

class AddArticle extends Component {
  state = {
    title: null,
    contents: null,
    author: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addArticle(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={this.handleChange} />
          <label htmlFor="contents">Contents:</label>
          <input type="text" id="contents" onChange={this.handleChange} />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddArticle;
