import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { Login } from "../../services/Api/Auth";
import "./login.css";

class NewLoginForm extends Component {
  state = {
    email: "",
    senha: "",
  };
  realizeLogin() {
    const credentials = {
      email: this.state.email,
      senha: this.state.senha,
    };
    Login(credentials);
  }

  render() {
    const Image = require("../../images/NearGarage.png");

    return (
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100'>
            <form className='login100-form'>
              <span className='login100-form-title '>Bem Vindo</span>
              <span
                className='login100-form-avatar'
                style={{ marginTop: 20, marginBottom: 30 }}
              >
                <img src={Image} alt='AVATAR' />
              </span>

              <div
                style={{ marginTop: 10 }}
                className='wrap-input100 '
                data-validate='Enter username'
              >
                <TextField
                  variant='outlined'
                  fullWidth
                  name='email'
                  label='E-mail'
                  type='email'
                  value={this.state.email}
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value,
                    })
                  }
                  InputProps={{
                    shrink: "false",
                  }}
                />
              </div>

              <div className='wrap-input100  ' data-validate='Enter password'>
                <TextField
                  style={{ marginTop: 10 }}
                  variant='outlined'
                  fullWidth
                  name='senha'
                  type='password'
                  label='Senha'
                  value={this.state.senha}
                  onChange={(e) =>
                    this.setState({
                      senha: e.target.value,
                    })
                  }
                  InputProps={{
                    shrink: "false",
                  }}
                />
              </div>

              <div
                className='container-login100-form-btn'
                style={{ marginTop: 20, marginBottom: 25 }}
              >
                <Button
                  onClick={() => this.realizeLogin()}
                  className='login100-form-btn'
                >
                  Login
                </Button>
              </div>

              <ul className='login-more'>
                <span className='txt1'>Forgot &nbsp;</span>

                <a href='/' className='txt2'>
                  Username / Password?
                </a>
                <br />
                <span className='txt1'>Don’t have an account? &nbsp;</span>

                <a href='/' className='txt2'>
                  Sign up
                </a>
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLoginForm;
