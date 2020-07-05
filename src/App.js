import React, { Component } from "react";
import Articles from "./Articles";

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
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome</p>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
