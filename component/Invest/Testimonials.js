import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../assets/styles/Testimonials.module.css";
import { IMG_BASE_URL } from "../utils/services";
const Testimonials = ({ section_ninth_heading, section_ninth_description, video_link, video_img }) => {
  console.log(video_link, "video_link")
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
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.mainheading}>
              <h3>{section_ninth_heading}</h3>
              <p>
                {section_ninth_description}
              </p>
            </div>
            <div className={`cursor ${styles.btnsection}`}>
              <Link href={"tel:+07247075470"}>
                <a>
                  <p className={`btn ${styles.teamhovereffect}`}>call now </p>
                </a>
              </Link>
            </div>

          </div>
          <div className="col-md-6">
            <div className={styles.watchvideo} onClick={() => setPlayVideo(true)}>
              {!playVideo && (
                <>
                  <img src={`${IMG_BASE_URL}${video_img}`} className="img-fluid" alt="video_img" />
                  <div className={styles.redbutton}>
                    <a id="play-video" className={styles.videoplaybutton}>
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

export default Testimonials;
