import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import config from "./config";
import Posts from "./Components/Posts";

let FireConfig = {
  apiKey: config.Key,
  authDomain: config.Domain,
  databaseURL: config.DB,
  storageBucket: config.Storage,
};

firebase.initializeApp(FireConfig);

class App extends Component {
  constructor () {
    super();
    this.state =  {
        Posts : []
    }
  }
  componentDidMount() {
    let x = this;
    firebase.database().ref('posts/').orderByChild('id').once('value').then(function(data) {
      x.setState({
        Posts : data.val().reverse()
      });
    });
  }
  createPosts() {
    var arr = [];
    this.state.Posts.forEach((v, i) => {
      arr.push(<Posts key={i} nkey={i} name={v.Author.name} img={v.img} title={v.title} summary={v.summary} slug={v.slug} />);
    });
    return arr;
  }
  render() {
    return (
      <div>
        {this.createPosts()}
      </div>
    );
  }
}

export default App;
