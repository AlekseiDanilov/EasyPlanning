import { extendObservable, observable } from "mobx";

import UserStore from "./UserStore";
import RouterHelper from "../helper/RouterHelper";
import rest from "../transport/rest";

class RootStore {
  @observable userStore;
  @observable routerHelper;

  constructor() {
    this.routerHelper = new RouterHelper();
    this.userStore = new UserStore();

    extendObservable(this.userStore, { _routerHelper: this.routerHelper });
    extendObservable(rest, { _routerHelper: this.routerHelper });
  }
}

const rootStore = new RootStore();
export default rootStore;
