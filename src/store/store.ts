import { atom } from "recoil";

export const activeState = atom<string[]>({
  key: "activeState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const activeSynergyState = atom<string[]>({
  key: "activeSynergyState",
  default: [],
});
