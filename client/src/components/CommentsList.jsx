// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'

class CommentsList extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    fetch('/api/v1/comments')
      .then(comments => comments.json())
      .then(comments => {
        this.setState({
          comments: comments
        })
      })
  }

  renderComments = () => {
    return this.state.comments.map(post => {
      return (
        <div key={comment.id}>
          {comment.astronomy_picture_id} - {comment.content}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        Comments List Component
        {this.renderComments()}
        <Link to="/comments/new">Add a New Comment</Link>
      </div>
    )
  }
}

export default CommentsList