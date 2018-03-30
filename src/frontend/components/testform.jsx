import React, { Component } from 'react';

import { sendMessage, createLocationMessage } from '../../util/socket';

class TestForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: '',
      locationDisabled: false,
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

    this.setState({ locationDisabled: true });

    navigator.geolocation.getCurrentPosition(position => {
      createLocationMessage(position);
      this.setState({ locationDisabled: false });
    }, () => {
      alert('Unable to fetch location.');
      this.setState({ locationDisabled: false });
    });
  }

  clearForm() {
    this.setState({ form: '' });
  }
  

  render() {
    const locButtonMsg = this.state.locationDisabled ?
      'Sending Location...' :
      'Send Location';

    return (
      <footer className="chat__footer">
        <form onSubmit={this.handleSubmit}>
          <input
            name="message"
            type="text"
            value={this.state.form}
            placeholder="Message"
            onChange={this.handleUpdate}
            autoComplete="off"
            autoFocus
          />
          <button>Send</button>
        </form>
        <button 
          onClick={this.handleSendLocation}
          disabled={this.state.locationDisabled}
        >
          {locButtonMsg}
        </button>
      </footer>
    );
  }
}

export default TestForm;