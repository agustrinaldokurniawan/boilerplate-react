import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
    // console.log(key, value);
  };

  handleSubmit = () => {
    alert(this.state.username + this.state.password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <p>username: {username}</p>
        <p>password: {password}</p>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => this.handleChange("username", e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => this.handleChange("password", e.target.value)}
            value={password}
          />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}
