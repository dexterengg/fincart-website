import React from "react";
import styles from "../../assets/styles/Hand.module.css";
import Image from "next/image";
import path1 from "../../assets/img/Logo/Image 1@2x.png";
import path2 from "../../assets/img/Logo/Image 2@2x.png";
import path3 from "../../assets/img/Logo/Image 3@2x.png";
import path4 from "../../assets/img/Logo/Image 5@2x.png";
import path5 from "../../assets/img/Logo/Image 4@2x.png";
import path6 from "../../assets/img/Logo/Image 6@2x.png";
const Hand = () => {
  const HandData = [
    {
      imgicon: path1,
      title: "axis growth opportunities fund",
      description: "35.57% (3Y Returns)",
    },
    {
      imgicon: path2,
      title: "kotak small cap fund direct-growth",
      description: "23% (5Y Returns)",
    },
    {
      imgicon: path3,
      title: "tata mutual fund",
      description: "15% (1Y Returns)",
    },
    {
      imgicon: path4,
      title: "association of mutual funds of india",
      description: "15% (1Y Returns)",
    },
    {
      imgicon: path5,
      title: "nippon india mutual fund",
      description: "25.57% (3Y Returns)",
    },
    {
      imgicon: path6,
      title: "sbi mutual funds",
      description: "23% (5Y Returns)",
    },
  ];
  return (
    <div className={styles.mainclass}>
      <div className="container">
        <div className={styles.maindiv}>
          <h2>hand-picked for you</h2>
          <p>
            Some of our recommended mutual funds according to investment
            duration.
          </p>
        </div>
        <div className="row">
          {HandData.map((data, index) => {
            return (
              <div className={`col-md-4 ${styles.handcontent}`} key={index}>
                <div className={`${index !== 2 && index !== 5 && styles.borderRight}`}>
                  <Image src={data.imgicon} alt="Img" />
                  <h3>{data.title}</h3>
                </div>
                <p>{data?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hand;
