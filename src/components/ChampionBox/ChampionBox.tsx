import React from "react";
import styles from "./ChampionBox.module.scss";

interface propsType {
  name: string;
  url: string;
  cost: number;
}

export default function ChampionImg({ name, url, cost }: propsType) {
  return (
    <div className={`${styles["combined"]} ${styles[`combined${cost}`]}`}>
      <div className={styles["box"]}>
        <img src={url} alt={name} className={styles["img"]} />
        <span className={`${styles["cost"]} ${styles[`cost${cost}`]} `}>
          {cost}$
        </span>
      </div>
      <span className={styles["name"]}>{name}</span>
    </div>
  );
}

// 전달해야되는 props에는 뭐가 있을까
