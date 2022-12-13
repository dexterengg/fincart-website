import React from "react";
import styles from "../assets/styles/achievement.module.css";
const Achievements = ({heading,clients,consultants,awards}) => {
  const AchievementData = [
    {
      title: "4000",
      para: "clients",
    },
    {
      title: "30",
      para: "consultants",
    },
    {
      title: "15",
      para: "awards",
    },
    {
      title: "334",
      para: "reviews",
      spanName : "(4.7 reviews)"
    },
  ];
  return (
    <div className={styles.maindiv}>
      <div className={styles.maindivheading}>
        <h2>{heading}</h2>
      </div>
      <div className="container">
        <div className="row">
     
              <div className={`col-md-3 ${styles.achievementCol}`}>
                <h4>{clients}</h4>
                <p>clients</p>
              </div>
              <div className={`col-md-3 ${styles.achievementCol}`}>
                <h4>{consultants}</h4>
                <p>consultants</p>

              </div>
          
              <div className={`col-md-3 ${styles.achievementCol}`}>
                <h4>{awards}</h4>
                <p>awards</p>

              </div>
              <div className={`col-md-3 ${styles.achievementCol}`}>
                <h4>334</h4>
                <p>reviews<span className={styles.spantext}>(4.7 reviews)</span></p>
            
              </div>
          
        </div>
      </div>
    </div>
  );
};

export default Achievements;
