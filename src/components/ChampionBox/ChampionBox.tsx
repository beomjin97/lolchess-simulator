import React from "react";
import styles from "./ChampionBox.module.scss";
import { useRecoilState } from "recoil";
import activeState from "../../store/store";

interface propsType {
  name: string;
  url: string;
  cost: number;
}

export default function ChampionBox({ name, url, cost }: propsType) {
  // const [active, setActive] = useState("");
  const [globalActive, setGlobalActive] = useRecoilState(activeState);

  function handleClick(e: any): void {
    if (globalActive.includes(e.target.alt)) {
      setGlobalActive((prev) => prev.filter((item) => item !== e.target.alt));
    } else {
      setGlobalActive((prev) => [...prev, e.target.alt]);
      // alert(globalActive);
    }
  }

  return (
    <div className={`${styles["combined"]} ${styles[`combined${cost}`]}`}>
      <div
        className={`${styles["box"]} ${
          globalActive.includes(name) && styles["active"]
        }`}
        onClick={handleClick}
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
