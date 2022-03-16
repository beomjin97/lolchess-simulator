import React from "react";
import styles from "./ChampionBox.module.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { activeState, activeSynergyState } from "../../store/store";

interface propsType {
  name: string;
  url: string;
  cost: number;
  synergy: string[];
}

export default function ChampionBox({ name, url, cost, synergy }: propsType) {
  // const [active, setActive] = useState("");
  const [globalActive, setGlobalActive] = useRecoilState(activeState);
  const setGlobalSynergyState = useSetRecoilState(activeSynergyState);

  function handleClick(): void {
    if (globalActive.includes(name)) {
      setGlobalActive((prev) => prev.filter((item) => item !== name));
    } else {
      setGlobalActive((prev) => [...prev, name]);
      // alert(globalActive);
      setGlobalSynergyState((prev: string[]) => [...prev, ...synergy].sort());
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
