import React from "react";
import styles from "../../assets/styles/Mission.module.css";
const Mission = ({sec_second_misson,sec_second_misson_description,sec_second_vision,sec_second_vision_description}) => {
  const MissionData = [
    {
      title: "misson",
      description:
        "Leverage technology & multiple channels to deliver ethical simple qualified personal advice to Indians across the globe.",
    },
    {
      title: "vision",
      description:
        "Make a meaningful impact to the lives of 10 million Indians across the globe by 2030 with sound and profitable investments.",
    },
  ];
  return (
    <>
      <div className={styles.maindiv} id="mission">
        <div className="container">
          <div className="row">
            {/* {MissionData?.map((data, index) => {
              return (
                <div
                  className={`col-md-6 ${styles.Missioncontent} ${
                    index !== 1 && styles.borderRight
                  }`}
                >
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              );
            })} */}
            <div
                  className={`col-md-6 ${styles.Missioncontent} ${
                     styles.borderRight
                  }`}
                >
                  <h3>{sec_second_misson}</h3>
                  <p>{sec_second_misson_description}</p>
                </div>
            <div
                  className={`col-md-6 ${styles.Missioncontent}`
                    
                  }
                >
                  <h3>{sec_second_vision}</h3>
                  <p>{sec_second_vision_description}</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
