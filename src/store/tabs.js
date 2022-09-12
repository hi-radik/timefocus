import { observable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const tabsStore = observable({
  value: 0,
  changeTab(value) {
    this.value = value;
  },
});

export default tabsStore;
