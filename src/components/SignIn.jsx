import React, { Component } from "react";
import Axios from "axios";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    auth: {
      id: "Authenticated",
      userMessage: "Usuário autenticado com sucesso",
      glbId:
        "1c809e3dc9d2b2ea20c7e4654cd87758d514e3755446d61395…d3d3a303a757378636f616264686d62777274697362647775"
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.dologin();
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  dologin = () => {
    const { email, password } = this.state;
    let serviceId = 4728;
    let url = "auth/api/authentication";
    let auth = {
      captcha: "",
      payload: {
        email: email,
        password: password,
        serviceId: serviceId
      }
    };

    Axios.post(url, auth, {
      "Content-type": "application/json"
    })
      .then(res => this.setState({ auth: res.data }))
      .catch(err => this.setState({ err: err }));
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form method="post" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
