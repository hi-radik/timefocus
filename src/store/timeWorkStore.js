import { observable } from "mobx";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})
const store = observable({
  value: 0.05,
  input: 25,
  changeValue(value) {
    this.value = value;
  },
  changeInput(value) {
    this.input = value;
  },
});

export default store;
