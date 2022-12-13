import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import style from "../assets/styles/Financial.module.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useRouter } from "next/router";
import { IMG_BASE_URL } from './utils/services';

function Goalplanning({ blogAllData
}) {
  console.log(blogAllData, "blogAllData")
  const Route = useRouter();

  const handleBlogClick =(link) => {
    Route.push(`/blogs/${link}`)
  }
  return (
    <>
   <div className={style.maindiv}>
   <div className='container-fluid m-0 p-0'>
      <div className={style.maindivHeading}>
        <h2 className={style.innerheading}>
          know more about financial planning
        </h2>
   
          {/* <div className="row justify-content-center align-items-center">
        </div> */}
          <Swiper
            cssMode={true}
            slidesPerView={4}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            spaceBetween= {50}
            // pagination={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={`financial financialplanning homefinancialbuttonswiper  ${style.mainfinancial}`}
            breakpoints={{
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1060: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768:{
                slidesPerView: 2,
                spaceBetween: 20,
              },
              720: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              330: {
                slidesPerView: 1.3,
                spaceBetween: 50,
              },
            }}
          >
          {
            blogAllData?.map((data, index) => {
              return(
                
                <SwiperSlide key={index}>
                <div className={`cursor ${style.planningContent}`} onClick={() => handleBlogClick(data?.attributes?.slug)}>
                  <div className={style.innerplanning} >
                    <img
                      src={`${IMG_BASE_URL}${data?.attributes?.Banner_img?.data[0]?.attributes?.formats?.small?.url}`}
                      alt="Img" className='img-fluid'
                    />
                    <h3>{data?.attributes?.title}</h3>
                    {/* <p>{data?.attributes?.Brief_overview}</p> */}
                  </div>
                </div>
              </SwiperSlide>
              )
            })
          }
          </Swiper>
          </div>
          </div>
          </div>
          </>
  )
}

export default Goalplanning