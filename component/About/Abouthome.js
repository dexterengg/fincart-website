import React, { useState } from "react";
import style from "../../assets/styles/About.module.css";
import path1 from "../../assets/img/home/RightArrow-W.png";
import Image from "next/image";
import path2 from "../../assets/img/about/cross.svg";
import "animate.css";
const Abouthome = ({ section_first_heading, section_first_description }) => {
  let _newHead = section_first_heading.slice(0, 23);

  const [showOnClickDownload, setShowOnClickDownload] = useState(false);
  const [aboutbanner, setaboutbanner] = useState(true);
  const ShowNav = () => {
    setShowOnClickDownload(true);
    setTimeout(function () {
      setaboutbanner(false);
    }, 2000);
  };
  const CloseNav = () => {
    setShowOnClickDownload(false);
    setaboutbanner(true);
  };
  return (
    <>
      {aboutbanner && (
        <div
          className={`animate__animated animate__backInUp animate__slideInDown  animate__slow animate__delay-0s ${style.homemain}`}
        >
          <div className="container">
          <div className={style.aboutios}>
            <div className={style.maindivHeading}>
              <h3>{section_first_heading.slice(0, 23)}</h3>
              <h3>{section_first_heading.slice(23, 40)}</h3>
              <h3>{section_first_heading.slice(40)}</h3>
            </div>
            <div className={style.maindivpara}>
              <p>{section_first_description}</p>
            </div>
            {/* <Howbtn
            title="get to know us"
            bgcolor="#fff"
            arrowcolorbg="#0055A5"
            arrowfill="#fff"
            titlecolor="#fff"
          /> */}
            {/* <a href="#mission" className={`btn ${style.abouthovereffect}`}>Explore more </a> */}
            <a href="#mission" className={`btn ${style.abouthovereffect}`}>
              Explore more{" "}
            </a>
            </div>

            {/* <div className={style.mainhow}>
              <div className={style.arrowbutton} onClick={ShowNav}>
                <a href="#" className={style.arwimg}>
                  <Image src={path1} />
                </a>
              </div>
              <div className={style.line}></div>
              <div className={style.arrowtext}>
                <p>get to know us</p>
              </div>
            </div> */}
          </div>
          {/* {showOnClickDownload && 
        <Login
        data = {showOnClickDownload}
        CloseNav ={CloseNav}
        // "	" =isOpen,
        />
        } */}
        </div>
      )}
      {showOnClickDownload && (
        <div
          className={`animate__animated animate__backInUp animate__rollIn animate__slideInUp animate__slow animate__delay-0s ${style.maindiv}`}
        >
          <div onClick={() => CloseNav()} className={style.crossbtn}>
            <Image src={path2} />
          </div>
          <div className="container">
            <div className="row">
              <div className={style.maindivheading}>
                <h2>get in touch</h2>

                <p>
                  Begin your journey towards financial freedom with our team of
                  experts.
                </p>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className={style.name}>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className={style.name}>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="EMAIL ID"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.name}>
                    <input
                      type="mobile"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="MOBILE NUMBER"
                    />
                  </div>
                  <div className={`textareas ${style.name}`}>
                    <textarea
                      id="message"
                      classname="form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className={style.submit}>
                    <button href="" type="submit" className={style.submitbtn}>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Abouthome;
