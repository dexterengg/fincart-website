import React from "react";
import Styles from "../../assets/styles/WhyProtect.module.css";
// import Picture from "../../assets/img/Plan/Circle.svg";
import path1 from "../../assets/img/Protect/Group 2833.svg";
import path2 from "../../assets/img/Protect/Group 2835.svg";
import path3 from "../../assets/img/Protect/Group 2837.svg";
import path4 from "../../assets/img/Protect/Group 2842.svg";

import Image from "next/image";

const WhyProtect = ({
  heading,
  description,
  title1,
  title2,
  title3,
  title4,
  description1,
  description2,
  description3,
  description4,
}) => {
  const philosophyData = [
    {
      imgicon: path1,
      title: "life insurance",
      description:
        "Life is uncertain, it helps you to protect your loved ones and their dreams, if the main bread earners dies.",
    },
    {
      imgicon: path2,
      title: "health insurance",
      description:
        "Unit-linked policies invest a certain amount of money out of the premium into several market-linked funds and help you invest regularly while staying insured.",
    },
    {
      imgicon: path3,
      title: "asset insurance",
      description:
        " Insurance helps distribute the risk among various parties hence reducing its impact. It also eliminates the risk of health and life, safeguarding you and your family from any uncertainty.",
    },
    {
      imgicon: path4,
      title: "business insurance",
      description:
        " Grow safe! Insurance generates significant impact on the economy by mobilizing domestic savings. It mitigate loss, financial stability and promotes trade and commerce activities",
    },
  ];

  return (
    <div className={Styles.banhead} id ="protect">
      <div className="container">
        <div class="row">
          <div className="col-md-12">
            <div className={Styles.ban2head}>
              <h2 className="">{heading}</h2>
            </div>
            <div className={Styles.subban2head}>
              <p className={Styles.banpara}>{description}</p>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          {/* {philosophyData?.map((data, index) => {
            return (
              <div className="col-md-3">
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
          <div className="col-lg-3 col-md-6">
            <div className={Styles.philosphyContent}>
              <Image
                src={path1}
                alt="Img"
                className={`img-fluid ${Styles.beReadyImgs}`}
              />
              <h3>{title1}</h3>
              <p>{description1}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={Styles.philosphyContent}>
              <Image
                src={path2}
                alt="Img"
                className={`img-fluid ${Styles.beReadyImgs}`}
              />
              <h3>{title2}</h3>
              <p>{description2}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={Styles.philosphyContent}>
              <Image
                src={path3}
                alt="Img"
                className={`img-fluid ${Styles.beReadyImgs}`}
              />
              <h3>{title3}</h3>
              <p>{description3}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={Styles.philosphyContent}>
              <Image
                src={path4}
                alt="Img"
                className={`img-fluid ${Styles.beReadyImgs}`}
              />
              <h3>{title4}</h3>
              <p>{description4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyProtect;
