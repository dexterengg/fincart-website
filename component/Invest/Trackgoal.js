import React from "react";
import Image from "next/image";
import styles from "../../assets/styles/Trackgoal.module.css";
import path1 from "../../assets/img/invest/Group 3064.png";
const Trackgoal = ({ heading }) => {
  return (
    <div className={styles.maindiv}>
      <div className="container">
        <div className={styles.maindivHeading}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.Trackgoal}></div>
      </div>
    </div>
  );
};

export default Trackgoal;
