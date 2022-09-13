import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const isLearn = observable({
  value: true,
  setLearn(value) {
    this.value = value;
  },
});

export default isLearn;
