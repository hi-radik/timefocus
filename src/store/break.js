import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isBreak = observable({
  value: false,
  setBreak(value) {
    this.value = value;
  },
});

export default isBreak;
