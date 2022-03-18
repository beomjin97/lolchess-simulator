import React from "react";
import styles from "./Synergy.module.scss";
import synergy_img_svg from "../../staticStore/synergy_img_url";

interface propsType {
  name: string;
  count: number;
}

export default function Synergy({ name, count }: propsType) {
  let color = "grey";
  switch (name) {
    case "Rival":
      color = count === 1 ? "gold" : "grey";
      break;
    case "Scrap":
      if (count === 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    // case "대식가":
    //   color = count;
    //   break;
    // case "돌연변이":
    //   color = count;
    //   break;
    // case "마법공학":
    //   color = count;
    //   break;
    // case "범죄조직":
    //   color = count;
    //   break;
    // case "사교계":
    //   color = count;
    //   break;
    // case "시계태엽":
    //   color = count;
    //   break;
    // case "연미복":
    //   color = count;
    //   break;
    // case "요들":
    //   color = count;
    //   break;
    // case "요들군주":
    //   color = count;
    //   break;
    // case "용병":
    //   color = count;
    //   break;
    // case "집행자":
    //   color = count;
    //   break;
    // case "화학공학":
    //   color = count;
    //   break;
    // case "흑막":
    //   color = count;
    //   break;
    // case "강화술사":
    //   color = count;
    //   break;
    // case "거신":
    //   color = count;
    //   break;
    // case "경호대":
    //   color = count;
    //   break;
    // case "난동꾼":
    //   color = count;
    //   break;
    // case "도전자":
    //   color = count;
    //   break;
    // case "변형술사":
    //   color = count;
    //   break;
    // case "비전마법사":
    //   color = count;
    //   break;
    // case "쌍발총":
    //   color = count;
    //   break;
    // case "암살자":
    //   color = count;
    //   break;
    // case "저격수":
    //   color = count;
    //   break;
    // case "타격대":
    //   color = count;
    //   break;
    // case "학자":
    //   color = count;
    //   break;
    // case "혁신가":
    //   color = count;
    //  break;
    default:
      console.log("invalid value");
  }
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.icon} ${styles[color]}`}>
        <img src={synergy_img_svg[name]} alt={name} width="16px" />
      </div>
      <div className={styles.count}>{count}</div>
      <div className={styles.right}>
        <div className={styles.name}>{name}</div>
        <div className={styles.sequence}></div>
      </div>
    </div>
  );
}
