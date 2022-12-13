import React from "react";
import Styles from "../assets/styles/HowDO.module.css";
import Image from "next/image";
import path1 from "../assets/img/invest/Group 3064.png";
const HowDO = ({
  heads,
  boxtitle1,
  boxtitle2,
  boxtitle3,
  // boxtitle4,
  boxtitle5,
  boxdescription1,
  boxdescription2,
  boxdescription3,
  boxdescription4,
  boxdescription5,
  boxdescription6,
  boxdescription7,
  boxdescription8,
  boxdescription9,
  boxdescription10,
}) => {
  const SquareData = [
    {
      title: "01 discovery session to understand your need.",
      description: "Assess your current financial situation.",
      description2: "Create a mixed investment portfolio.",
      height: 260,
      background: "#0055A5",
    },
    {
      title: "02 identifying your goals",
      description: "Set up your financial goals.",
      description2: "Plan on saving tax using investment options.",
      height: 317,
      background: "#0066C7",
    },
    {
      title: "03 plan that's customised for you.",
      description: "Choose the best investment plans.",
      description2: "Start building an adequate retirement corpus.",
      height: 367,
      background: "#0078E9",
    },
    {
      title: "04 best-suited investments to your plan.",
      description: "Keep a track and monitor your financial plan.",
      description2: "Pick the right life insurance plan for risk coverage.",
      height: 412,
      background: "#0081FA",
    },
    {
      title: "05 review & navigate you to your goals.",
      description: "Keep a track and monitor your financial plan.",
      description2: "Pick the right life insurance plan for risk coverage.",
      height: 467,
      background: "#0C89FF",
    },
  ];
  return (
    <div className={Styles.howmain}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={Styles.howhead}>
              <h2 className="">{heads}</h2>
            </div>
            {/* {/* <div className={Styles.howimgcontent}>
              <Image src={path1} />
            </div> */}
             {/* <div className={Styles.squaremain}>
              {SquareData?.map((data, index) => {
                return (
                  <div
                    className={Styles.firstsquare}
                    style={{ height: `${data.height}px`, backgroundColor:`${data.background}` }}
                    key={index}
                  >
                    <h3>{data.title}</h3>
                    <p>{data?.description}</p>
                    <p>{data?.description2}</p>
                  </div>
                );
              })}
            </div>  */}
            <div className={Styles.Trackgoal}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowDO;
