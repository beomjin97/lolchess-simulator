import React from "react";
import styles from "./SynergyBox.module.scss";

interface propsType {
  url: string;
  name: string;
  enName: string;
  children?: object;
}

export default function SynergyBox({ url, name, enName, children }: propsType) {
  return (
    <div className={styles["wrapper"]}>
      <h3 className="champwrapper">
        <img src={url} alt={name} className={styles["icon"]} />
        <span>{name}</span>
        <span>{enName}</span>
      </h3>
      {children}
    </div>
  );
}
