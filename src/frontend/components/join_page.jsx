import React, { Component } from 'react';

class JoinPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    document.title = 'Let\'s Chat | Join';
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: Handle form POST
  }

  handleUpdate(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <main className="centered-form">
        <section className="centered-form__form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <h3>Join Chat</h3>
            </div>
            <div className="form-field">
              <h4>Display Name</h4>
              <input type="text" value={this.state.name} onChange={this.handleUpdate} name="name" />
            </div>
            <div className="form-field">
              <h4>Room Name</h4>
              <input type="text" value={this.state.room} onChange={this.handleUpdate} name="room" />
            </div>
            <div className="form-field">
              <button>Join</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default JoinPage;
