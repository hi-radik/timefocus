import { observable } from "mobx";

const store = observable({
  value: 25,
  input: 25,
  changeValue(value) {
    this.value = value;
  },
  changeInput(value) {
    this.input = value;
  },
});

export default store;
