import axios from "axios";
import { routes } from "../component/routing/Routing";

class Rest {
  prefix;
  _routerHelper;

  constructor(prefix) {
    this.prefix = prefix;

    this._auth = this._auth.bind(this);
    this._handleError = this._handleError.bind(this);
  }

  get(url) {

    return axios
      .get(this.prefix + url)
      .then(this._auth)
      .catch(this._handleError);
  }

  post(url, data, prefix = this.prefix) {
    return axios
      .post(prefix + url, data)
      .then(this._auth)
      .catch(this._handleError);
  }

  _auth(response) {
    if (response.status === 401) {
      this._routerHelper.redirect(routes.login);
    }
    return response;
  }

  _handleError(error) {
    this._auth(error.response);
    return error.response;
  }
}

export default new Rest("/api");
