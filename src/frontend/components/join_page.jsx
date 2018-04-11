import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class JoinPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
      sentForm: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  render() {
    const { name, room } = this.state;

    if (this.state.sentForm) {
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
