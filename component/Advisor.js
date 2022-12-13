import React, { useState, useEffect } from "react";
import style from "../assets/styles/Advisor.module.css";
import Image from "next/image";
import btnimg from "../assets/img/home/watchbutton.svg";
import { IMG_BASE_URL } from "./utils/services";
const Advisor = ({
  heading,
  section_third_titile_1,
  section_third_titile_2,
  section_third_titile_3,
  section_third_titile_4,
  section_third_titile_5,
  video_link,
  video_img

}) => {
  const [isClassActive, setIsClassActive] = useState(false);
  const [registerFincart, setRegisterFincart] = useState(true);
  const [attendOnline, setAttendOnline] = useState(false);
  const [examApply, setExamApply] = useState(false);
  const [partnerToGrow, setPartnerToGrow] = useState(false);
  const [applyForNum, setApplyForNum] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const [playVideo, setPlayVideo] = useState(false);

  const handleActiveClass = (id) => {
    setIsClassActive({
      [id]: !isClassActive[id],
    });
  };

  const handleRegisterFincart = () => {
    setRegisterFincart(true);
    setAttendOnline(false);
    setExamApply(false);
    setPartnerToGrow(false);
    setApplyForNum(false);
  };
  const handleAttendOnline = () => {
    setRegisterFincart(false);
    setExamApply(false);
    setPartnerToGrow(false);
    setAttendOnline(true);
    setApplyForNum(false);
  };
  const handleExamapply = () => {
    setRegisterFincart(false);
    setExamApply(true);
    setPartnerToGrow(false);
    setAttendOnline(false);
    setApplyForNum(false);
  };
  const handleApplyForNum = () => {
    setRegisterFincart(false);
    setExamApply(false);
    setPartnerToGrow(false);
    setAttendOnline(false);
    setApplyForNum(true);
  };
  const handlepartnerToGrow = () => {
    setRegisterFincart(false);
    setExamApply(false);
    setPartnerToGrow(true);
    setAttendOnline(false);
    setApplyForNum(false);
  };

  useEffect(() => {

    let srcUri;
    if ( video_link && video_link.search('youtube.com') !== -1 && video_link.search('watch?v=') === -1) {
      srcUri = video_link.replace('watch?v=', 'embed/');
  }
    setVideoLink(srcUri);
  }, [video_link]);

  const advisorData = [
    {
      id: 1,
      title: "register with fincart",
    },
    {
      id: 2,
      title: "attend online nism va exam training, revise, mock-test.",
    },
    {
      id: 3,
      title: "pass for nism va exam",
    },
    {
      id: 4,
      title: "apply for amfi registration number (arn)",
    },
    {
      id: 5,
      title: "partner to grow with fincart.",
    },
  ];
  return (
    <div className={style.maindiv}>
      <div className="conainer">
        <div className={style.maindivheading}>
          <h2>{heading}</h2>
        </div>
        <div className={`row m-0 ${style.advisorContentPad}`}>
          <div className="col-md-6 col-sm-12">
            <div
              className="row pb-4 d-flex justify-content-center align-items-center"
              onClick={() => handleRegisterFincart()}
            >
              <div className="col-md-3 col-s-3 col-3 d-flex justify-content-center align-items-center">
                <div
                  // className={`${
                  //   registerFincart
                  //     ? `${style.dotStyleDivActive}`
                  //     : `${style.dotStyleDiv}`
                  // }`}
                  className={style.dotStyleDivActive}
                >
                  <span className={style.dotStyleSpan}>
                    {`01`}
                  </span>
                </div>
              </div>
              <div
                // className={`col-md-9 col-s-9 col-9 ${
                //   registerFincart
                //     ? `${style.registerHeadingActive}`
                //     : `${style.registerHeading}`
                // }`}
                className={`col-md-9 col-s-9 col-9 ${style.registerHeadingActive}`}
              >
                <h4>{section_third_titile_1}</h4>
              </div>
            </div>
            <div
              className="row pb-4 d-flex justify-content-center align-items-center"
              onClick={() => handleAttendOnline()}
            >
              <div className="col-md-3 col-s-3 col-3 d-flex justify-content-center align-items-center">
                <div
                  // className={`${
                  //   attendOnline
                  //     ? `${style.dotStyleDivActive}`
                  //     : `${style.dotStyleDiv}`
                  // }`}
                  className={style.dotStyleDivActive}
                >
                  <span className={style.dotStyleSpan}>
                    {/* {attendOnline ? `02` : ""} */}
                    {"02"}
                  </span>
                </div>
              </div>
              <div
                // className={`col-md-9 col-s-9 col-9 ${
                //   attendOnline
                //     ? `${style.registerHeadingActive}`
                //     : `${style.registerHeading}`
                // }`}
                className={`col-md-9 col-s-9 col-9 ${style.registerHeadingActive}`}
              >
                <h4>{section_third_titile_2}</h4>
              </div>
            </div>
            <div
              className="row pb-4 d-flex justify-content-center align-items-center"
              onClick={() => handleExamapply()}
            >
              <div className="col-md-3 col-s-3 col-3 d-flex justify-content-center align-items-center">
                <div
                  // className={`${
                  //   examApply
                  //     ? `${style.dotStyleDivActive}`
                  //     : `${style.dotStyleDiv}`
                  // }`}
                  className={style.dotStyleDivActive}
                >
                  <span className={style.dotStyleSpan}>
                    {/* {examApply ? `03` : ""} */}
                    {"03"}
                  </span>
                </div>
              </div>
              <div
                // className={`col-md-9 col-s-9 col-9 ${
                //   examApply
                //     ? `${style.registerHeadingActive}`
                //     : `${style.registerHeading}`
                // }`}
                className={`col-md-9 col-s-9 col-9 ${style.registerHeadingActive}`}
              >
                <h4>{section_third_titile_3}</h4>
              </div>
            </div>
            <div
              className="row pb-4 d-flex justify-content-center align-items-center"
              onClick={() => handleApplyForNum()}
            >
              <div className="col-md-3 col-s-3 col-3 d-flex justify-content-center align-items-center">
                <div
                  // className={`${
                  //   applyForNum
                  //     ? `${style.dotStyleDivActive}`
                  //     : `${style.dotStyleDiv}`
                  // }`}
                  className={style.dotStyleDivActive}
                >
                  <span className={style.dotStyleSpan}>
                    {/* {applyForNum ? `04` : ""} */}
                    {"04"}
                  </span>
                </div>
              </div>
              <div
                // className={`col-md-9 col-s-9 col-9 ${
                //   applyForNum
                //     ? `${style.registerHeadingActive}`
                //     : `${style.registerHeading}`
                // }`}
                className={`col-md-9 col-s-9 col-9 ${style.registerHeadingActive}`}
              >
                <h4>{section_third_titile_4}</h4>
              </div>
            </div>
            <div
              className="row pb-4 d-flex justify-content-center align-items-center"
              onClick={() => handlepartnerToGrow()}
            >
              <div className="col-md-3 col-s-3 col-3 d-flex justify-content-center align-items-center">
                <div
                  // className={`${
                  //   partnerToGrow
                  //     ? `${style.dotStyleDivActive}`
                  //     : `${style.dotStyleDiv}`
                  // }`}
                  className={style.dotStyleDivActive}
                >
                  <span className={style.dotStyleSpan}>
                    {/* {partnerToGrow ? `05` : ""} */}
                    {"05"}
                  </span>
                </div>
              </div>
              <div
                // className={`col-md-9 col-s-9 col-9 ${
                //   partnerToGrow
                //     ? `${style.registerHeadingActive}`
                //     : `${style.registerHeading}`
                // }`}
                className={`col-md-9 col-s-9 col-9 ${style.registerHeadingActive}`}
              >
                <h4>{section_third_titile_5}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className={style.watchmain}>
              <h4>Watch our video to answer your questions of common fear.</h4>
            </div>
            <div className={style.watchvideo} onClick={() => setPlayVideo(true)}>
        {!playVideo && (
          <>
            <img src={`${IMG_BASE_URL}${video_img}`} alt="video_img" />
            <div className={style.redbutton}>
              <a id="play-video" className={style.videoplaybutton}>
                <span></span>
              </a>
              {/* <p>watch our video</p> */}
            </div>
          </>
        )}
        {playVideo && videoLink && (
          <iframe
            // src={"https://www.youtube.com/embed/58-atNakMWw?autoplay=1"}
            src={videoLink}
            frameborder="0"
            allowfullscreen
            controls
            className="doubtvideo"
          ></iframe>
        )}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
