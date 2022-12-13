import React from "react";
import styles from "../assets/styles/Filter.module.css";
const Filter = ({
  heading,
  products,
  productsDescription,
  product_1,
  product_2,
  product_3,
  product_4,
  product_5,
  product_6,
  product_7,
}) => {

  return (
    <div className={`container ${styles.maindiv}`}>
      <div className={`container ${styles.maindivHeading}`}>
        <h2>{heading}</h2>
        <h4>{products}</h4>
        <p>
        {productsDescription}
        </p>
      </div>

      <div className="row">
        <div className={`${styles.filterContent}`}>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_1}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_2}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_3}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_4}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_5}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_6}</p>
          </div>
          <div className={`col-md-3 ${styles.filterContentText}`}>
            <p>{product_7}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
