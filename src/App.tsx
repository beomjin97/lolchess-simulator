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
        <SelectedBox></SelectedBox>

        {/* 경쟁자 */}
        <SynergyBox name="경쟁자" enName="Rival" url={synergy_svg_url.Rival}>
          <ChampionBox name="Vi" cost={4} url={championImgUrl.Vi} />
          <ChampionBox name="Jinx" cost={5} url={championImgUrl.Jinx} />
        </SynergyBox>

        {/* 고물상 */}
        <SynergyBox name="고물상" enName="Scrap" url={synergy_svg_url.Scrap}>
          <ChampionBox name="Ezreal" cost={1} url={championImgUrl.Ezreal} />
          <ChampionBox name="Ziggs" cost={1} url={championImgUrl.Ziggs} />
          <ChampionBox
            name="Blitzcrank"
            cost={2}
            url={championImgUrl.Blitzcrank}
          />
          <ChampionBox name="Ekko" cost={3} url={championImgUrl.Ekko} />
          <ChampionBox name="Irelia" cost={4} url={championImgUrl.Irelia} />
          <ChampionBox name="Jinx" cost={5} url={championImgUrl.Jinx} />

          {/* 대식가 */}
        </SynergyBox>
        <SynergyBox
          name="대식가"
          enName="Glutton"
          url={synergy_svg_url.Glutton}
        >
          <ChampionBox
            name="TahmKench"
            cost={1}
            url={championImgUrl.TahmKench}
          />
        </SynergyBox>

        {/* 돌연변이 */}
        <SynergyBox
          name="돌연변이"
          enName="Mutant"
          url={synergy_svg_url.Mutant}
        >
          <ChampionBox name="Kassadin" cost={1} url={championImgUrl.Kassadin} />
          <ChampionBox name="RekSai" cost={2} url={championImgUrl.RekSai} />
          <ChampionBox name="Malzahar" cost={3} url={championImgUrl.Malzahar} />
          <ChampionBox name="Chogath" cost={3} url={championImgUrl.Chogath} />
          <ChampionBox name="Khazix" cost={4} url={championImgUrl.Khazix} />
          <ChampionBox name="Kaisa" cost={5} url={championImgUrl.Kaisa} />
        </SynergyBox>

        {/* 마법공학 */}
        <SynergyBox
          name="마법공학"
          enName="Hextech"
          url={synergy_svg_url.Hextech}
        >
          <ChampionBox name="Nocturne" cost={1} url={championImgUrl.Nocturne} />
          <ChampionBox name="JarvanIV" cost={1} url={championImgUrl.JarvanIV} />
          <ChampionBox name="Sejuani" cost={2} url={championImgUrl.Sejuani} />
          <ChampionBox name="Swain" cost={2} url={championImgUrl.Swain} />
          <ChampionBox name="Lucian" cost={3} url={championImgUrl.Lucian} />
          <ChampionBox name="Sivir" cost={4} url={championImgUrl.Sivir} />
          <ChampionBox name="Alistar" cost={4} url={championImgUrl.Alistar} />
        </SynergyBox>

        {/* 범죄조직 */}
        <SynergyBox
          name="범죄조직"
          enName="Syndicate"
          url={synergy_svg_url.Syndicate}
        >
          <ChampionBox name="Darius" cost={1} url={championImgUrl.Darius} />
          <ChampionBox name="Ashe" cost={2} url={championImgUrl.Ashe} />
          <ChampionBox name="Zyra" cost={2} url={championImgUrl.Zyra} />
          <ChampionBox name="Morgana" cost={3} url={championImgUrl.Morgana} />
          <ChampionBox name="Braum" cost={4} url={championImgUrl.Braum} />
          <ChampionBox name="Ahri" cost={4} url={championImgUrl.Ahri} />
        </SynergyBox>

        {/* 사교계 */}
        <SynergyBox
          name="사교계"
          enName="Sociallite"
          url={synergy_svg_url.Socialite}
        >
          <ChampionBox name="Gnar" cost={3} url={championImgUrl.Gnar} />
          <ChampionBox name="Senna" cost={3} url={championImgUrl.Senna} />
          <ChampionBox
            name="Seraphine"
            cost={4}
            url={championImgUrl.Seraphine}
          />
          <ChampionBox name="Galio" cost={5} url={championImgUrl.Galio} />
        </SynergyBox>

        {/* 시계태엽 */}
        <SynergyBox
          name="시계태엽"
          enName="Clockwork"
          url={synergy_svg_url.Clockwork}
        >
          <ChampionBox name="Camille" cost={1} url={championImgUrl.Camille} />
          <ChampionBox name="Zilean" cost={2} url={championImgUrl.Zilean} />
          <ChampionBox name="Orianna" cost={4} url={championImgUrl.Orianna} />
          <ChampionBox name="Jhin" cost={4} url={championImgUrl.Jhin} />
        </SynergyBox>

        {/* 연미복 */}
        <SynergyBox
          name="연미복"
          enName="Debonair"
          url={synergy_svg_url.Debonair}
        >
          <ChampionBox name="Brand" cost={1} url={championImgUrl.Brand} />
          <ChampionBox name="Syndra" cost={2} url={championImgUrl.Syndra} />
          <ChampionBox name="Talon" cost={2} url={championImgUrl.Talon} />
          <ChampionBox name="Leona" cost={3} url={championImgUrl.Leona} />
          <ChampionBox name="Draven" cost={4} url={championImgUrl.Draven} />
          <ChampionBox name="Zeri" cost={5} url={championImgUrl.Zeri} />
        </SynergyBox>

        {/* 요들 */}
        <SynergyBox name="요들" enName="Yordle" url={synergy_svg_url.Yordle}>
          <ChampionBox name="Poppy" cost={1} url={championImgUrl.Poppy} />
          <ChampionBox name="Ziggs" cost={1} url={championImgUrl.Ziggs} />
          <ChampionBox name="Lulu" cost={2} url={championImgUrl.Lulu} />
          <ChampionBox name="Corki" cost={2} url={championImgUrl.Corki} />
          <ChampionBox name="Gnar" cost={3} url={championImgUrl.Gnar} />
          <ChampionBox name="Vex" cost={3} url={championImgUrl.Vex} />
        </SynergyBox>

        {/* 요들군주 */}
        <SynergyBox
          name="요들군주"
          enName="YordleLord"
          url={synergy_svg_url.Yordle}
        >
          <ChampionBox name="Veigar" cost={5} url={championImgUrl.Veigar} />
        </SynergyBox>

        {/* 용병 */}
        <SynergyBox
          name="용병"
          enName="Mercenary"
          url={synergy_svg_url.Mercenary}
        >
          <ChampionBox name="Illaoi" cost={1} url={championImgUrl.Illaoi} />
          <ChampionBox name="Quinn" cost={2} url={championImgUrl.Quinn} />
          <ChampionBox
            name="Gangplank"
            cost={3}
            url={championImgUrl.Gangplank}
          />
          <ChampionBox
            name="MissFortune"
            cost={3}
            url={championImgUrl.MissFortune}
          />
          <ChampionBox
            name="TahmKench"
            cost={5}
            url={championImgUrl.TahmKench}
          />
        </SynergyBox>

        {/* 집행자 */}
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

        {/* 화학공학 */}
        <SynergyBox
          name="화학공학"
          enName="Chemtech"
          url={synergy_svg_url.Chemtech}
        >
          <ChampionBox name="Singed" cost={1} url={championImgUrl.Singed} />
          <ChampionBox name="Twitch" cost={1} url={championImgUrl.Twitch} />
          <ChampionBox name="Warwick" cost={2} url={championImgUrl.Warwick} />
          <ChampionBox name="Zac" cost={3} url={championImgUrl.Zac} />
          <ChampionBox
            name="Tryndamere"
            cost={3}
            url={championImgUrl.Tryndamere}
          />
          <ChampionBox name="Renata" cost={4} url={championImgUrl.Renata} />
          <ChampionBox name="Viktor" cost={5} url={championImgUrl.Viktor} />
        </SynergyBox>

        {/* 흑막 */}
        <SynergyBox
          name="흑막"
          enName="Mastermind"
          url={synergy_svg_url.Mastermind}
        >
          <ChampionBox name="Silco" cost={5} url={championImgUrl.Silco} />
        </SynergyBox>

        {/* 강화술사 */}
        <SynergyBox
          name="강화술사"
          enName="Enchanter"
          url={synergy_svg_url.Enchanter}
        >
          <ChampionBox name="Lulu" cost={2} url={championImgUrl.Lulu} />
          <ChampionBox name="Morgana" cost={3} url={championImgUrl.Morgana} />
          <ChampionBox name="Senna" cost={3} url={championImgUrl.Senna} />
          <ChampionBox name="Orianna" cost={4} url={championImgUrl.Orianna} />
        </SynergyBox>

        {/* 거신 */}
        <SynergyBox
          name="거신"
          enName="Colossus"
          url={synergy_svg_url.Colossus}
        >
          <ChampionBox name="Chogath" cost={3} url={championImgUrl.Chogath} />
          <ChampionBox name="Alistar" cost={4} url={championImgUrl.Alistar} />
          <ChampionBox name="Galio" cost={3} url={championImgUrl.Galio} />
        </SynergyBox>

        {/* 경호대 */}
        <SynergyBox
          name="경호대"
          enName="Bodyguard"
          url={synergy_svg_url.BodyGuard}
        >
          <ChampionBox name="Darius" cost={1} url={championImgUrl.Darius} />
          <ChampionBox name="Poppy" cost={1} url={championImgUrl.Poppy} />
          <ChampionBox
            name="Blitzcrank"
            cost={2}
            url={championImgUrl.Blitzcrank}
          />
          <ChampionBox name="Leona" cost={3} url={championImgUrl.Leona} />
          <ChampionBox name="Braum" cost={4} url={championImgUrl.Braum} />
          <ChampionBox name="Galio" cost={5} url={championImgUrl.Galio} />
        </SynergyBox>

        {/* 난동꾼 */}
        <SynergyBox
          name="난동꾼"
          enName="Bruiser"
          url={synergy_svg_url.Bruiser}
        >
          <ChampionBox name="Illaoi" cost={1} url={championImgUrl.Illaoi} />
          <ChampionBox name="RekSai" cost={2} url={championImgUrl.RekSai} />
          <ChampionBox name="Sejuani" cost={2} url={championImgUrl.Sejuani} />
          <ChampionBox name="Zac" cost={3} url={championImgUrl.Zac} />
          <ChampionBox name="Chogath" cost={3} url={championImgUrl.Chogath} />
          <ChampionBox name="Vi" cost={4} url={championImgUrl.Vi} />
          <ChampionBox
            name="TahmKench"
            cost={5}
            url={championImgUrl.TahmKench}
          />
        </SynergyBox>

        {/* 도전자 */}
        <SynergyBox
          name="도전자"
          enName="Challenger"
          url={synergy_svg_url.Bruiser}
        >
          <ChampionBox name="Camille" cost={1} url={championImgUrl.Camille} />
          <ChampionBox name="Warwick" cost={2} url={championImgUrl.Warwick} />
          <ChampionBox name="Quinn" cost={2} url={championImgUrl.Quinn} />
          <ChampionBox
            name="Tryndamere"
            cost={3}
            url={championImgUrl.Tryndamere}
          />
          <ChampionBox name="Draven" cost={4} url={championImgUrl.Draven} />
          <ChampionBox name="Kaisa" cost={5} url={championImgUrl.Kaisa} />
          <ChampionBox
            name="TahmKench"
            cost={5}
            url={championImgUrl.TahmKench}
          />
        </SynergyBox>

        {/* 변형술사 */}
        <SynergyBox
          name="변형술사"
          enName="Transformer"
          url={synergy_svg_url.Transformer}
        >
          <ChampionBox name="Jayce" cost={5} url={championImgUrl.Jayce} />
        </SynergyBox>

        {/* 비전 마법사 */}
        <SynergyBox
          name="비전 마법사"
          enName="Arcanist"
          url={synergy_svg_url.Arcanist}
        >
          <ChampionBox name="Brand" cost={1} url={championImgUrl.Brand} />
          <ChampionBox name="Ziggs" cost={1} url={championImgUrl.Ziggs} />
          <ChampionBox name="Swain" cost={2} url={championImgUrl.Swain} />
          <ChampionBox name="Malzahar" cost={3} url={championImgUrl.Malzahar} />
          <ChampionBox name="Vex" cost={3} url={championImgUrl.Vex} />
          <ChampionBox name="Ahri" cost={4} url={championImgUrl.Ahri} />
          <ChampionBox name="Viktor" cost={5} url={championImgUrl.Viktor} />
        </SynergyBox>

        {/* 쌍발총 */}
        <SynergyBox
          name="쌍발총"
          enName="Twinshot"
          url={synergy_svg_url.Twinshot}
        >
          <ChampionBox name="Corki" cost={2} url={championImgUrl.Corki} />
          <ChampionBox
            name="Gangplank"
            cost={3}
            url={championImgUrl.Gangplank}
          />
          <ChampionBox name="Lucian" cost={3} url={championImgUrl.Lucian} />
          <ChampionBox name="Jinx" cost={5} url={championImgUrl.Jinx} />
        </SynergyBox>

        {/* 암살자 */}
        <SynergyBox
          name="암살자"
          enName="Assassin"
          url={synergy_svg_url.Assassin}
        >
          <ChampionBox name="Nocturne" cost={1} url={championImgUrl.Nocturne} />
          <ChampionBox name="Twitch" cost={1} url={championImgUrl.Twitch} />
          <ChampionBox name="Talon" cost={2} url={championImgUrl.Talon} />
          <ChampionBox name="Ekko" cost={3} url={championImgUrl.Ekko} />
          <ChampionBox name="Khazix" cost={4} url={championImgUrl.Khazix} />
        </SynergyBox>

        {/* 저격수 */}
        <SynergyBox name="저격수" enName="Sniper" url={synergy_svg_url.Sniper}>
          <ChampionBox name="Caitlyn" cost={1} url={championImgUrl.Caitlyn} />
          <ChampionBox name="Ashe" cost={2} url={championImgUrl.Ashe} />
          <ChampionBox
            name="MissFortune"
            cost={3}
            url={championImgUrl.MissFortune}
          />
          <ChampionBox name="Jhin" cost={4} url={championImgUrl.Jhin} />
          <ChampionBox name="Zeri" cost={5} url={championImgUrl.Zeri} />
        </SynergyBox>

        {/* 타격대 */}
        <SynergyBox
          name="타격대"
          enName="Striker"
          url={synergy_svg_url.Striker}
        >
          <ChampionBox name="JarvanIV" cost={1} url={championImgUrl.JarvanIV} />
          <ChampionBox name="RekSai" cost={2} url={championImgUrl.RekSai} />
          <ChampionBox name="Gnar" cost={3} url={championImgUrl.Gnar} />
          <ChampionBox name="Sivir" cost={4} url={championImgUrl.Sivir} />
          <ChampionBox name="Irelia" cost={5} url={championImgUrl.Irelia} />
        </SynergyBox>

        {/* 학자 */}
        <SynergyBox name="학자" enName="Scholar" url={synergy_svg_url.Scholar}>
          <ChampionBox name="Kassadin" cost={1} url={championImgUrl.Kassadin} />
          <ChampionBox name="Syndra" cost={2} url={championImgUrl.Syndra} />
          <ChampionBox name="Zyra" cost={3} url={championImgUrl.Zyra} />
          <ChampionBox name="Renata" cost={4} url={championImgUrl.Renata} />
          <ChampionBox name="Silco" cost={5} url={championImgUrl.Silco} />
        </SynergyBox>

        {/* 혁신가 */}
        <SynergyBox
          name="혁신가"
          enName="Innovator"
          url={synergy_svg_url.Innovator}
        >
          <ChampionBox name="Singed" cost={1} url={championImgUrl.Singed} />
          <ChampionBox name="Ezreal" cost={1} url={championImgUrl.Ezreal} />
          <ChampionBox name="Zilean" cost={2} url={championImgUrl.Zilean} />
          <ChampionBox name="Ekko" cost={3} url={championImgUrl.Ekko} />
          <ChampionBox
            name="Seraphine"
            cost={4}
            url={championImgUrl.Seraphine}
          />
          <ChampionBox name="Jayce" cost={5} url={championImgUrl.Jayce} />
        </SynergyBox>
      </div>
    </RecoilRoot>
  );
}

export default App;
