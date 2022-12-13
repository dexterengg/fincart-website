import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../../assets/styles/Featured.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import path1 from "../../assets/img/become/Untitled-1@2x.png";
import path2 from "../../assets/img/become/eye.png";
import path3 from "../../assets/img/become/time.png";
import path4 from "../../assets/img/Logo/Untitled-2@2x.png";
import path5 from "../../assets/img/become/Untitled-2@2x.png";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { IMG_BASE_URL } from "../utils/services";
import { useRouter } from "next/router";

export default function QualifiedTeam({
  sec_sixth_description,
  teamdata,
  financialdata,
  supportdata,
  featuredData,
}) {
  console.log(featuredData, "featuredData");
  const Route = useRouter();
  const handleBlogClick = (link) => {
    Route.push(`/blogs/${link}`);
  };
  return (
    <div className={`outerfincial ${style.mainDiv}`}>
      <div className="container">
        <div className={style.maindivHeading}>
          <h3>featured blogs</h3>
        </div>
        <div className={`planners ${style.mainsubheading}`}>
          <Swiper
            cssMode={true}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={`financial ${style.mainfinancial}`}
            breakpoints={{
                960: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                720: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                540: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
          >
          
            {featuredData?.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={` cursor {style.maindivfinicial}`}
                    onClick={() => handleBlogClick(data?.attributes?.slug)}
                  >
                    <div className={style.mainfinancialimg}>
                      <img className="img-fluid"
                        src={`${IMG_BASE_URL}${data?.attributes?.inner_img?.data?.attributes?.formats?.medium?.url}`}
                        alt="Test"
                      />
                    </div>
                    <div className={style.featured}>
                      <h3 className={style.maincontent}>
                        {data?.attributes?.title}
                      </h3>
                      {/* <h4 className={style.president}>
                        {data?.attributes?.Brief_overview}
                      </h4> */}
                      {/* <div className={style.timeMain}>
                        <div className={style.timeClasses}>
                          <Image src={path2} alt="img" />
                          <span>{data?.attributes?.date}</span>
                        </div>
                        <div className={style.viewsClasses}>
                          <Image src={path3} alt="img" />
                          <span>{data?.attributes?.time}</span>
                        </div>
                      </div> */}
                    </div>
                    {/* <p className={style.subpara}>
                    {data?.attributes?.content}
                    </p> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
