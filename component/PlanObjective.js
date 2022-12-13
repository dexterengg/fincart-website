import React from "react";
import styles from "../assets/styles/PlanObjective.module.css";
import Image from "next/image";
import path1 from "../assets/img/Plan/Icon1.svg";
import path2 from "../assets/img/Plan/Icon2.svg";
import path3 from "../assets/img/Plan/Icon3.svg";
import path4 from "../assets/img/Plan/Group 3100.svg";
import path5 from "../assets/img/Plan/Icon5.svg";
import path6 from "../assets/img/Plan/Icon6.svg";
import boysimg from "../assets/img/Protect/business.png";
import {
    Button,
  } from "reactstrap";

const PlanObjective = ({planhead,Title1,Title2,Title3,Title4,Title5,Title6,boxdescription1,boxdescription2,boxdescription3,boxdescription4,boxdescription5,boxdescription6}) => {
  const ComprehensiveData = [
    {
      imgIcon: path1,
      title: "child's education",
      description:
        "Higher education costs have the highest inflation rates in the country. If not planned well in advance, you will fall way short of the required corpus when your kid is ready for advanced studies or college.",
    },
    {
      imgIcon: path2,
      title: "child's wedding",
      description:
        "While planning for your child’s wedding, it pays to start early. If you start saving and investing early, it will give you a larger time horizon to meet the goal and even build a bigger corpus.",
    },
    {
      imgIcon: path3,
      title: "dream home",
      description:
        "Buying a house is a huge financial stretch and right planning help to make it a pleasant experience rather than a financial nightmare.",
    },
    {
      imgIcon: path4,
      title: "dream car",
      description:
        "It’s time to know how much to save and where to invest to make your final purchase a smooth ride",
    },
    {
      imgIcon: path5,
      title: "vacation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imgIcon: path6,
      title: "own study",
      description:
        "We help you choose an investment option that fits your situation to achieve your dream of further education.",
    },
  ];


  return (
    <div className={styles.maindivsection}>
      <div className="container-fluid">
        <div className={styles.section}>
          <h2>{planhead}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${styles.contentPadding}`}>
              {/* {ComprehensiveData.map((data, index) => {
                return (
                  <div className={`row ${styles.borderBottom}`} key={index}>
                    <div className="col-md-2">
                      <div className={styles.iconsvg}>
                        <Image
                          src={data.imgIcon}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                    </div>
                    <div className={`col-md-10 ${styles.beReadyContent}`}>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })} */}
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
                      <h3>{Title1}</h3>
                      <p>{boxdescription1}</p>
                    </div>
                  </div>
                  <div className={`row ${styles.borderBottom}`} >
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
                      <h3>{Title2}</h3>
                      <p>{boxdescription2}</p>
                    </div>
                  </div>
                  <div className={`row ${styles.borderBottom}`} >
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
                      <h3>{Title3}</h3>
                      <p>{boxdescription3}</p>
                    </div>
                  </div>
                  <div className={`row ${styles.borderBottom}`} >
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
                      <h3>{Title4}</h3>
                      <p>{boxdescription4}</p>
                    </div>
                  </div>
                  <div className={`row ${styles.borderBottom}`} >
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
                      <h3>{Title5}</h3>
                      <p>{boxdescription5}</p>
                    </div>
                  </div>
                  <div className={`row ${styles.borderBottom}`} >
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
                      <h3>{Title6}</h3>
                      <p>{boxdescription6}</p>
                    </div>
                  </div>
            </div>

            <div className={`col-md-6 ${styles.planimg}`}>
              <div className={styles.rightside}>
                <div className={styles.calcisection}>
                  <h3>
                    find out how much
                    <br /> you need to invest?
                  </h3>
                </div>
                <div className={styles.calcbtn}>
                    <Button className={styles.calcbtns} href="#call">Calculate</Button>
                </div>
                <div className={styles.solImage}>
                  <Image src={boysimg} alt="girl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanObjective;
