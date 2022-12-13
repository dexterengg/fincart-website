import styles from "../assets/styles/PlanBanner.module.css";
import path1 from "../assets/img/home/RightArrow-W.png";
import React, { useState } from "react";
import Image from "next/image";
import classnames from "classnames";
// import React from "react";
import Howbtn from "./Howbtn";
import path2 from "../assets/img/about/cross.svg";
import { useRouter } from "next/router";
import GetInTouchModal from "./GetInTouchModal";

const PlanBanner = ({ heading, description }) => {
  const [showOnbanner, setshowOnbanner] = useState(false);
  const [aboutbanner, setaboutbanner] = useState(true);
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);

  const router = useRouter();
  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  };
  const CloseNav = () => {
    setshowOnbanner(false);
    setaboutbanner(true);
  };

  const handlestartClick = () => {
    router.push("/invest");
  };
  return (
    <>
      <div className={styles.homeBannerMain}>
        <div className="container">
          <div className={styles.homeBannerContent}>
            <div className={styles.planpadding}>
              <div className={styles.banhead}>
                <h4>{heading}</h4>
              </div>
              <div className={styles.planpara}>
                <h5>{description}</h5>
              </div>
              <a href="#whyplan" className="btn btnhovereffect ">
                Find Out Now{" "}
              </a>
          

            {/* <Howbtn title = "FIND OUT NOW" bgcolor="#fff" arrowcolorbg ="#0055A5" arrowfill = "#fff" titlecolor= "#fff"/> */}
            {/* <div className={` cursor ${styles.mainhow} `}onClick={() => Showlogin()}>
                <div className={styles.arrowbutton}>
                  <div className={styles.arwimg}>
                    <Image src={path1} />
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.arrowtext}>
                  <p>Find Out Now</p>
                </div>
              </div> */}
            <div className={styles.btnline}>
              <p onClick={Showlogin} className={styles.cursorPointer}>
                {" "}
                Already got a plan? Start investing with us.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        setShowGetInTouchModel={setShowGetInTouchModel}
        homePage
        planpage
        investPage
        protectPage
        becomeagentpage
        otpModel ={otpModel}
        setotpModel ={setotpModel}
      />
    </>
  );
};

export default PlanBanner;
