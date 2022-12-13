import React from "react";
import styles from "../../assets/styles/Goalbased.module.css";
import Image from "next/image";
import path2 from "../../assets/img/Logo/Group 2798.svg";
import path3 from "../../assets/img/Logo/Group 2788.svg";
import path4 from "../../assets/img/Logo/Group 2814.svg";
import { IMG_BASE_URL } from "../utils/services";
import Link from "next/link";
import GetInTouchModal from "../GetInTouchModal";
import { useState } from "react";

const Goalbased = ({
  heading,
  section_third_description,
  section_third_titile_1,
  section_third_titile_2,
  section_third_titile_3,
  section_third_image_1,
  section_third_image_2,
  section_third_image_3,
}) => {
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);

  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  };

  return (
  <>
    <div className={styles.maindiv}>
      <div className={styles.maindivHeading}>
        <div className="container">
          <div className={styles.maindivsubheading}>
            <h2>{heading}</h2>
            <p>{section_third_description}</p>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 col-sm-8 col-12 forJustifyCenter">
              <div className={styles.Goalbasedcontent}>
                <div className={styles.imgcontent}>
                  <img
                    src={`${IMG_BASE_URL}${section_third_image_1?.data?.attributes?.url}`}
                    alt="Img"
                  />
                </div>
                <h3>{section_third_titile_1}</h3>
              </div>
              <div className={styles.bordercontent}></div>
            </div>
            <div className="col-md-4 col-sm-8 col-12 forJustifyCenter">
              <div className={styles.Goalbasedcontent}>
                <div className={styles.imgcontent}>
                  <img
                    src={`${IMG_BASE_URL}${section_third_image_2?.data?.attributes?.url}`}
                    alt="Img"
                  />
                </div>
                <h3>{section_third_titile_2}</h3>
              </div>
              <div className={styles.bordercontent}></div>
            </div>
            <div className="col-md-4 col-sm-8 col-12 forJustifyCenter">
              <div className={styles.Goalbasedcontent}>
                <div className={styles.imgcontent}>
                  <img
                    src={`${IMG_BASE_URL}${section_third_image_3?.data?.attributes?.url}`}
                    alt="Img"
                  />
                </div>
                <h3>{section_third_titile_3}</h3>
              </div>
            </div>
          </div>
          <div className={`row cursor ${styles.marginButtonTop}`}>
            <div className={`col-md-8 col-sm-6 col-6 ${styles.callheading}`}>
              <div className="d-flex Goalbased_buton pt-5 pt-sm-0">
                <Link href={"tel:+07247075470"}>
                  <a>
                    <button>call Now</button>
                  </a>
                </Link>
                <div className="" onClick={() => Showlogin()}>
                  <a target="_blank" rel="noopener noreferrer">
                    <button>start investing</button>
                  </a>
                </div>
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
        otpModel ={otpModel}
        setotpModel ={setotpModel}
      />
  </>
  );
};

export default Goalbased;
