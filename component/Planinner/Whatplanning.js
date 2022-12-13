import React from "react";
import styles from "../../assets/styles/Whatplanning.module.css";
import path1 from "../../assets/img/Logo/Group 2715.svg";
import path2 from "../../assets/img/Logo/beat.png";
import Image from "next/image";
const Whatplanning = ({
  sec_2_h1,
  sec_2_desc,
  sec_3_h1,
  sec_3_desc,
  sec3_desc1,
  sec3_desc2,
  sec3_desc3,
  sec3_desc4,
}) => {
  const WhatplanningData = [
    {
      imgicon: path2,
      title: "Stability and profitability in a long run.",
    },
    {
      imgicon: path1,
      title: "Eliminates all the uncertainties and market fluctuations.",
    },
    {
      imgicon: path1,
      title: "Tackles inflation with the availability of contingency funds.",
    },
    {
      imgicon: path1,
      title: "A considerable increase in the profits.",
    },
  ];
  return (
    <div className={styles.maindiv} id="whatplanning">
      <div className="container">
        <div className="row">
          <div className={styles.mainheading}>
            <h3>{sec_2_h1}</h3>
            <p>{sec_2_desc}</p>
          </div>
          <div className={styles.whyheading}>
            <h4>{sec_3_h1}</h4>
            <p>{sec_3_desc}</p>
          </div>
          {/* {
    WhatplanningData?.map((data,index)=>{
        return(
            <div className='col-md-3' key={index}>

<h4 className={styles.subcontent}>{data.title}</h4>

            </div>
        )
    })
} */}

          <div className="col-md-3">
            <h4 className={styles.subcontent}>{sec3_desc1}</h4>
          </div>
          <div className="col-md-3">
            <h4 className={styles.subcontent}>{sec3_desc2}</h4>
          </div>
          <div className="col-md-3">
            <h4 className={styles.subcontent}>{sec3_desc3}</h4>
          </div>
          <div className="col-md-3">
            <h4 className={styles.subcontent}>{sec3_desc4}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatplanning;
