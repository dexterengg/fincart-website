import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../assets/styles/LeadingCrousal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay } from "swiper";
import CarouselImg from "../../assets/img/home/Image@2x.png";
import { IMG_BASE_URL } from "../utils/services";

const QualifiedTeam = ({
  section_fourth_title,
  section_fourth_description,
  video,
}) => {
  const TeamData = [
    {
      id: 0,
      userImg: CarouselImg,
      title: section_fourth_title,
      description: section_fourth_description,
    },
    {
      id: 1,
      userImg: CarouselImg,
      title: section_fourth_title,
      description: section_fourth_description,
    },
    {
      id: 2,
      userImg: CarouselImg,
      title: section_fourth_title,
      description: section_fourth_description,
    },
    {
      id: 3,
      userImg: CarouselImg,
      title: section_fourth_title,
      description: section_fourth_description,
    },
  ];

  const [Qualification, SetQualification] = useState({});
  const [swiper, setSwiper] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const Qualifiedteamdata = (i) => {
    const datafilter = TeamData.filter((item) => {
      return item.id == i?.activeIndex;
    });
    SetQualification(datafilter[0]);
  };

  return (
    <div className={styles.QualifiedTeamMain}>
      <div className="container">
        <Row>
          <Col md="6" className="order-md-0 order-1 forTextCenter">
            <div className="Team_Qualification">
              {/* <h2>{Qualification?.title}</h2>
              <p>
                {isReadMore
                  ? Qualification?.description &&
                    Qualification?.description.slice(0, 110)
                  : Qualification?.description}

                <span onClick={toggleReadMore} className="read-or-hide"></span>
              </p> */}
              <h2>{section_fourth_title}</h2>
              <p>
                {isReadMore
                  ? section_fourth_description &&
                  section_fourth_description.slice(0, 110)
                  : section_fourth_description}

                <span onClick={toggleReadMore} className="read-or-hide"></span>
              </p>
            </div>
          </Col>
          <Col md="6" className="order-md-1 order-0 forSwiperOverflowHidden height-20rem width-20rem">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={10}
              slidesPerGroup={1}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
              //   loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              onSlideChange={(i) => Qualifiedteamdata(i)}
              className="QualifiedCustomCarousel"
              onSwiper={setSwiper}
              breakpoints={{
                960: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                720: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                540: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                320: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
              }}
            >
              {video?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Row>
                      <div
                        className={`${styles.teamcarouselUserDesc} hideCarouselsection`}
                      >
                        <img src={`${IMG_BASE_URL}${data?.attributes?.formats?.small?.url}`} />
                      </div>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default QualifiedTeam;
