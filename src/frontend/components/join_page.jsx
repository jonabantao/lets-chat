import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class JoinPage extends Component {
  static trimString(str) {
    return str.replace(/\s+/g, ' ').trim();
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
      sentForm: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.redirectToChatRoom = this.redirectToChatRoom.bind(this);
  }

  componentDidMount() {
    document.title = 'Let\'s Chat | Join';
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ sentForm: true });
  }

  handleUpdate(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  redirectToChatRoom() {
    const name = JoinPage.trimString(this.state.name);
    const room = JoinPage.trimString(this.state.room);

    return (
      <Redirect
        push to={{ // eslint-disable-line
          pathname: '/chat',
          name,
          room,
        }}
      />
    );
  }

  render() {
    if (this.state.sentForm) {
      return this.redirectToChatRoom();
    }

    return (
      <main className="centered-form">
        <section className="centered-form__form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <h3>Join Chat</h3>
            </div>
            <div className="form-field">
              <h4>Display Name</h4>
              <input type="text" value={this.state.name} onChange={this.handleUpdate} name="name" autoComplete="off" />
            </div>
            <div className="form-field">
              <h4>Room Name</h4>
              <input type="text" value={this.state.room} onChange={this.handleUpdate} name="room" autoComplete="off" />
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
