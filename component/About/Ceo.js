import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "../../assets/styles/Ceo.module.css";
import path1 from "../../assets/img/home/Untitled-1@2x.png";
import { IMG_BASE_URL } from "../utils/services";
const Ceo = ({
  sec_fourth_message,
  sec_fourth_title,
  sec_fourth_description,
  sec_fourth_profile,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [forMobile, setForMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setForMobile(true)
    }
  })
  return (
    <div className={style.maindiv}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-12">
            <div className={style.imgcontent}>
              <img src={`${IMG_BASE_URL}${sec_fourth_profile}`} alt="Test" className="img-fluid" />

            </div>
          </div>

          <div className="col-lg-8 col-sm-12 col-12">
            <div className={style.maindivHeading}>
              <h3>{sec_fourth_message}</h3>
            </div>
            <div className={style.maindivsubheading}>
              <p>{sec_fourth_title}</p>
            </div>
            {
              forMobile ?
                <div className={style.mainpara}>
                  <p>{readMore ? sec_fourth_description : sec_fourth_description?.slice(0, 147)}</p>
                  <a onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}</a>
                </div>
                :
                <p>{sec_fourth_description}</p>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
