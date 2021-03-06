import React from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
  }

  handleChange(event) {
    this.setState({
      song: event.target.value,
    });
  }

  send() {
    const body = {
      song: this.state.song,
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    };

    fetch('/test', options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="add song"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={this.send}
        >
        Submit
        </button>
      </div>
    );
  }
}

export default Test;

