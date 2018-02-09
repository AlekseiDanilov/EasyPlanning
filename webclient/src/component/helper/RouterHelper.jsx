import React from "react";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";

@inject("routerHelper")
@observer
export default class RouterHelper extends React.Component {
  render() {
    const { routerHelper } = this.props;
    return routerHelper.path ? <Redirect to={routerHelper.path} /> : null;
  }
}
