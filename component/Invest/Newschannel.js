import React from "react";
import styles from "../../assets/styles/Newschannel.module.css";
import Image from "next/image";
import path1 from "../../assets/img/home/business.png";
import path2 from "../../assets/img/home/business.png";
const Newschannel = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.maindivheading}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>catch us live on leading news channels</h2>
              <p>
                Have a look at some of our live sessions with leading news &
                media companies where we share the latest trends, insights &
                hacks related to financial well-being.
              </p>
              <Image src={path1} />
              <Image src={path2}  />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newschannel;
