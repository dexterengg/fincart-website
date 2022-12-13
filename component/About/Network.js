import React from "react";
import Image from "next/image";
import styles from "../../assets/styles/Network.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMG_BASE_URL } from "../utils/services";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Network = ({
  sec_seventh_heading,
  sec_seventh_description,
  networkdata,
}) => {
  console.log(networkdata, "networkdata");
  // const NetworkData = [
  //   {
  //     imgicon: path1,
  //   },
  //   {
  //     imgicon: path2,
  //   },
  //   {
  //     imgicon: path3,
  //   },
  //   {
  //     imgicon: path4,
  //   },
  //   {
  //     imgicon: path5,
  //   },
  // ];
  return (
    <div className={styles.maindiv}>
    <div className="container">
      <div className={styles.maindivheading}>
        <h2>{sec_seventh_heading}</h2>
        <p>{sec_seventh_description}</p>
      </div>
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
              spaceBetween: 50,
            },
            960: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            330: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
        {
          networkdata?.map((data, index) => {
            return(
              
              <SwiperSlide key={index}>
          
              <div
                  className={`col-md-2 col-sm-6 col-6 ${styles.goalcontent}`}
                  key={index}
                >
                  <div className={styles.networkImg}>
                    <img
                      src={`${IMG_BASE_URL}${data?.attributes?.url}`}
                      alt="Test"
                    />
                  </div>
                </div>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
        </div>
        </div>
  );
};

export default Network;
