import React from "react";
import styles from "./App.module.scss";
import ChampionBox from "./components/ChampionBox/ChampionBox";
import championImgUrl from "./champion_img_url";

function App() {
  return (
    <div className={styles["App"]}>
      <ChampionBox name="Twitch" url={championImgUrl.Twitch} cost={1} />
      <ChampionBox name="Kaisa" url={championImgUrl.Kaisa} cost={5} />
    </div>
  );
}

export default App;
