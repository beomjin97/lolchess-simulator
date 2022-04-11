import { atom } from "recoil";

export const activeState = atom<string[]>({
  key: "activeState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const activeSynergyState = atom<string[]>({
  key: "activeSynergyState",
  default: [],
});

interface synergy {
  [x: string]: number;
}

export const synergyCount = atom<synergy>({
  key: "synergyCount",
  default: {
    Rival: 0,
    Scrap: 0,
    Glutton: 0,
    Mutant: 0,
    Hextech: 0,
    Syndicate: 0,
    Soicallite: 0,
    Clockwork: 0,
    Debonair: 0,
    Yordle: 0,
    YordleLoad: 0,
    Mercenary: 0,
    Enforcer: 0,
    Chemtech: 0,
    Mastermind: 0,
    Enchanter: 0,
    Colossus: 0,
    Bodyguard: 0,
    Bruiser: 0,
    Chanllenger: 0,
    Transformer: 0,
    Arcanist: 0,
    Twinshot: 0,
    Assassin: 0,
    Sniper: 0,
    Striker: 0,
    Scholar: 0,
    Innovator: 0,
  },
});
