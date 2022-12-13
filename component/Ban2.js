import React from "react";
import Styles from "../assets/styles/ban2.module.css";


const Ban2 = ({
  heading,
  description,
  plan,
  subtitle,
  planDescription,
  invest,
  investSubtitle,
  investDescription,
  prosper,
  prosperSubtitle,
  prosperDescription,
  isabout,
}) => {
  return (
    <div className={`${Styles.banhead} ${isabout && 'p-0 m-0'}`} id="philosphy">
      <div className="container">
        <div class="row">
          <div className="col-md-12">
            <div className={Styles.ban2head}>
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row pt-1">
          <div className="col-md-4">
            <div className={Styles.philosphyContent}>
              <h3>{plan}</h3>
              <h4>{subtitle}</h4>
              <p>{planDescription}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.philosphyContent}>
              <h3>{invest}</h3>
              <h4>{investSubtitle}</h4>
              <p>{investDescription}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={Styles.philosphyContent}>
              <h3>{prosper}</h3>
              <h4>{prosperSubtitle}</h4>
              <p>{prosperDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ban2;
