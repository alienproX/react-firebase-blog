import React, { Component } from 'react';
import firebase from "firebase/app";

export default class Post extends Component {
  constructor () {
    super();
    this.state = {
      img: '',
      name: '',
      title: '',
      content: ''
    }
  };
  render () {
    return(
      <div className="card col-md-8 col-sm-12 col-xs-12 first">
        <img src={this.state.img} alt={this.state.title} width="100%"/>
        <h2><a href="#">{this.state.title}</a></h2>
        <p className="date">By {this.state.name}</p>
        <p className="text" ref="post"></p>
      </div>
    );
  }
  componentDidMount() {
  let x = this;
  let slug = this.props.routeParams.slug;
  firebase.database().ref('posts/').orderByChild('slug').equalTo(slug).once('value',function(data) {
    for (var v in data.val()) {
      if (v) {
        var {Author: {name, web}, content, id, img, slug, sum, title } = data.val()[v];
        x.setState({
          name, web, title, img, content, id, slug, sum
        });
        x.refs.post.innerHTML = x.state.content;
      }
    };
  });
}
}
