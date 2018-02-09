import React from "react";
import { inject, observer } from "mobx-react";
import TextField from "../base/TextField";
import PageContainer from "../container/PageContainer";

@inject("userStore")
@observer
class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const { userStore } = this.props;
    userStore.logIn();
  }

  render() {
    const { userStore } = this.props;

    return (
      <PageContainer>
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm">
            <div className="card">
              <div className="card-header">
                <h3>Вход</h3>
              </div>
              <div className="card-body">
                <TextField model={userStore.login} />
                <TextField model={userStore.password} />
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={this.handleLogin}
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm" />
        </div>
      </PageContainer>
    );
  }
}

export default LoginPage;
