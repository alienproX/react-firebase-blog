import React, { Component } from 'react';

import { Link } from "react-router";

export default class Posts extends Component {
  render () {
      let myclass = "card col-md-8 col-sm-12 col-xs-12"
      if (this.props.nkey === 0) {
        myclass = "card col-md-8 col-sm-12 col-xs-12 first";
      }
      return(
      <div className={myclass}>
        <img src={this.props.img} alt={this.props.title} width='100%' />
        <h2><Link to={`/post/${this.props.slug}`}>{this.props.title}</Link></h2>
        <p className="date">By {this.props.name}</p>
        <p className="text" ref='summary'>{this.props.summary}.... <Link to={`/post/${this.props.slug}`}>Read More.</Link></p>
      </div>
    );
    }
}
