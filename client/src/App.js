import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/navbar.component";
import Header from "./components/header.component";
import ArticleList from "./components/article-list.component";
import AddArticle from "./components/create-article.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <AddArticle />
      <Route path="/" exact component={ArticleList} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
