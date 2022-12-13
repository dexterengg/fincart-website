import React from "react";
import styles from "../assets/styles/Choose.module.css";
import path1 from "../assets/img/home/next.png";
import Image from "next/image";
import Howbtn from "./Howbtn";
import Link from "next/link";
import icon1 from '../assets/img/footer/playstore.png';
import icon2 from '../assets/img/footer/store.png'
import { useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

const Choosesection = ({
  heading,
  DO_ON,
  DO_ON_Description,
  SEEK,
  Seek_Description,
}) => {
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);

  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  }



  return (
    <>
    <div className={styles.maindiv}>
      <div className="container">
        <h2 className={styles.getToChooseHeading}>{heading} </h2>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.chooseCol}>
              <h3>{DO_ON}</h3>
              <p>{DO_ON_Description}</p>
              <div className={`cursor ${styles.mainapp}`}
             >
               <div className={styles.appiconright}>
                <Link href={"https://apps.apple.com/in/app/fincart-investment-app/id1540925421"}>
                <a  target="_blank" rel="noopener noreferrer">

                  <Image src={icon2} width={58} height={58}  />
                  </a>
                </Link>
                </div>
                <div className={styles.appiconleft}>
                <Link   href={"https://play.google.com/store/apps/details?id=com.nws.fincart"}>
                <a  target="_blank" rel="noopener noreferrer">

                  <Image className={styles.linkstyle} src={icon1} width={58} height={58} />
                  </a>
                </Link>   
                </div>            
                {/* <Link
                 
                 href={
                   "https://app.fincart.com/user/login"
                 }
                 target="_blank"
               >
                           <a className={`btn ${styles.chooseanimation}`}>Know More </a>
                           </Link> */}
            </div>  
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.seekdescriptionCol}>
              <h3>{SEEK}</h3>
              <p>{Seek_Description}</p>
              <div className={`cursor ${styles.banbutton2}`} onClick={() => Showlogin()}>
            
                              <a  target="_blank" rel="noopener noreferrer">

                           <p className={`btn ${styles.chooseanimation}`}>Know More </p>
                           </a>

                {/* <Howbtn title = "Know More" bgcolor="#fff" arrowcolorbg ="#fff" arrowfill = "#0055A5" titlecolor= "#fff"/> */}
                {/* <div className={styles.mainhow}>
                  <div className={styles.arrowbutton}>
                    <a href="" className={styles.arwimg}>
                      <Image src={path1} />
                    </a>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.arrowtext}>
                    <p>Know More</p>
                  </div>
                </div> */}
            
              </div>
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

export default Choosesection;
