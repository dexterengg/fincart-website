import { Button } from "reactstrap";
import classNames from "classnames";
import path1 from "../assets/img/home/Whitearrow.svg";
import path2 from "../assets/img/home/Bluearrow.svg";
import styles from "../assets/styles/Howbtn.module.css";
import Image from "next/image";

const Howbtn = ({ arrowcolorbg, arrowfill, bgcolor, titlecolor, title, isLink }) => {
  return (
    <>
      <div className={styles.mainhow}>
        <div
          className={styles.arrowbutton}
          style={{ backgroundColor: arrowcolorbg + "!important" }}
        >
          <a href={isLink ? "https://goo.gl/maps/13eAam3vg91Hrw9j6" : ""} target ="_blank" className={styles.arwimg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.336"
              height="32.119"
              viewBox="0 0 37.336 32.119"
            >
              <g
                id="Group_2868"
                data-name="Group 2868"
                transform="translate(5.5 7.656)"
              >
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M417.061,6078.8l-2.121-2.121,13.939-13.938L414.939,6048.8l2.121-2.121,16.061,16.06Z"
                  transform="translate(-401.285 -6054.338)"
                  style={{ fill: arrowfill + "!important" }}
                />
                <path
                  id="Line_8"
                  data-name="Line 8"
                  d="M35,1.5H0v-3H35Z"
                  transform="translate(-5.5 8.403)"
                  style={{ fill: arrowfill + "!important" }}
                />
              </g>
            </svg>
          </a>
        </div>
        <div
          className={styles.line}
          style={{ backgroundColor: bgcolor + "!important" }}
        ></div>
        <div className={styles.arrowtext}>
          <p style={{ color: titlecolor + "!important" }}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Howbtn;
