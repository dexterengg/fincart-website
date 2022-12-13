import { Button } from "reactstrap";
import path1 from "../assets/img/home/RightArrow-W.png";
import styles from "../assets/styles/Howbtns.module.css";
import Image from "next/image";

const Howbtn = () => {
  return (
    <>
      <div className={styles.mainhow}>
        <div className={styles.arrowbutton}>
          <a href="" className={styles.arwimg}>
            <Image src={path1} />
          </a>
        </div>
        <div className={styles.line}></div>
        <div className={styles.arrowtext}>
          <p>FIND OUT NOW</p>
        </div>
      </div>
    </>
  );
};

export default Howbtn;