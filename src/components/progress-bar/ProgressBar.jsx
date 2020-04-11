import React from "react";
import Filler from "./Filler";
import styles from "./ProgressBar.module.css";

function ProgressBar(props) {
  return (
    <div className={styles.progressBar}>
      <Filler percentage={props.percentage} />
    </div>
  );
}

export default ProgressBar;
