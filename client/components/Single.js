import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
// import comments

class Single extends Component {
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    console.log(i);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);


    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
}

export default Single;