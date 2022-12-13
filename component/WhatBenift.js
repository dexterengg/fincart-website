import React from "react";
import Styles from "../assets/styles/WhatBenift.module.css";
import Image from "next/image";
import path1 from "../assets/img/Protect/mind.png";
import path2 from "../assets/img/Protect/financial.png";
import path3 from "../assets/img/Protect/Group 3012.svg";

import classNames from "classnames";

const WhatBenift = ({benefithead,Title1,Title2,Title3,description1,description2,description3}) => {
  const philosophyData = [
    {
      path1: path1,
      title: "peace of mind",
      description:
        "Stay a step ahead by identifying financial goals & creating a plan to achieve them.",
    },
    {
      path1: path2,
      title: "financially sorted",
      description:
        "Once your goals are set, they act as markers for your financial journey.",
    },
    {
      path1: path3,
      title: "money confident",
      description:
        " Financial planning allocates funds that can be utilised in case of an emergency.",
    },
  ];

  return (
    <div className={Styles.banhead}>
      <div className="container">
        <div class="row">
          <div className="col-md-12">
            <div className={Styles.ban2head}>
              <h2 className="allhead">{benefithead}</h2>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          {/* {philosophyData?.map((data, index) => {
            return (
              <div className="col-md-4">
                <div className={Styles.philosphyContent} key={index}>
                  <Image
                    src={data.path1}
                    alt="Img"
                    className={`img-fluid ${Styles.beReadyImgs}`}
                  />
                  <h3>{data.title}</h3>
                  <p>{data?.description}</p>
                </div>
              </div>
            );
          })} */}
           <div className="col-md-4">
                <div className={Styles.philosphyContent} >
                  <Image
                    src={path1}
                    alt="Img"
                    className={`img-fluid ${Styles.beReadyImgs}`}
                  />
                  <h3>{Title1}</h3>
                  <p>{description1}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.philosphyContent} >
                  <Image
                    src={path2}
                    alt="Img"
                    className={`img-fluid ${Styles.beReadyImgs}`}
                  />
                  <h3>{Title2}</h3>
                  <p>{description2}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.philosphyContent} >
                  <Image
                    src={path3}
                    alt="Img"
                    className={`img-fluid ${Styles.beReadyImgs}`}
                  />
                  <h3>{Title3}</h3>
                  <p>{description3}</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};
export default WhatBenift;