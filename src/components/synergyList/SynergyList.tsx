import React from "react";
import { useRecoilValue } from "recoil";
import { activeSynergyState } from "../../store/store";
import styles from "./SynergyList.module.scss";

export default function SynergyList() {
  const GlobalSynergyState = useRecoilValue(activeSynergyState);
  return <div className={styles.wrapper}>{GlobalSynergyState}</div>;
}
