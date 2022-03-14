import React from "react";
import styles from "./ChampionBox.module.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { activeState, activeSynergyState } from "../../store/store";

interface propsType {
  name: string;
  url: string;
  cost: number;
  synergy?: string; // 모든 box에 props로 지정되면 ? 제거
}

export default function ChampionBox({ name, url, cost, synergy }: propsType) {
  // const [active, setActive] = useState("");
  const [globalActive, setGlobalActive] = useRecoilState(activeState);
  const setGlobalSynergyState = useSetRecoilState(activeSynergyState);

  function handleClick(e: any): void {
    if (globalActive.includes(e.target.alt)) {
      setGlobalActive((prev) => prev.filter((item) => item !== e.target.alt));
    } else {
      setGlobalActive((prev) => [...prev, e.target.alt]);
      // alert(globalActive);
      setGlobalSynergyState((prev) => [...prev, synergy]);
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
