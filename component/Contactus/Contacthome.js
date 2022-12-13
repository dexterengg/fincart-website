import React from "react";
import styles from "../../assets/styles/Contact.module.css";
import path1 from "../../assets/img/contact/mail.png";
import path2 from "../../assets/img/contact/phone.png";
import path3 from "../../assets/img/contact/location.png";
import path4 from "../../assets/img/home/RightArrow-W.png";
import Link from "next/link";

import Image from "next/image";
import Howbtn from "../Howbtn";
const Contacthome = ({heading,mobile,mailId,Location,view_map_link}) => {
  const ContacthomeData = [
    {
      imgicon: path2,
      title: "number",
      description: "+ (91) 7247075470",
    },
    {
      imgicon: path1,
      title: "email",
      description: "info@fincart.com",
    },
    {
      imgicon: path3,
      title: "address",
      description: "A-22, Block A, Sector 4, Noida, Uttar Pradesh 201301",
    },
  ];

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.maindivHeading}>
          <div className="container">
            <h3>{heading}</h3>

            <div className="row d-flex align-items-stretch">
              {/* {ContacthomeData?.map((data, index) => {
                return (
                  <div
                    className={`col-md-4 ${styles.contactDetailsContent} ${
                      index !== 2 && styles.borderRight
                    }`}
                    key={index}
                  >
                    <div className={styles.imgcontent}>
                      <Image src={data.imgicon} alt="Img" />
                    </div>
                    <h4 className={styles.subcontent}>{data.title}</h4>
                    <p className={styles.para}>{data.description}</p>
                  </div>
                );
              })} */}
              <div
                    className={`col-md-4 ${styles.contactDetailsContent} ${
                      styles.borderRight
                    }`}
                  >
                    <div className={styles.imgcontent}>
                      <Image src={path1} alt="Img" />
                    </div>
                    <h4 className={styles.subcontent}>number</h4>
                    <p className={styles.para}>{mobile}</p>
                  </div>
              <div
                    className={`col-md-4 ${styles.contactDetailsContent} ${
                      styles.borderRight
                    }`}
                  >
                    <div className={styles.imgcontent}>
                      <Image src={path1} alt="Img" />
                    </div>
                    <h4 className={styles.subcontent}>email</h4>
                    <p className={styles.para}>{mailId}</p>
                  </div>
              <div
                    className={`col-md-4 ${styles.contactDetailsContent} ${
                      styles.borderRight
                    }`}
                  >
                    <div className={styles.imgcontent}>
                      <Image src={path1} alt="Img" />
                    </div>
                    <h4 className={styles.subcontent}>address</h4>
                    <p className={styles.para}>{Location}</p>
                  </div>
            </div>
          </div>
          <div className={styles.contactbtn}>
          <a href={`${view_map_link}`} target ="_blank" className={`btn ${styles.investeffect}`}>view the map</a>

               {/* <Howbtn title = "view the map" titlecolor="#0055A5" bgcolor="#0055A5" arrowcolorbg ="#0055A5" arrowfill = "#fff"/> */}
               {/* <div className={styles.mainhow}>
              <div className={styles.arrowbutton}>
                <a href="https://goo.gl/maps/13eAam3vg91Hrw9j6" target ="_blank" className={styles.arwimg}>
                  <Image src={path4} />
                </a>
              </div>
              <div className={styles.line}></div>
              <div className={styles.arrowtext}>
                <p>view the map</p>
              </div>
            </div> */}
              </div>
        </div>
      </div>
    </>
  );
};

export default Contacthome;


