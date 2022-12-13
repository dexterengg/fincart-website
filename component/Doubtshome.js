import React from "react";
import styles from "../assets/styles/Doubts.module.css";
const Doubtshome = ({ heading, Watch_our_video, video_link, video_img }) => {
    
    return (
        <div className={styles.maindiv}>
            <div className={styles.maindivheading}>
                <h2>{heading}</h2>
                <p>{Watch_our_video}</p>
            </div>
            <div className={`${styles.watchVideoHeight}`}>
                <blockquote className="kappa-experience">
                    <a class="kie-url" data-type="kie-url" href={`${video_link}`}></a>
                </blockquote>
            </div>
        </div>
    );
};

export default Doubtshome;
