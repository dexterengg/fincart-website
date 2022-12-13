import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { IMG_BASE_URL } from "../utils/services";
import styles from "../../assets/styles/Goalplanning.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Goalplanning({ InvestData,heading,section_seventh_description
}) {
  console.log(InvestData, "InvestDatatest6262727")

  return (
    <>
       <div className={styles.maindiv}>
      <div className="container">
        <div className={styles.maindivheading}>
          <h2>trusted partners </h2> 
           <p>Invest with some of the best mutual fund companies</p>
          <div className="row justify-content-center align-items-center">
        </div>
          <Swiper
            cssMode={true}
            slidesPerView={5}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            // pagination={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={`financial ${styles.mainfinancial}`}
            breakpoints={{
              1060: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 20,

            
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 20,

                navigation:false
              },
            
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation:false
              },
              330: {
                slidesPerView: 2,
                spaceBetween: 50,
                navigation:false
              },
            }}
          >
          {
            InvestData?.map((data, index) => {
              return(
                
                <SwiperSlide key={index}>
            
            <div className={`col-md-2 ${styles.goalcontent}`}>
              <img
                src={`${IMG_BASE_URL}${data?.attributes?.PartnerLogo?.data?.attributes?.url}`}
                alt="Img"
              />
            </div>
              </SwiperSlide>
              )
            })
          }
            {/* <SwiperSlide>
            
          <div className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}>
            <img
              src={`${IMG_BASE_URL}${section_seventh_logo_1?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Img"
            />
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}>
            <img
              src={`${IMG_BASE_URL}${section_seventh_logo_2?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Img"
            />
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}>
            <img
              src={`${IMG_BASE_URL}${section_seventh_logo_3?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Img"
            />
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}>
            <img
              src={`${IMG_BASE_URL}${section_seventh_logo_4?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Img"
            />
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}>
            <img
              src={`${IMG_BASE_URL}${section_seventh_logo_5?.data?.attributes?.formats?.thumbnail?.url}`}
              alt="Img"
            />
          </div>
            </SwiperSlide> */}
          </Swiper>
          </div>
          </div>
          </div>
          </>
  )
}

export default Goalplanning