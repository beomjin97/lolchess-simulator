import React from "react";
import ChampionBox from "../ChampionBox/ChampionBox";
import styles from "./SelectedBox.module.scss";
import activeState from "../../store/store";
import { useRecoilValue } from "recoil";
import championImgUrl from "../../imgUrl/champion_img_url";

export default function SelectedBox() {
  const globalActive = useRecoilValue(activeState);

  return (
    <>
      {/* <button onClick={handleClick}>클릭</button> */}
      <div className={styles["wrapper"]}>
        {globalActive.map((item) => (
          <ChampionBox
            name={item}
            cost={1}
            url={championImgUrl[item]}
            key={item}
          />
        ))}
      </div>
    </>
  );
}
