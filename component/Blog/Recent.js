import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../../assets/styles/Recent.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import path7 from "../../assets/img/become/eye.png";
import path8 from "../../assets/img/become/time.png";
import path1 from "../../assets/img/footer/Untitled-2@2x.png";
import path2 from "../../assets/img/footer/phone.png";
import path3 from "../../assets/img/footer/slide.png";
import path4 from "../../assets/img/footer/study.png";
import path5 from "../../assets/img/footer/home.png";
import path6 from "../../assets/img/footer/Untitled-2-Recovered@2x.png";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { IMG_BASE_URL } from "../utils/services";
import { useRouter } from "next/router";

export default function QualifiedTeam({
  sec_sixth_description,
  teamdata,
  financialdata,
  BlogData,
  supportdata,
}) {
  console.log(BlogData, "BlogData");
  const Route = useRouter();
  const handleBlogClick =(link) => {
    Route.push(`/blogs/${link}`)
  }
  return (
    <div className={`outerfincial ${style.mainDiv}`}>
      <div className="container">
        <div className={style.maindivHeading}>
          <h3>recent blogs</h3>
        </div>
        <div className={`planners ${style.mainsubheading}`}>
          <div className="row gx-5">
            {BlogData.map((data, index) => {
              return (
                <div className="col-md-4">
                <div className={` cursor {style.maindivfinicial}`} key={index} onClick={() => handleBlogClick(data?.attributes?.slug)} >
                  <div className={style.mainfinancialimg}>
                  
                    <img
                      src={`${IMG_BASE_URL}${data?.attributes?.Banner_img?.data[0]?.attributes?.formats?.medium?.url}`}
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className={style.maincontent}>
                    {data?.attributes?.title}
                  </h3>
                  {/* <h4 className={style.president}>
                    {data?.attributes?.Brief_overview}
                  </h4> */}
                  {/* <div className={style.timeMain}>
                    <div className={style.timeClasses}>
                      <Image src={path7} alt="img" />
                      <span>{data?.attributes?.date}</span>
                    </div>
                    <div className={style.viewsClasses}>
                      <Image src={path8} alt="img" />
                      <span>{data?.attributes?.time}</span>
                    </div>
                  </div> */}
                </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className={`planners ${style.mainsubheading}`}>
          <div className="row gx-5">
            {BlogData.map((data, index) => {
              return (
                <div className="col-md-4">
                <div className={style.maindivfinicial} key={index}>
                  <div className={style.mainfinancialimg}>
                    <img
                      src={`${IMG_BASE_URL}${data?.attributes?.Banner_img?.data[0]?.attributes?.formats?.medium?.url}`}
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className={style.maincontent}>
                    {data?.attributes?.title}
                  </h3>
                  <h4 className={style.president}>
                    {data?.attributes?.Brief_overview}
                  </h4>
                  <div className={style.timeMain}>
                    <div className={style.timeClasses}>
                      <Image src={path7} alt="img" />
                      <span>June 29, 2022</span>
                    </div>
                    <div className={style.viewsClasses}>
                      <Image src={path8} alt="img" />
                      <span>4 mins read</span>
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div> */}


      </div>
    </div>
  );
}
