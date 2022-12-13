import React from "react";
import style from "../assets/styles/Progress.module.css";
import Image from "next/image";
import path1 from "../assets/img/home/graph.svg";
import { IMG_BASE_URL } from "./utils/services";
const Progress = ({heading,trackDescription,video_img, track_image}) => {
  console.log(video_img, "video_img")
  return (
    <div className={style.maindiv}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={style.maindivheading}>
            <img
                      src={`${IMG_BASE_URL}${track_image}`}
                      alt="Img" className='img-fluid'
                    />

            </div>
          </div>
          <div className="col-md-6">
            <div className={style.headheading}>
              <h2>{heading}</h2>
              <p>
             {trackDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
