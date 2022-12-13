import styles from "../assets/styles/HomeBanner.module.css";
import path1 from "../assets/img/home/RightArrow-W.png";

import Image from "next/image";
//import frontend from "../assets/img/home/homebanner.jpg"
import React, { useState } from "react";
import "animate.css";
// import path2 from "../../assets/img/about/cross.svg";
import path2 from "../assets/img/about/cross.svg";

import GetInTouchModal from "./GetInTouchModal";

const HomeBanner = ({
  heading,
 
}) => {
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
      <div className={styles.homeBannerMain}>
        <div className="container">
          <div
            className={styles.homeBannerContent}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={styles.banhead}>
              <h4>{heading}</h4>
            </div>
            <div className={styles.homebannerbtn}>
            <a  href="#philosphy" className="btn btnhovereffect ">Find Out Now </a>
            </div>
            {/* <a className="btn btnhovereffect "  onClick={() => Showlogin()}>Find Out Now </a> */}
            {/* <Howbtn title = "FIND OUT NOW" bgcolor="#fff" arrowcolorbg ="#0055A5" arrowfill = "#fff" titlecolor= "#fff"/> */}

            {/* <div className={styles.mainhow} onClick={() => Showlogin()}> */}
           
              {/* <div className={styles.arrowbutton}>
                <div className={styles.arwimg}>
                  <Image src={path1} />
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.arrowtext}>
                <p>Find Out Now</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
        <div
          className={styles.imagewrap}
        >
          {/* <Image src={frontend} className={styles.imge} /> */}
        </div>
      </div>
      {/* {showOnbanner && (
        <div
          className={`animate__animated animate__backInUp animate__rollIn animate__slideInUp animate__fast animate__delay-0s ${styles.maindiv}`}
        >
          <div onClick={() => CloseNav()} className={styles.crossbtn}>
            <Image src={path2} />
          </div>
          <div className="container">
            <div className="row">
              <div className={styles.maindivheading}>
                <h2>get in touch</h2>

                <p>If you still need assitance please do not hesitate to contact us on</p>
              </div>
            </div>
            <form onSubmit={(e) => submitGetInTouch(e)}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className={styles.name}>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="YOUR NAME"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.name}>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="EMAIL ID"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.name}>
                    <input
                      type="mobile"
                      name="mobile"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="MOBILE NUMBER"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button href="" type="submit" className={styles.submitbtn}>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )} */}
      <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        homePage
        investPage
        protectPage
        becomeagentpage
      />
    </>
  );
};

export default HomeBanner;
