// import React, { Image } from 'react';
import styles from "../assets/styles/Benefits.module.css";
import path2 from "../assets/img/become/become2.png";
import Video from "../assets/img/become/Video.png";
import icon1 from "../assets/img/become/icon1.png";
import icon2 from "../assets/img/become/icon2.png";
import icon3 from "../assets/img/become/icon3.png";
import icon4 from "../assets/img/become/icon4.png";
import icon5 from "../assets/img/become/icon5.png";
import icon6 from "../assets/img/become/icon6.png";
import Image from "next/image";
import classnames from "classnames";
import { Button } from "reactstrap";

const Benefits = () => {
  return (
    <>
      <section className={styles.outerAdvantag}>
      <div className={styles.color}>
          <Image src={path2} />
        </div>
        <div className="container">
          <div className={styles.InnearHome}>
            <div className="row">
              <div className="col-md-12">
                <div className={styles.benefitsection}>
                  <div className={styles.benefithead}>
                    <h2>Fincart Benefits</h2>
                  </div>
                  <div className={styles.stripsection}>
                    <div className={styles.topStripeBox}>
                       <Image src={icon1} />
                    </div>
                    <div className={styles.topStripeBox1}>
                    <Image src={icon2} />
                    </div>
                    <div className={styles.topStripeBox2}>
                    <Image src={icon3} />
                    </div>
                    <div className={styles.topStripeBox3}>
                    <Image src={icon4} />
                    </div>
                    <div className={styles.topStripeBox4}>
                    <Image src={icon5} />
                    </div>
                    <div className={styles.topStripeBox5}>
                    <Image src={icon6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.leftbecomebanner}>
                  <div className={styles.becomehaeder}>
                    <h1>How can you become an advisor?</h1>
                  </div>
                  <div className={styles.becomepoint}>
                    <ul className="List">
                      <li>Register with FINCART</li>
                      <li>
                        Attend Online NISM VA EXAM Training, Revise, Mock-Test.
                      </li>
                      <li>Pass for NISM VA EXAM</li>
                      <li>Apply for AMFI Registration Number (ARN)</li>
                      <li>Partner to grow with FINCART.</li>
                    </ul>
                  </div>
                  <Button className={styles.button} type="submit">
                    Join us
                  </Button>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.Rightbecomebanner}>
                  <div className={styles.videoimg}>
                    <Image src={Video} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
