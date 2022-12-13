import React from "react";
import styles from "../../assets/styles/Bloginnerhead.module.css";
import Image from "next/image";
import path1 from "../../assets/img/footer/Untitled-2.png";
import path7 from "../../assets/img/footer/phone.png";
import path8 from "../../assets/img/footer/study.png";
// import path2 from "../../assets/img/become/Icon feather-eye.png";
// import path3 from "../../assets/img/become/Icon ionic-md-time.png";
import path2 from "../../assets/img/become/eye.png";
import path3 from "../../assets/img/become/time.png";
import path4 from "../../assets/img/Logo/Untitled-2@2x.png";
import path5 from "../../assets/img/become/Untitled-2@2x.png";
import path6 from "../../assets/img/blog/bloginners.png";
import { Table } from "reactstrap";
import BlogCard from "./Blogcard";
import { IMG_BASE_URL } from "../utils/services";
import ReactMarkdown from "react-markdown";

const Bloginnerhead = ({ BlogData, relatedPost }) => {
  console.log(relatedPost, "relatedPost");

  return (
    <>
      <div className={styles.maindiv}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className={styles.featuredHeading}>
                <h3>{BlogData?.attributes?.title}</h3>
              </div>
              {/* <div className={styles.timeMain}>
                <div className={styles.tag}>
                  <span>
                    {BlogData?.attributes?.tag?.data?.attributes?.Name}
                  </span>
                </div>
                <div className={styles.timeClasses}>
                  <Image src={path3} alt="img" />
                  <span>{BlogData?.attributes?.date}</span>
                </div>
                <div className={styles.viewsClasses}>
                  <Image src={path2} alt="img" />
                  <span>{BlogData?.attributes?.time}</span>
                </div>
              </div> */}
              <div className="row d-flex justify-content-center ">
                <div className="col-md-10 col-sm-12 pt-5 pb-5">
                  <div className={styles.innerban}>
                    <img
                      src={`${IMG_BASE_URL}${BlogData?.attributes?.inner_img?.data?.attributes?.formats?.medium?.url}`}
                      alt="img" className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.description}>
                    {/* eslint-disable-next-line */}
                    <ReactMarkdown
                      className={styles.content}
                      children={BlogData?.attributes?.content}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.innerbottom}>
            <div className="container">
              <div className="row">
                <div className={styles.blogcardhead}>
                  <h3>you might also like</h3>
                </div>

                {relatedPost.map((obj, id) => (
                  <div className="col-md-4 d-flex align-items-stretch" key={id}>
                    <BlogCard data={obj} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New End */}
    </>
  );
};

export default Bloginnerhead;
