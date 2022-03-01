import React from "react";
import styles from "./SynergyBox.module.scss";
import ChampionBox from "../ChampionBox/ChampionBox";

interface propsType {
  url: string;
  name: string;
  enName: string;
}

export default function SynergyBox({ url, name, enName }: propsType) {
  return (
    <div className={styles["wrapper"]}>
      <h3 className="champwrapper">
        <img src={url} alt={name} className={styles["icon"]} />
        <span>{name}</span>
        <span>{enName}</span>
      </h3>
      <ChampionBox
        name="kaisa"
        cost={5}
        url="https://ddragon.poro.gg/12.3.1/img/champion/Kaisa.png"
      />
    </div>
  );
}
