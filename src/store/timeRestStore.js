import { observable } from "mobx";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})
const storeSecond = observable({
  value: 5,
  changeValue(value) {
    this.value = value;
    
  },
  input: 5,
  changeInput(value) {
    this.input = value;
    
  }
});

export default storeSecond;
