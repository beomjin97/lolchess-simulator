import React, { useState } from "react";
import ChampionBox from "../ChampionBox/ChampionBox";
import styles from "./SelectedBox.module.scss";
import { selector } from "recoil";

export default function SelectedBox() {
  const [selected, setSelected] = useState(false);

  function handleClick(): void {
    setSelected((prev) => !prev);
  }

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <div className={styles["wrapper"]}>
        {selected && (
          <ChampionBox
            name="kaisa"
            cost={5}
            url="https://ddragon.poro.gg/12.3.1/img/champion/Kaisa.png"
          />
        )}
      </div>
    </>
  );
}
