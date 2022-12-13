import React from "react";
import style from "../../assets/styles/Benefit2.module.css";
import path1 from "../../assets/img/home/Group 2538.svg";
import path2 from "../../assets/img/home/Group 2544.svg";
import path3 from "../../assets/img/home/Group 2540.svg";
import path4 from "../../assets/img/home/Group 2547.svg";
import path5 from "../../assets/img/home/Group 2549.svg";
import path6 from "../../assets/img/home/Group 2542.svg";
import Image from "next/image";
const Benefit = ({
  heading,
  section_fifth_partner,
  section_fifth_marketing,
  section_fifth_live,
  section_fifth_pre_post,
  section_fifth_customer,
  section_fifth_research,
}) => {
  const BenefitData = [
    {
      icon: path1,
      title: "partner onboarding",
    },
    {
      icon: path2,
      title: "marketing material",
    },
    {
      icon: path3,
      title: "live training session",
    },
    {
      icon: path4,
      title: "pre & post sales support",
    },
    {
      icon: path5,
      title: "customer service",
    },
    {
      icon: path6,
      title: "research desk",
    },
  ];
  return (
    <div className={style.maindiv}>
      <div className={style.filterwhite}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-s-12 col-12">
            <h2 className={style.fincartBenifit}>{heading}</h2>
            <p className={style.para}>We offer opportunities to financial enthusiasts who want to get associated with us and help others to live their dreams through practical financial advice. You can create your own client base as we offer a wide range of products and services that enable you to suggest an apt investment instrument to your clients.</p>
          </div>
          <div className="col-md-7 col-s-12 col-12 ">
            <div className="row">
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path1} />
                </div>
                <h3>{section_fifth_partner}</h3>
              </div>
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path2} />
                </div>
                <h3>{section_fifth_marketing}</h3>
              </div>
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path3} />
                </div>
                <h3>{section_fifth_live}</h3>
              </div>
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path4} />
                </div>
                <h3>{section_fifth_pre_post}</h3>
              </div>
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path5} />
                </div>
                <h3>{section_fifth_customer}</h3>
              </div>
              <div
                className={`col-md-6 col-s-12 col-12 ${style.BenefitContent}`}
              >
                <div className={style.imgcontent}>
                  <Image src={path6} />
                </div>
                <h3>{section_fifth_research}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
