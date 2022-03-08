import { atom } from "recoil";

const activeState = atom<string[]>({
  key: "activeState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default activeState;
