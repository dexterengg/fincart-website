import React, { useState } from "react";
import styles from "../../assets/styles/Investhome.module.css";
import "animate.css";
import { useRouter } from "next/router";
import GetInTouchModal from "../GetInTouchModal";

// import path2 from "../assets/img/about/cross.svg";

const Investhome = ({
  heading,
  section_first_description,
  homePage,
  planpage,
  investPage,
  protectPage,
  becomeagentpage,
}) => {
  let _newHead = heading.slice(0, 23);
  let _newdes = section_first_description.slice(0, 58);

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
    router.push("/plan");
  };

  return (
    <>
      {aboutbanner && (
        <div className={styles.homemain} id="call">
          <div className="container">
            <div className={styles.banhead}>
              <div className={styles.maindivHeading}>
                <h3>{heading.slice(0, 23)}</h3>
                <h3>{heading.slice(23)}</h3>
              </div>
              <div className={styles.maindivpara}>
                <p>{section_first_description.slice(0, 58)}</p>
                <p>{section_first_description.slice(58)}</p>
              </div>

              <a href="#whyinvest" className={`btn ${styles.investeffect}`}>
                start investing{" "}
              </a>
           

            {/* <div className={` cursor ${styles.mainhow}`} onClick={() => Showlogin()}>
              <div className={styles.arrowbutton}>
                <div className={styles.arwimg}>
                  <Image src={path1} />
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.arrowtext}>
                <p>start investing</p>
              </div>
            </div> */}
            {/* <Howbtn title = "start investing" bgcolor="#fff" arrowcolorbg ="#0055A5" arrowfill = "#fff" titlecolor= "#fff"/> */}
            <div className={styles.underlineheading}>
              <u onClick={Showlogin} className={styles.cursorPointer}>
                Need a plan? Prioritize goals with us
              </u>
            </div>
            </div>
          </div>
        </div>
      )}
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

export default Investhome;
