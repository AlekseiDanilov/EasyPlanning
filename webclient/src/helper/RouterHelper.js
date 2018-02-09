import { observable, action } from "mobx";

export default class RouterHelper {
  constructor() {
    this.redirect = this.redirect.bind(this);
  }

  @observable path;

  @action
  redirect(path) {
    this.path = path;
  }
}
