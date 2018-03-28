import React, { Component } from 'react';

import { sendMessage, createLocationMessage } from '../util/socket';

class TestForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: ''
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSendLocation = this.handleSendLocation.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleUpdate(e) {
    this.setState({ form: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.form) {
      sendMessage(this.state.form);
      this.clearForm();
    }
  }

  handleSendLocation(e) {
    e.preventDefault();

    if (!navigator.geolocation) {
      return alert('Geolocation not supported by browser.');
    }

    navigator.geolocation.getCurrentPosition(position => {
      createLocationMessage(position);
    }, () => {
      alert('Unable to fetch location.');
    });
  }

  clearForm() {
    this.setState({ form: '' });
  }
  

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            name="message"
            type="text"
            value={this.state.form}
            placeholder="Message"
            onChange={this.handleUpdate}
          />
          <button>Send</button>
        </form>
        <button onClick={this.handleSendLocation}>Send Location</button>
      </React.Fragment>
    );
  }
}

export default TestForm;