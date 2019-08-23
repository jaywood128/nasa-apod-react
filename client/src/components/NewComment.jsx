import React, { Component }               from 'react';

class NewComment extends Component {

  state = {
    content: '',
  }

  handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue
    });
  }

  onSubmit = (event) => {
    event.preventDefault()
    let token = document.querySelector('meta[name="csrf-token"]').content;
    let data = {comment: this.state}
    fetch('/api/v1/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(data)
    })
      .then(resp => {
        resp.json()
      })
      .then(post => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <p>
          <label htmlFor="comment">Write here: </label>
          <textarea name="content" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
        </p>
        <input type="submit" value="Create Post" />
      </form>
    )
  }
}

export default NewComment