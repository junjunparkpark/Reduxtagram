import React, { Component } from 'react';

class Comments extends Component {
  handleClick(i) {
    this.props.removeComment(this.props.params.postId, i)
  }

  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }



  render() {
    return (
      <div className="comment">
        {this.props.postComments.map((comment, i) => (
          <div className="comment" key={i}>
            <p>
              <strong>{comment.user}</strong>
              {comment.text}
              <button className="remove-comment" onClick={this.handleClick.bind(this, i)}>&times;</button>
            </p>
          </div>          
        ))}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
}

export default Comments;