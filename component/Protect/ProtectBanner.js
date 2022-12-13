// import styles from "../assets/styles/ProtectBanner.module.css";
import styles from "../../assets/styles/ProtectBanner.module.css";
import path1 from "../../assets/img/home/RightArrow-W.png";
import Image from "next/image";
import classnames from "classnames";
import Howbtn from "../Howbtn";
import React, { useState } from "react";
import "animate.css";
import path2 from "../../assets/img/about/cross.svg";
import {
  getInTouchFormApi,
  getinTouchprotectPageformApi,
  getTouchInvestformApi,
  getinTouchbecomeagentpageformApi,
} from "../utils/services"
import GetInTouchModal from "../GetInTouchModal";


const  ProtectBanner = ({heading,
  description,
   homePage,
  investPage,
  protectPage,
  becomeagentpage,}) => {

  const [showOnbanner, setshowOnbanner] = useState(false);
  const [aboutbanner, setaboutbanner] = useState(true);
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);


  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
  };
  const CloseNav = () => {
    setshowOnbanner(false);
    setaboutbanner(true);
  };


  return (
  <>
  { aboutbanner && 
      <div className={styles.homeBannerMain}>
      <div className="container">
        <div className={styles.homeBannerContent}>
        <div className={styles.protectbanner}>
          <div className={styles.banhead}>
            <h3>
            {heading}
            </h3>
          </div>
          <div className={styles.planpara}>
             <h4>{description}</h4>
          </div>
          <a href ="#protect" className={`btn ${styles.protecteffect}`}>Explore More </a>
          </div>

          {/* <Howbtn title = "buy insurance" bgcolor="#fff" arrowcolorbg ="#0055A5" arrowfill = "#fff" titlecolor= "#fff"/> */}
          {/* <div className={`cursor ${styles.mainhow}`} onClick={() => Showlogin()}>
              <div className={styles.arrowbutton}>
                <div className={styles.arwimg}>
                  <Image src={path1} />
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.arrowtext}>
                <p>Buy insurance</p>
              </div>
            </div> */}
          <div className={styles.btnline}>
            {/* <p>Already got a policy? Get it validated.</p> */}
          </div>
        </div>
      </div>
    </div>
  }

  <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        homePage
        planpage
        investPage
        protectPage
        becomeagentpage
      />
  </>
  );
};

export default ProtectBanner;