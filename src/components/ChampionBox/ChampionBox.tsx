import React from "react";
import styles from "./ChampionBox.module.scss";
import { atom, useRecoilState } from "recoil";

const activatedState = atom({
  key: "actvatedState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

interface propsType {
  name: string;
  url: string;
  cost: number;
}

export default function ChampionBox({ name, url, cost }: propsType) {
  const [activated, setActivated] = useRecoilState(activatedState);

  function handleClick(): void {
    setActivated((prev) => !prev);
  }

  return (
    <div className={`${styles["combined"]} ${styles[`combined${cost}`]}`}>
      <div
        className={`${styles["box"]} ${activated && styles["active"]}`}
        onClickCapture={handleClick}
      >
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
