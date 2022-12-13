import React from "react";
import style from "../assets/styles/Testmonial.module.css";

const Testmonial = ({
  heading,
  testimonials_name_1,
  testimonials_subtitle_1,
  testimonials_description_1,
  testimonials_name_2,
  testimonials_subtitle_2,
  testimonials_description_2,
  testimonials_name_3,
  testimonials_subtitle_3,
  testimonials_description_3,
}) => {
 
  return (
    <div className="container">
      <div className={style.testimonialMain}>
        <h2>{heading}</h2>
        <div className="row">
          <div
            className={`col-md-4 px-5 text-center ${style.testmonialContent}`}
          >
            <div className={style.NameProfession}>
              <h3>{testimonials_name_1}</h3>
              {/* <h4>{testimonials_subtitle_1}</h4> */}
            </div>
            <p>{testimonials_description_1}</p>
          </div>

          <div
            className={`col-md-4 px-5 text-center ${style.testmonialContent}`}
          >
            <div className={style.NameProfession}>
              <h3>{testimonials_name_2}</h3>
              {/* <h4>{testimonials_subtitle_2}</h4> */}
            </div>
            <p>{testimonials_description_2}</p>
          </div>

          <div
            className={`col-md-4 px-5 text-center ${style.testmonialContent}`}
          >
            <div className={style.NameProfession}>
              <h3>{testimonials_name_3}</h3>
              {/* <h4>{testimonials_subtitle_3}</h4> */}
            </div>
            <p>{testimonials_description_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
