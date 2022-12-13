import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../assets/styles/Financialhelpus.module.css";
const Financialhelpus = ({
  process_h1,
  process_desc,
  drawn,
  drawn_desc,
  helps_h1,
  helps_desc,
  raise,
  raise_desc
}) => {
  const FinancialhelpusData = [
    {
      description: "drawn:",
      title:
        "To fulfil your Dreams, we take a reality check to understand how far your dream is at present. Then we utilize the Available resources optimally to help you achieve your goal. The way forward is the action plan. Navigation is regularly reviewing your plan & investment to ensure that you remain on track to achieving your goals.",
    },
    {
      description: "emergency:",
      title:
        "We help you create an Emergency Fund for all money-related uncertainties. The Risk-Protection ring fences your life risks via Insurance planning. Goal planning provides you with the road map to achieving your goals confidently. Retirement planning factors inflation to ensure you accumulate a decent corpus to live a self-reliant and comfortable life. Estate planning seamlessly transfers your hard-earned money to your legal heir.",
    },
    {
      description: "raise:",
      title:
        "We ascertain your risk profile, that's the starting point for creating an optimal asset allocation. We review your existing investments and integrate them after filtering the good ones. The scheme selection is carefully researched and suggested based on your risk profile and your goal's time horizon. Our job does not end here, we regularly evaluate your portfolio and re-balance them to ensure that they help you achieve your life goals confidently.",
    },
  ];
  return (
    <div className={styles.maindiv}>
      <div className={styles.planSectionDiv}>
        <div className="container-fluid myContainer">
          <div className={styles.mainheading}>
            <h3>{process_h1}</h3>
         
            <ReactMarkdown
              className={styles.sectionDesc}
              children={process_desc}
            />
          </div>
          <div>
            {/* {FinancialhelpusData?.map((data, index) => {
              return (
                <div className="row">
                  <div className={`col-md-3 col-xl-3`}>
                    <div className={styles.firstColMain}>
                      <div className={styles.numberitem}>{`0${index + 1}`}</div>
                      <div className="mx-4 mb-4">
                        <h4 className={styles.subcontent}>
                          {data?.description}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                    <p>{data?.title}</p>
                  </div>
                </div>
              );
            })} */}

            {/* <div className="row">
              <div className={`col-md-3 col-xl-3`}>
                <div className={styles.firstColMain}>
                  <div className={styles.numberitem}>01</div>
                  <div className="mx-4 mb-4">
                    <h4 className={styles.subcontent}>{drawn}</h4>
                  </div>
                </div>
              </div>
              <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                <p>{drawn_desc}</p>
              </div>
            </div>
            <div className="row">
              <div className={`col-md-3 col-xl-3`}>
                <div className={styles.firstColMain}>
                  <div className={styles.numberitem}>02</div>
                  <div className="mx-4 mb-4">
                    <h4 className={styles.subcontent}>{helps_h1}</h4>
                  </div>
                </div>
              </div>
              <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                <p>{helps_desc}</p>
              </div>
            </div>
            <div className="row">
              <div className={`col-md-3 col-xl-3`}>
                <div className={styles.firstColMain}>
                  <div className={styles.numberitem}>03</div>
                  <div className="mx-4 mb-4">
                    <h4 className={styles.subcontent}>{raise}</h4>
                  </div>
                </div>
              </div>
              <div className={`col-md-9 col-xl-9 ${styles.beReadyContent}`}>
                <p>{raise_desc}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financialhelpus;
