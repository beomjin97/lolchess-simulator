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
    case "Glutton":
      color = count === 1 ? "gold" : "grey";
      break;
    case "Mutant":
      if (count === 7) {
        color = "platinum";
      } else if (count >= 5) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Hextech":
      if (count === 8) {
        color = "platinum";
      } else if (count >= 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Syndicate":
      if (count === 7) {
        color = "platinum";
      } else if (count >= 5) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Socialite":
      if (count === 5) {
        color = "platinum";
      } else if (count >= 3) {
        color = "gold";
      } else if (count === 2) {
        color = "silver";
      } else if (count === 1) {
        color = "bronze";
      }
      break;
    case "Clockwork":
      if (count === 6) {
        color = "platinum";
      } else if (count >= 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Debonair":
      if (count === 7) {
        color = "platinum";
      } else if (count >= 5) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Yordle":
      if (count === 6) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Yordlelord":
      color = count === 1 ? "gold" : "grey";
      break;
    case "Mercenary":
      if (count === 7) {
        color = "platinum";
      } else if (count >= 5) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Enforcer":
      if (count === 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Chemtech":
      if (count === 9) {
        color = "platinum";
      } else if (count >= 7) {
        color = "gold";
      } else if (count >= 5) {
        color = "silver";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    case "Mastermind":
      color = count === 1 ? "gold" : "grey";
      break;
    case "Enchanter":
      if (count === 5) {
        color = "platinum";
      } else if (count === 4) {
        color = "gold";
      } else if (count === 3) {
        color = "silver";
      } else if (count === 2) {
        color = "bronze";
      }
      break;
    case "Colossus":
      color = count === 2 ? "gold" : "grey";
      break;
    case "Bodyguard":
      if (count === 8) {
        color = "platinum";
      } else if (count >= 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Bruiser":
      if (count === 8) {
        color = "platinum";
      } else if (count >= 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Challenger":
      if (count === 8) {
        color = "platinum";
      } else if (count >= 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Transformer":
      color = count === 1 ? "gold" : "grey";
      break;
    case "Arcanist":
      if (count === 8) {
        color = "platinum";
      } else if (count >= 6) {
        color = "gold";
      } else if (count >= 4) {
        color = "silver";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Twinshot":
      if (count === 5) {
        color = "platinum";
      } else if (count === 4) {
        color = "gold";
      } else if (count === 3) {
        color = "silver";
      } else if (count === 2) {
        color = "bronze";
      }
      break;
    case "Assassin":
      if (count === 6) {
        color = "platinum";
      } else if (count >= 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Sniper":
      if (count === 6) {
        color = "platinum";
      } else if (count >= 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Striker":
      if (count === 6) {
        color = "platinum";
      } else if (count >= 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Scholar":
      if (count === 6) {
        color = "platinum";
      } else if (count >= 4) {
        color = "gold";
      } else if (count >= 2) {
        color = "bronze";
      }
      break;
    case "Innovator":
      if (count === 7) {
        color = "platinum";
      } else if (count >= 5) {
        color = "gold";
      } else if (count >= 3) {
        color = "bronze";
      }
      break;
    default:
      console.log("invalid value");
  }

  return (
    <div className={`${styles.wrapper} ${count || styles.none}`}>
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
