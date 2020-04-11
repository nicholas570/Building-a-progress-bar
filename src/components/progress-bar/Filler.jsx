import React from "react";
import styles from "./ProgressBar.module.css";

function Filler(props) {
  return (
    <div className={styles.filler} style={{ width: `${props.percentage}%` }} />
  );
}

export default Filler;
