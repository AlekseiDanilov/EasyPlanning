import { observable, action } from "mobx";
import TextFieldModel from "../model/base/TextFieldModel";
import api from "../transport/rest";
import { routes } from "../component/routing/Routing";

export default class UserStore {
  _routerHelper;

  @observable login = new TextFieldModel().withLabel("Логин").required();

  @observable
  password = new TextFieldModel()
    .password()
    .withLabel("Пароль")
    .required();

  @action
  logIn() {
    api
      .post(
        "/login",
        `username=${this.login.value}&password=${this.password.value}`
      )
      .then(res => {
        if (res.status === 200) {
          this._routerHelper.redirect(routes.index);
          this.password.clear();
        }
      });
  }
}
