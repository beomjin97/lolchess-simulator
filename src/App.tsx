import React from "react";
import { RecoilRoot } from "recoil";

import styles from "./App.module.scss";

import SynergyBox from "./components/SynergyBox/SynergyBox";
import SelectedBox from "./components/SelectedBox/SelectedBox";
import ChampionBox from "./components/ChampionBox/ChampionBox";

import championImgUrl from "./imgUrl/champion_img_url";
import synergy_svg_url from "./imgUrl/synergy_svg_url";

function App() {
  return (
    <RecoilRoot>
      <div className={styles["App"]}>
        <SelectedBox />
        <SynergyBox name="경쟁자" enName="Rival" url={synergy_svg_url.Rival}>
          <ChampionBox name="Vi" cost={4} url={championImgUrl.Vi} />
          <ChampionBox name="Jinx" cost={5} url={championImgUrl.Jinx} />
        </SynergyBox>
        <SynergyBox
          name="집행자"
          enName="Enforcer"
          url={synergy_svg_url.Enforcer}
        >
          <ChampionBox name="Caitlyn" cost={1} url={championImgUrl.Caitlyn} />
          <ChampionBox name="Sejuani" cost={2} url={championImgUrl.Sejuani} />
          <ChampionBox name="Vi" cost={4} url={championImgUrl.Vi} />
          <ChampionBox name="Jayce" cost={5} url={championImgUrl.Jayce} />
        </SynergyBox>
      </div>
    </RecoilRoot>
  );
}

export default App;
