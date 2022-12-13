import React from "react";
import styles from "../assets/styles/comprehensive.module.css";
import Image from "next/image";
import path1 from "../assets/img/Protect/Ready.png";
import path2 from "../assets/img/comp/comp2.svg";
import path3 from "../assets/img/comp/comp3.svg";
import path4 from "../assets/img/Protect/baesd.png";
import path5 from "../assets/img/comp/comp5.svg";
import path6 from "../assets/img/comp/comp6.svg";
import GirlImg from "../assets/img/contact/girl.png";
import Link from "next/link";

const comprehensivesection = ({
  heading,
  Outsource,
  OutsourceReady,
  readyDescription,
  OutsourceFamily,
  familyDescription,
  OutsourceGoal,
  goalDescription,
  OutsourceRetirement,
  retirementDescription,
  OutsourceEstate,
  estateDescription,
  OutsourceTax,
  taxDescription,
  chat_link,
  Phone_No,
}) => {
  const ComprehensiveData = [
    {
      imgIcon: path1,
      title: "BE READY",
      description: "Emergency Fund Planning",
    },
    {
      imgIcon: path2,
      title: "protect yourself & family",
      description: "Insurance Planning",
    },
    {
      imgIcon: path3,
      title: "goal based investing",
      description:
        "Achieve your goals confidently with planned investment bases.",
    },
    {
      imgIcon: path4,
      title: "retirement planning",
      description:
        "Live a dignified retired life with an apt retirement planning solutions.",
    },
    {
      imgIcon: path5,
      title: "estate planning",
      description:
        "Transfer your hard-earned money in the most tax efficient manner.",
    },
    {
      imgIcon: path6,
      title: "tax",
      description: "Plan & Save Taxes & file your Income Tax Returns on time.",
    },
  ];
  return (
    <div className={styles.maindivsection}>
      <div className="container-fluid">
        <div className={styles.section}>
          <h2>{heading}</h2>
          <p>{Outsource}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-lg-6 ${styles.contentPadding}`}>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path1}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceReady}</h3>
                  <p>{readyDescription}</p>
                </div>
              </div>

              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path2}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceFamily}</h3>
                  <p>{familyDescription}</p>
                </div>
              </div>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path3}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceFamily}</h3>
                  <p>{familyDescription}</p>
                </div>
              </div>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path4}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceGoal}</h3>
                  <p>{goalDescription}</p>
                </div>
              </div>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path5}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceRetirement}</h3>
                  <p>{retirementDescription}</p>
                </div>
              </div>

              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-3 col-xl-3">
                  <div className={styles.iconsvg}>
                    <Image
                      src={path6}
                      alt="Img"
                      className={`img-fluid ${styles.beReadyImgs}`}
                    />
                  </div>
                </div>
                <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                  <h3>{OutsourceTax}</h3>
                  <p>{taxDescription}</p>
                </div>
              </div>

              <div className={styles.bottomButtonsection}>
                <h3>connect with us</h3>
                <div className={`cursor ${styles.buttonMainCom}`}>
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=917247075470&text=Hello%2C+I+am+interested+in+Fincart%27s+Financial+Advisory&type=phone_number&app_absent=0"
                    }
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <button>{chat_link}</button>
                    </a>
                  </Link>
                  <Link href={"tel:+07247075470"}>
                    <a>
                      <button>{Phone_No}</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.rightside}>
                <div className={styles.solImage}>
                  <Image src={GirlImg} alt="girl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default comprehensivesection;
