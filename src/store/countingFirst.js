import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isCountingFirst = observable({
  value: false,
  setCountingFirst(value) {
    this.value = value;
  },
});

export default isCountingFirst;
