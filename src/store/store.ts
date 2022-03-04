import { atom } from "recoil";

const activatedState = atom({
  key: "actvatedState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default activatedState;
