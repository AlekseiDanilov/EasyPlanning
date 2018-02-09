import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

@observer
export default class template extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <div>Template component!</div>;
  }
}
