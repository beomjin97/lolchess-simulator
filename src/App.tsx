import React from "react";
import styles from "./App.module.scss";
import ChampionBox from "./components/ChampionBox/ChampionBox";
import championImgUrl from "./champion_img_url";
import SynergyBox from "./components/SynergyBox/SynergyBox";
import { RecoilRoot } from "recoil";
import SelectedBox from "./components/SelectedBox/SelectedBox";

function App() {
  return (
    <RecoilRoot>
      <div className={styles["App"]}>
        <SelectedBox />
        <SynergyBox
          name="경쟁자"
          enName="rival"
          url="https://lolchess.gg/images/tft/traiticons-darken/6.5/Rival.svg"
        />
      </div>
    </RecoilRoot>
  );
}

export default App;
