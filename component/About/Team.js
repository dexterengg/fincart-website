import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import path1 from "../../assets/img/Plan/Untitled-9.png";
import path2 from "../../assets/img/Plan/Untitled-7.png";
import path3 from "../../assets/img/Plan/Untitled-10.png";
import path4 from "../../assets/img/Plan/Untitled-8.png";
import path5 from "../../assets/img/Protect/Untitled-1.png";
import path6 from "../../assets/img/Protect/Untitled-2.png";
import path7 from "../../assets/img/Protect/Untitled-3.png";
import path8 from "../../assets/img/Protect/Untitled-4.png";
import path9 from "../../assets/img/comp/Untitled-1.png";
import path10 from "../../assets/img/comp/Untitled-2.png";
import path11 from "../../assets/img/comp/Untitled-3.png";
import path12 from "../../assets/img/comp/Untitled-4.png";
import linkedInIcon from "../../assets/img/linkedin.svg";
import Image from "next/image";
import style from "../../assets/styles/Team.module.css";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { IMG_BASE_URL } from "../utils/services";

export default function QualifiedTeam({ sec_sixth_description, teamdata, financialdata, supportdata }) {
  console.log(financialdata, "financialdata");
  return (
    <div className={`outerfincial ${style.mainDiv}`}>
      <div className="container">
        <div className={style.maindivHeading}>
          {/* <h3>team of experts</h3> */}
          <p>{sec_sixth_description}</p>
        </div>
        <div className={`planners ${style.mainsubheading}`}>
          <h4>financial planners</h4>
          <Swiper
            cssMode={true}
            slidesPerView={4}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            // pagination={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={`financial ${style.mainfinancial}`}
            breakpoints={{
              1060: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              720: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              540: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              330: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
            }}
          >
            {financialdata &&
              financialdata?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={style.mobilePadding}>
                      <div className={style.mainfinancialimg}>
                        <img src={`${IMG_BASE_URL}${data?.attributes?.profile?.data?.attributes?.url}`} alt="Test" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className={style.teamNameDesig}>
                          <h3 className={style.maincontent}>
                            {data?.attributes?.name}
                          </h3>
                          <h5 className={style.president}>
                            {" "}
                            {data?.attributes?.designation}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <a href={`${data?.attributes?.linkedin_link}`} target={"_blank"}>
                            <Image src={linkedInIcon} alt="linkedin" />
                          </a>
                        </div>
                      </div>
                      <p className={style.presidents}>
                        {data?.attributes?.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            {/* <SwiperSlide>
              <div className={style.maindivfinicial}>
                <div className={style.mainfinancialimg}>
                  <Image src={path1} alt="Test" />
                </div>
                <h3 className={style.maincontent}>tapesh lohia</h3>
                <h5 className={style.president}>Vice President </h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.Curabitur eu
                  est in velit rutrum dapibus quis eu nulla.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path2} alt="Test" />
                </div>
                <h3 className={style.maincontent}>ravi sharma</h3>
                <h5 className={style.president}>Asst. Vice President</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path3} alt="Test" />
                </div>
                <h3 className={style.maincontent}>shagil amin</h3>
                <h5 className={style.president}>Financial Planner</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path4} alt="Test" />
                </div>
                <h3 className={style.maincontent}>anmol gupta</h3>
                <h5 className={style.president}>Financial Planner</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path5} alt="Test" />
                </div>
                <h3 className={style.maincontent}>anmol gupta</h3>
                <h5 className={style.president}>Financial Planner</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className={style.teamheading}>
          <h4>technology team</h4>
          <Swiper
            cssMode={true}
            slidesPerView={4}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            // pagination={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className={`financial ${style.mainfinancial}`}
            breakpoints={{
              1060: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              720: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              540: {
                slidesPerView: 1.3,
                spaceBetween: 50,
              },
              320: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
            }}
          >
            {teamdata &&
              teamdata?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={style.mobilePadding}>
                      <div className={style.mainfinancialimg}>
                        <img src={`${IMG_BASE_URL}${data?.attributes?.profile?.data?.attributes?.url}`} alt="Test" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className={style.teamNameDesig}>
                          <h3 className={style.maincontent}>
                            {data?.attributes?.name}
                          </h3>
                          <h5 className={style.president}>
                            {" "}
                            {data?.attributes?.designation}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <a href={`${data?.attributes?.linkedin_link}`} target={"_blank"}>
                            <Image src={linkedInIcon} alt="linkedin" />
                          </a>
                        </div>
                      </div>
                      <p className={style.presidents}>
                        {data?.attributes?.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className={style.supportmainheading}>
          <h4>support /account</h4>
          <Swiper
            cssMode={true}
            slidesPerView={4}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            keyboard={true}
       
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={`financial ${style.mainfinancial}`}
            breakpoints={{
              1060: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              720: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              540: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },

              360: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
            }}
          >
            {supportdata &&
              supportdata?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={style.mobilePadding}>
                      <div className={style.mainfinancialimg}>
                        <img src={`${IMG_BASE_URL}${data?.attributes?.profile?.data?.attributes?.url}`} alt="Test" />
                      </div>
                      <div className={style.fixedWidth}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className={style.teamNameDesig}>
                            <h3 className={style.maincontent}>
                              {data?.attributes?.name}
                            </h3>
                            <h5 className={style.president}>
                              {" "}
                              {data?.attributes?.designation}
                            </h5>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <a href={`${data?.attributes?.linkedin_link}`} target={"_blank"}>
                              <Image src={linkedInIcon} alt="linkedin" />
                            </a>
                          </div>
                        </div>
                        <p className={style.presidents}>
                          {data?.attributes?.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            {/* <SwiperSlide>
              <div>
                <div>
                  <div className={style.mainfinancialimg}>
                    <Image src={path9} alt="Test" />
                  </div>
                </div>
                <h3 className={style.maincontent}>kewal sharma</h3>
                <h5 className={style.president}> IT Manager</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.Curabitur eu
                  est in velit rutrum dapibus quis eu nulla.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path10} alt="Test" />
                </div>
                <h3 className={style.maincontent}>ravi sharma</h3>
                <h5 className={style.president}>Asst. Vice President</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path11} alt="Test" />
                </div>
                <h3 className={style.maincontent}>shagil amin</h3>
                <h5 className={style.president}>Financial Planner</h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path12} alt="Test" />
                </div>
                <h3 className={style.maincontent}>anmol gupta</h3>
                <h5 className={style.president}>Financial Planner </h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path12} alt="Test" />
                </div>
                <h3 className={style.maincontent}>anmol gupta</h3>
                <h5 className={style.president}>Financial Planner </h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={style.mainfinancialimg}>
                  <Image src={path12} alt="Test" />
                </div>
                <h3 className={style.maincontent}>anmol gupta</h3>
                <h5 className={style.president}>Financial Planner </h5>
                <p className={style.presidents}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris pretium fringilla neque vel scelerisque.
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
