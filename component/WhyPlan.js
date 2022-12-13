import React from "react";
import Styles from "../assets/styles/WhyPlan.module.css";

const WhyPlan = ({head,Title1,Title2,Title3,description1,description2,description3}) => {
  const philosophyData = [
    {
      title: "set & achieve your goals",
      description:
        "Stay a step ahead by identifying financial goals & creating a plan to achieve them.",
    },
    {
      title: "take informed decisions",
      description:
        "Once your goals are set, they act as markers for your financial journey.",
    },
    {
      title: "be ready for emergency",
      description:
        " Financial planning allocates funds that can be utilised in case of an emergency.",
    },
  ];

  return (
    <div className={Styles.banhead} id="whyplan" >
      <div className="container">
        <div class="row">
          <div className="col-md-12">
            <div className={Styles.ban2head}>
              <h2 className="">{head}</h2>
            </div>
          </div>
        </div>
        <div className="row pt-4">
        <div className="col-md-4">
                <div className={Styles.philosphyContent}>
                  <h3>{Title1}</h3>
                  <p>{description1}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.philosphyContent}>
                  <h3>{Title2}</h3>
                  <p>{description2}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.philosphyContent}>
                  <h3>{Title3}</h3>
                  <p>{description3}</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};
export default WhyPlan;
