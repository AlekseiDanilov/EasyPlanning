import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import TextFieldModel from "../../model/base/TextFieldModel";

@observer
class TextField extends React.Component {
  static propTypes = {
    model: PropTypes.instanceOf(TextFieldModel).isRequired
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { model } = this.props;
    return (
      <div className="form-group">
        <label>{model.label}</label>
        <input
          className="form-control form-control-lg"
          type={model.type}
          value={model.value || ""}
          onChange={this.handleChange}
        />
        <small className="text-danger">
          {model.isValid ? null : model.invalidMessage}
        </small>
      </div>
    );
  }

  handleChange(e) {
    const { model } = this.props;
    model.value = e.target.value;
  }
}

export default TextField;
