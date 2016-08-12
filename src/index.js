import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Post from './Components/Post';
import { Router, Route, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/post/:slug" component={Post}></Route>
  </Router>,
  document.getElementById('app')
);
