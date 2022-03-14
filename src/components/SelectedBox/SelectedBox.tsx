import React from "react";
import ChampionBox from "../ChampionBox/ChampionBox";
import styles from "./SelectedBox.module.scss";
import { activeState, activeSynergyState } from "../../store/store";
import { useRecoilValue } from "recoil";
import championImgUrl from "../../imgUrl/champion_img_url";
import championCost from "../../championCost";

export default function SelectedBox() {
  const globalActive = useRecoilValue(activeState);
  const globalActiveSynergy = useRecoilValue(activeSynergyState);

  return (
    <>
      {/* <button onClick={handleClick}>클릭</button> */}
      <div className={styles["wrapper"]}>
        <div className={styles["synergy"]}>{globalActiveSynergy}</div>
        {globalActive.map((item) => (
          <ChampionBox
            name={item}
            cost={championCost[item]}
            url={championImgUrl[item]}
            key={item}
          />
        ))}
      </div>
    </>
  );
}
