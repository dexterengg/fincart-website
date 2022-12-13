import React from "react";
import styles from "../../assets/styles/Bloginnerhead.module.css";
import Image from "next/image";
import path1 from "../../assets/img/footer/Untitled-2.png";
import path7 from "../../assets/img/footer/phone.png";
import path8 from "../../assets/img/footer/study.png";
// import path2 from "../../assets/img/become/Icon feather-eye.png";
// import path3 from "../../assets/img/become/Icon ionic-md-time.png";
import path2 from "../../assets/img/become/eye.png";
import path3 from "../../assets/img/become/time.png";
import path4 from "../../assets/img/Logo/Untitled-2@2x.png";
import path5 from "../../assets/img/become/Untitled-2@2x.png";
import path6 from "../../assets/img/blog/bloginners.png";
import { Table } from "reactstrap";
import BlogCard from "./Blogcard";

const Bloginnerheads = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className="container">
          <div className={styles.featuredHeading}>
            <h3>filing income tax return</h3>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Bloginnerheads;
