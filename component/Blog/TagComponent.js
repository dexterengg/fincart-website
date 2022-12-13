import React from "react";
import styles from "../../assets/styles/Recent.module.css";
import Image from "next/image";
import path1 from "../../mailto:assets/img/footer/untitled-2@2x.png";
import path2 from "../../assets/img/footer/phone.png";
import path3 from "../../assets/img/footer/slide.png";
import path4 from "../../assets/img/footer/study.png";
import path5 from "../../assets/img/footer/home.png";
import path6 from "../../mailto:assets/img/footer/untitled-2-recovered@2x.png";
import path7 from "../../assets/img/become/Icon ionic-md-time.png";
import path8 from "../../assets/img/become/Icon feather-eye.png";
import Howbtn from "../Howbtn";

const Recent = () => {
  const RecentData = [
    {
      imgicon: path1,
      title: "term insurance",
      subtitle:
        "What is the difference between Term Insurance and Traditional Life Insurance?",
      para: "The gossip sessions while having dinner, watching movies before sleeping, and having that amazing cup of tea in the morning, are connections that you must have with your family. The love of a family is life’s greatest blessing!",
      date: "June 29, 2022",
      readTime: "4 mins read",
    },
    {
      imgicon: path2,
      title: "filing income tax return",
      subtitle:
        "How to Calculate Your Income Tax Bracket and How to Save Maximum Tax?",
      para: "It’s the time for TAX FILING!! But wait, do you know which income tax bracket your income falls in? This is a very crucial step to know, as the income level increases you will be taxed at different rates that are known to be the slab rates.",
      date: "June 15, 2022",
      readTime: "6 mins read",
    },
    {
      imgicon: path3,
      title: "mutual funds",
      subtitle:
        "Why Market is Down – Should You Invest in a Mutual Fund When the Market is Down?",
      para: "The market has and will always be a volatile place. History has shown us some of the most significant crashes like the 1992 crash due to the Harshad Mehta Scam, the financial crisis of 2008, and the 2020 crash due to the outbreak of COVID.",
      date: "June 8, 2022",
      readTime: "5 mins read",
    },
    {
      imgicon: path4,
      title: "financial planning",
      subtitle:
        "How can a financial advisor help in your financial planning journey?",
      para: "Have you ever thought about why there are coaches to guide you in sports? Or teachers to guide you through your initial school years? Why are we need guidance? We need guidance to excel in our life, follow our goals and learn from our experiences.",
      date: "June 2, 2022",
      readTime: "5 mins read",
    },
    {
      imgicon: path5,
      title: "term insurance",
      subtitle:
        "Which is the Best Short-Term Investment Plan that Provides High Returns?",
      para: "There is a common saying that, “Money doesn’t buy happiness”. Well, I beg to differ on this. Money does buy you happiness, if not you then your family your kids. Money lets your daughter get the rightful education she needs to make her way into the world",
      date: "May 23, 2022",
      readTime: "5 mins read",
    },
    {
      imgicon: path6,
      title: "retirement planning",
      subtitle: "How to factor inflation in your retirement planning?",
      para: "Do you remember the time when our grandparents used to say, “humare time pe to ye toh cheez itni saste mei milti thi” “a sack of 20kg rice used to come at today’s 1kg price”?",
      date: "May 23, 2022",
      readTime: "5 mins read",
    },
  ];
  return (
    <div className={styles.maindiv}>
      <div className={styles.recentheadng}>
        <h3>recent blogs</h3>
      </div>
      <div className="container">
        {RecentData?.map((data, index) => {
          return (
            <div
              className={`row mb-4 ${styles.recentBlogBorder} ${
                RecentData.length - (index + 1) === 0 && styles.borderNoneclass
              }`}
              key={index}
            >
              <div className="col-md-2">
                <div className={styles.imgmaincontent}>
                  <Image src={data.imgicon} alt="Img" />
                </div>
              </div>
              <div className="col-md-7">
                <div className={styles.textContent}>
                  <h3>{data.title}</h3>
                  <h4>{data.subtitle}</h4>
                  <p>{data.para}</p>
                </div>
                <div className={styles.timeMain}>
                  <div className={styles.timeClasses}>
                    <Image src={path7} alt="img" />
                    <span>{data.date}</span>
                  </div>
                  <div className={styles.viewsClasses}>
                    <Image src={path8} alt="img" />
                    <span>{data.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
