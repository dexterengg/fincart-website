import styles from "../../assets/styles/ProtectionCover.module.css";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import { useEffect, useState } from "react";
import path2 from "../../assets/img/Protect/Group 3033.svg";
import path1 from "../../assets/img/Protect/Group 2845.svg";
import path3 from "../../assets/img/Protect/Group 3034.svg";
import path4 from "../../assets/img/Protect/Group 2842.svg";

const ProtectionCover = ({
  heading,
  title1,
  title2,
  title3,
  section_fourth_heading,
  description1,
  description2,
  description3,
  section_fourth_description,
}) => {
  const [isClassActive, setIsClassActive] = useState(false);
  const [isClassActives, setIsClassActives] = useState(false);
  const [isClassActivess, setIsClassActivess] = useState(false);

  const handleActiveClass1 = () => {
    setIsClassActive(true);
    setIsClassActives(false);
    setIsClassActivess(false);
  };
  const handleActiveClass2 = () => {
    setIsClassActive(false);
    setIsClassActives(true);
    setIsClassActivess(false);
  };
  const handleActiveClass3 = () => {
    setIsClassActive(false);
    setIsClassActives(false);
    setIsClassActivess(true);
  };

  // const handleActiveClass =(id) =>{
  //   setIsClassActive({
  //     [id] : !isClassActive[id]
  //   })
  // }

  useEffect(() => {
    setIsClassActive({
      [1]: !isClassActive[1],
    });
  }, []);

  const advisorData = [
    {
      // id: 1,
      title: "term insurance",
      description:
        "No one can predict any disease or unforeseen illness, this asks for earlier preparation in the form of health insurance. The strike of any serious illness can leave one in a financial crisis but with a health insurance policy, it becomes easy to save your savings from the financial strain.",
    },
    {
      // id: 2,
      title: "Health insurance",
      description:
        "Some critical diseases eat all the savings and fall out of the basic health insurance plan causing severe financial crises; critical insurance plan comes here for the rescue.",
    },
    {
      // id: 3,
      title: "critical insurance",
      description:
        "A plan that comes with affordable premiums and provides high-value life cover. It offers substantially longer coverage with the accidental death benefits.",
    },
  ];
  return (
    <>
      <section className={styles.outerAdvanta}>
        <div className={styles.InnearHome}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={styles.Faqhead}>
                  <h1>{heading}</h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className={styles.activemaindiv}>
                  {/* {
                advisorData.map((data, index) => {
                return (
                  <div className="row pb-4 d-flex justify-content-center align-items-center cursorPointer" key={index} onClick={() => handleActiveClass(data.id)}>
                    <div className="col-md-2 col-lg-3 col-sm-12 col-s-1 col-1 d-flex justify-content-center align-items-center">
                      <div className={`${isClassActive[data.id] ? `${styles.dotStyleDivActive}` : `${styles.dotStyleDiv}`}`} >
                        <span className={styles.dotStyleSpan}>{isClassActive[data.id] ? `0${data.id}` : ''}</span>
                      </div>
                    </div>  
                    <div className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${isClassActive[data.id] ? `${styles.registerHeadingActive}` : `${styles.registerHeading}`}`}>
                      <h3>{data.title}</h3>
                    </div>
                 
                    <div className={`col-md-7 col-s-8 col-sm-12 col-lg-6 col-8`}>
                       <div className={styles.outerdiv}> 
                       <div className={`${isClassActive[data.id] ? `${styles.registerHeadingActives}` : `${styles.registerHeading}`}`}> 
                          <p className={styles.activedata}>{data.description}</p>
                      </div>
                       </div>
                    </div>
                  </div>
                )
              })
            } */}
                  <div
                    className="row pb-4 d-flex justify-content-center align-items-center"
                    onClick={() => handleActiveClass1()}
                  >
                    <div className="col-md-2 col-lg-2 col-sm-12 col-s-1 col-1 d-flex justify-content-center align-items-center">
                      <div
                        // className={`${
                        //   isClassActive
                        //     ? `${styles.dotStyleDivActive}`
                        //     : `${styles.dotStyleDiv}`
                        // }`}
                        className={styles.dotStyleDivActive}
                      >
                        {/* <span className={styles.dotStyleSpan}>{isClassActive ? `01` : ''}</span> */}
                        {/* {isClassActive && ( */}
                          <Image
                            src={path1}
                            alt="Img"
                            className={`img-fluid ${styles.beReadyImgs}`}
                          />
                        {/* )} */}
                      </div>
                    </div>
                    <div
                      // className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${
                      //   isClassActive
                      //     ? `${styles.registerHeadingActive}`
                      //     : `${styles.registerHeading}`
                      // }`}
                      className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${styles.registerHeadingActive}`}
                    >
                      <h3>{title1}</h3>
                    </div>

                    <div
                      className={`col-md-7 col-s-8 col-sm-12 col-lg-6 col-8`}
                    >
                      <div className={styles.outerdiv}>
                        <div
                          // className={`${
                          //   isClassActive
                          //     ? `${styles.registerHeadingActives}`
                          //     : `${styles.registerHeading}`
                          // }`}
                          className={`${styles.registerHeadingActives}`}
                        >
                          <p className={styles.activedata}>{description1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row pb-4 d-flex justify-content-center align-items-center"
                    onClick={() => handleActiveClass2()}
                  >
                    <div className="col-md-2 col-lg-2 col-sm-12 col-s-1 col-1 d-flex justify-content-center align-items-center">
                      <div
                        // className={`${
                        //   isClassActives
                        //     ? `${styles.dotStyleDivActive}`
                        //     : `${styles.dotStyleDiv}`
                        // }`}
                        className={styles.dotStyleDivActive}

                      >
                        {/* <span className={styles.dotStyleSpan}>{isClassActives ? `02` : ''}</span> */}
                        {/* {isClassActives && ( */}
                        <Image
                          src={path2}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                        {/* )} */}
                      </div>
                    </div>
                    <div
                      // className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${
                      //   isClassActives
                      //     ? `${styles.registerHeadingActive}`
                      //     : `${styles.registerHeading}`
                      // }`}
                      className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${styles.registerHeadingActive}`}

                    >
                      <h3>{title2}</h3>
                    </div>

                    <div
                      className={`col-md-7 col-s-8 col-sm-12 col-lg-6 col-8`}
                    >
                      <div className={styles.outerdiv}>
                        <div
                          // className={`${
                          //   isClassActives
                          //     ? `${styles.registerHeadingActives}`
                          //     : `${styles.registerHeading}`
                          // }`}
                          className={`${styles.registerHeadingActives}`}

                        >
                          <p className={styles.activedata}>{description2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row pb-4 d-flex justify-content-center align-items-center"
                    onClick={() => handleActiveClass3()}
                  >
                    <div className="col-md-2 col-lg-2 col-sm-12 col-s-1 col-1 d-flex justify-content-center align-items-center">
                      <div
                        // className={`${
                        //   isClassActivess
                        //     ? `${styles.dotStyleDivActive}`
                        //     : `${styles.dotStyleDiv}`
                        // }`}
                        className={styles.dotStyleDivActive}

                      >
                        {/* <span className={styles.dotStyleSpan}>{isClassActivess ? `03` : ''}</span> */}
                        {/* {isClassActivess && ( */}
                        <Image
                          src={path3}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                        {/* )} */}
                      </div>
                    </div>
                    <div
                      // className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${
                      //   isClassActivess
                      //     ? `${styles.registerHeadingActive}`
                      //     : `${styles.registerHeading}`
                      // }`}
                      className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${styles.registerHeadingActive}`}

                    >
                      <h3>{title3}</h3>
                    </div>

                    <div
                      className={`col-md-7 col-s-8 col-sm-12 col-lg-6 col-8`}
                    >
                      <div className={styles.outerdiv}>
                        <div
                          // className={`${
                          //   isClassActivess
                          //     ? `${styles.registerHeadingActives}`
                          //     : `${styles.registerHeading}`
                          // }`}
                          className={`${styles.registerHeadingActives}`}

                        >
                          <p className={styles.activedata}>{description3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row pb-4 d-flex justify-content-center align-items-center"
                    onClick={() => handleActiveClass3()}
                  >
                    <div className="col-md-2 col-lg-2 col-sm-12 col-s-1 col-1 d-flex justify-content-center align-items-center">
                      <div
                        // className={`${
                        //   isClassActivess
                        //     ? `${styles.dotStyleDivActive}`
                        //     : `${styles.dotStyleDiv}`
                        // }`}
                        className={styles.dotStyleDivActive}

                      >
                        {/* <span className={styles.dotStyleSpan}>{isClassActivess ? `03` : ''}</span> */}
                        {/* {isClassActivess && ( */}
                        <Image
                          src={path4}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                        {/* )} */}
                      </div>
                    </div>
                    <div
                      // className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${
                      //   isClassActivess
                      //     ? `${styles.registerHeadingActive}`
                      //     : `${styles.registerHeading}`
                      // }`}
                      className={`col-md-3 col-lg-3 col-sm-12 col-s-3 col-3 ${styles.registerHeadingActive}`}

                    >
                      <h3>{section_fourth_heading}</h3>
                    </div>

                    <div
                      className={`col-md-7 col-s-8 col-sm-12 col-lg-6 col-8`}
                    >
                      <div className={styles.outerdiv}>
                        <div
                          // className={`${
                          //   isClassActivess
                          //     ? `${styles.registerHeadingActives}`
                          //     : `${styles.registerHeading}`
                          // }`}
                          className={`${styles.registerHeadingActives}`}

                        >
                          <p className={styles.activedata}>{section_fourth_description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtectionCover;
