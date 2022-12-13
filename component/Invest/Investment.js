import React from "react";
import Image from "next/image";
import styles from "../../assets/styles/Investment.module.css";
import path1 from "../../assets/img/Protect/beat.png";
import path2 from "../../assets/img/Protect/achieve.png";
import path3 from "../../assets/img/Protect/create.png";
const Investment = ({
  heading,
  section_second_description,
  section_second_title_1,
  section_second_description_1,
  section_second_title_2,
  section_second_description_2,
  section_second_title_3,
  section_second_description_3,

}) => {
  const InvestmentData = [
    {
      icon: path1,
   
    },
    {
      icon: path2,

    },
    {
      icon: path3,

    },
  ];
  return (
    <div className={styles.maindiv} id="whyinvest">
      <div className="container">
        <div className={styles.maindivHeading}>
          <h2>{heading}</h2>
          <p>{section_second_description}</p>
        </div>
        <div className="row">
          <div className={`col-md-4 ${styles.Investmentcontent}`}>
            <div className={styles.imgcontent}>
              <Image src={path1} />
            </div>
            <h3>{section_second_title_1}</h3>
            <p>{section_second_description_1}</p>
          </div>
    
          <div className={`col-md-4 ${styles.Investmentcontent}`}>
            <div className={styles.imgcontent}>
              <Image src={path2} />
            </div>
            <h3>{section_second_title_2}</h3>
            <p>{section_second_description_2}</p>
          </div>
          <div className={`col-md-4 ${styles.Investmentcontent}`}>
            <div className={styles.imgcontent}>
              <Image src={path3} />
            </div>
            <h3>{section_second_title_3}</h3>
            <p>{section_second_description_3}</p>
          </div>
          </div>
        </div>
        </div>
  );
};

export default Investment;
