import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isCountingSecond = observable({
  value: false,
  setCountingSecond(value) {
    this.value = value;
  },
});

export default isCountingSecond;
