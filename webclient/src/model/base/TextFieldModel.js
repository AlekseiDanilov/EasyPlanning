import { action, computed, observable } from "mobx";

class TextFieldModel {
  @observable value;
  @observable label;
  @observable validators = [];
  @observable type = this.typesOfInput.text;

  typesOfInput = {
    text: "text",
    password: "password"
  };

  @action
  withLabel(label) {
    this.label = label;
    return this;
  }

  @action
  addValidator = method => message => {
    this.validators.push(observable({ method, message }));
    return this;
  };

  @action
  password() {
    this.type = this.typesOfInput.password;
    return this;
  }

  @action
  required() {
    this.addValidator(v => !!v)("Обязательно для заполнения");
    return this;
  }

  @action
  clear() {
    this.value = undefined;
  }

  @computed
  get validate() {
    const invalid = this.validators.find(
      validator => !validator.method(this.value)
    );
    return !!invalid
      ? { valid: false, message: invalid.message }
      : { valid: true };
  }

  @computed
  get isValid() {
    if (this.value === undefined) {
      return true;
    }
    return this.validate.valid;
  }

  @computed
  get invalidMessage() {
    return this.validate.message || "";
  }

  @computed
  get disabled() {
    return false;
  }
}

export default TextFieldModel;
