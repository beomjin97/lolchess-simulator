import React from "react";
import { useRecoilValue } from "recoil";
import { activeSynergyState } from "../../store/store";
import styles from "./SynergyList.module.scss";
import Synergy from "./Synergy";

interface Stype {
  [x: string]: number;
}

export default function SynergyList() {
  const GlobalSynergyState = useRecoilValue(activeSynergyState);
  const synergy: Stype = {
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
  };

  const synergyArr = [
    "Rival",
    "Scrap",
    "Glutton",
    "Mutant",
    "Hextech",
    "Syndicate",
    "Soicallite",
    "Clockwork",
    "Debonair",
    "Yordle",
    "YordleLoad",
    "Mercenary",
    "Enforcer",
    "Chemtech",
    "Mastermind",
    "Enchanter",
    "Colossus",
    "Bodyguard",
    "Bruiser",
    "Chanllenger",
    "Transformer",
    "Arcanist",
    "Twinshot",
    "Assassin",
    "Sniper",
    "Striker",
    "Scholar",
    "Innovator",
  ];

  GlobalSynergyState.map((unit) => {
    switch (unit) {
      case "경쟁자":
        synergy.Rival += 1;
        break;
      case "고물상":
        synergy.Scrap += 1;
        break;
      case "대식가":
        synergy.Glutton += 1;
        break;
      case "돌연변이":
        synergy.Mutant += 1;
        break;
      case "마법공학":
        synergy.Hextech += 1;
        break;
      case "범죄조직":
        synergy.Syndicate += 1;
        break;
      case "사교계":
        synergy.Soicallite += 1;
        break;
      case "시계태엽":
        synergy.Clockwork += 1;
        break;
      case "연미복":
        synergy.Debonair += 1;
        break;
      case "요들":
        synergy.Yordle += 1;
        break;
      case "요들군주":
        synergy.YordleLoad += 1;
        break;
      case "용병":
        synergy.Mercenary += 1;
        break;
      case "집행자":
        synergy.Enforcer += 1;
        break;
      case "화학공학":
        synergy.Chemtech += 1;
        break;
      case "흑막":
        synergy.Mastermind += 1;
        break;
      case "강화술사":
        synergy.Enchanter += 1;
        break;
      case "거신":
        synergy.Colossus += 1;
        break;
      case "경호대":
        synergy.Bodyguard += 1;
        break;
      case "난동꾼":
        synergy.Bruiser += 1;
        break;
      case "도전자":
        synergy.Chanllenger += 1;
        break;
      case "변형술사":
        synergy.Transformer += 1;
        break;
      case "비전마법사":
        synergy.Arcanist += 1;
        break;
      case "쌍발총":
        synergy.Twinshot += 1;
        break;
      case "암살자":
        synergy.Assassin += 1;
        break;
      case "저격수":
        synergy.Sniper += 1;
        break;
      case "타격대":
        synergy.Striker += 1;
        break;
      case "학자":
        synergy.Scholar += 1;
        break;
      case "혁신가":
        synergy.Innovator += 1;
        break;
      default:
        alert("invalid value");
    }
    return null;
  });

  return (
    <div className={styles.wrapper}>
      {/* {synergyArr.map((unit) => {
        return <Synergy name={unit} count={synergy[unit]} key={unit} />;
      })} */}
      <Synergy name="Rival" count={synergy.Rival} />
      <Synergy name="Scrap" count={synergy.Scrap} />
      {GlobalSynergyState.map((unit) => {
        return ` ${unit},`;
      })}
    </div>
  );
}
