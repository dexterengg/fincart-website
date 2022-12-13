import React from "react";
import styles from "../../assets/styles/Filter2.module.css";
const Filter = ({
  heading,
  section_fourth_title,
  section_fourth_description,
  section_fourth_product_1,
  section_fourth_product_2,
  section_fourth_product_3,
  section_fourth_product_4,
  section_fourth_product_5,
  section_fourth_product_6,
  section_fourth_product_7,
}) => {
  const DataFilter = [
    {
      content: "mutual funds",
    },
    {
      content: "life insurance",
    },
    {
      content: "fixed deposits",
    },
    {
      content: "health insurance",
    },
    {
      content: "alternative investment funds",
    },
    {
      content: "digital gold",
    },
    {
      content: "portfolio management services",
    },
  ];
  return (
    <div className={styles.maindiv}>
      <div className="container">
        <div className={`container ${styles.maindivHeading}`}>
          <h2>{heading}</h2>
          <h4>{section_fourth_title}</h4>
          <p>{section_fourth_description}</p>
        </div>

        <div className="row">
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_1}</p>
          </div>
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_2}</p>
          </div>

          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_3}</p>
          </div>
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_4}</p>
          </div>
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_5}</p>
          </div>
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_6}</p>
          </div>
          <div
            className={`col-md-3 col-lg-4 col-xl-3 ${styles.filterContentText} ${styles.filterContent}`}
          >
            <p>{section_fourth_product_7}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
