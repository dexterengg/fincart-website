import React from "react";
import Image from "next/image";
import styles from "../../assets/styles/Whatdoget.module.css";
import Link from "next/link";
import GirlImg from "../../assets/img/contact/girl.png";
import ReactMarkdown from "react-markdown";

const comprehensivesection = ({
  sec5_h1,
  sec5_desc,
  emergency,
  emergency_desc,
  risk,
  risk_desc,
  goal,
  goal_desc,
  retirement,
  retirement_desc,
  estate,
  estate_desc,
  tax,
  tax_desc,

}) => {
  console.log(sec5_desc, "sec5_desc")
  return (
    <div className={styles.maindivsection}>
      <div className="container-fluid myContainer">
        <div className={styles.section}>
          <h2>{sec5_h1}</h2>
          {/* eslint-disable-next-line */}
          <ReactMarkdown
            className={styles.sectionDesc}
            children={sec5_desc}
          />
        </div>
        <div className="container mb-5">
          {/* <div className="row">
            <div className={`col-lg-6 ${styles.contentPadding}`}> */}
          {/* {ComprehensiveData?.map((data, index) => {
                return (
                  <div className={`row ${styles.borderBottom}`}>
                    <div className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}>
                    <div className={styles.numberitem}>
                        {`0${index+1}`}
                        </div>
                    </div>
                    <div
                      className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                    >
                      <h3>{data?.title}</h3>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                );
              })} */}

          {/* {
                emergency &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>01</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{emergency}</h3>
                    <p>{emergency_desc}</p>
                  </div>
                </div>
              }
              {
                risk &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>02</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{risk}</h3>
                    <p>{risk_desc}</p>
                  </div>
                </div>
              }
              {
                goal &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>03</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{goal}</h3>
                    <p>{goal_desc}</p>
                  </div>
                </div>
              }
              {
                retirement &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>04</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{retirement}</h3>
                    <p>{retirement_desc}</p>
                  </div>
                </div>
              }
              {
                estate &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>05</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{estate}</h3>
                    <p>{estate_desc}</p>
                  </div>
                </div>
              }
              {
                tax &&
                <div className={`row ${styles.borderBottom}`}>
                  <div
                    className={`col-md-3 col-xl-3 col-3 ${styles.mobiledesign}`}
                  >
                    <div className={styles.numberitem}>06</div>
                  </div>
                  <div
                    className={`col-md-9 col-xl-9 col-9 col-sm-9 ${styles.beReadyContent}`}
                  >
                    <h3>{tax}</h3>
                    <p>{tax_desc}</p>
                  </div>
                </div>
              } */}

          {/* </div> */}

          {/* <div className="col-lg-6">
              <div className={styles.rightside}>
                <div className={styles.solImage}>
                  <Image src={GirlImg} alt="girl" />
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default comprehensivesection;


