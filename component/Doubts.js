import React, { useEffect } from "react";
import styles from "../assets/styles/Doubts.module.css";
import Image from "next/image";
import bacimg from "../assets/img/home/goal.png";
import btnimg from "../assets/img/home/1.png";
import { IMG_BASE_URL } from "./utils/services";
import { useState } from "react";
const Doubts = ({ heading, Watch_our_video, video_link, video_img }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  useEffect(() => {

    let srcUri;
    if (video_link && video_link.search('youtube.com') !== -1 && video_link.search('watch?v=') === -1) {
      srcUri = video_link.replace('watch?v=', 'embed/');
    }
    setVideoLink(srcUri);
  }, [video_link]);
  return (
    <div className={styles.maindiv}>
      <div className={styles.maindivheading}>
        <h2>{heading}</h2>
        <p>{Watch_our_video}</p>
      </div>
      <div className={styles.watchvideo} onClick={() => setPlayVideo(true)}>
        {!playVideo && (
          <>
            <img src={`${IMG_BASE_URL}${video_img}`} alt="video_img" />
            <div className={styles.redbutton}>
              <a id="play-video" className={styles.videoplaybutton}>
                <span></span>
              </a>
              {/* <p>watch our video</p> */}
            </div>
          </>
        )}
        {playVideo && videoLink && (
          <>
            <iframe
              // src={"https://www.youtube.com/embed/58-atNakMWw?autoplay=1"}
              src={videoLink}
              frameborder="0"
              allowfullscreen
              controls
              className="doubtvideo"
            ></iframe>
            {/* <blockquote className="kappa-experience">
              <a class="kie-url" data-type="kie-url" href="https://kappax.io/engage/wQul5BnOfx8wyl"></a>
            </blockquote> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Doubts;
