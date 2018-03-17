import React, { Component } from 'react';

import { sendMessage } from '../util/socket';

class TestForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: ''
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  clearForm() {
    this.setState({ form: '' });
  }
  

  render() {
    return (
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
    );
  }
}

export default TestForm;