import styles from "../../assets/styles/Banner2.module.css";
import path1 from "../../assets/img/home/RightArrow-W.png";
import Image from "next/image";
import Howbtn from "../Howbtn";
import Howbtns from "../Howbtns";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "animate.css";
import path2 from "../../assets/img/about/cross.svg";
import swal from 'sweetalert';
import { toast } from "react-toastify";
import OtpTimer from "otp-timer";
import linkedInIcon from "../../assets/img/linkedinwhite.svg"
import facebookIcon from "../../assets/img/facebookwhite.svg"
import instagramIcon from "../../assets/img/instagramwhite.svg"
import twitterIcon from "../../assets/img/twitterwhite.svg"
import youtubeIcon from "../../assets/img/youtubewhite.svg"


import {
  getInTouchFormApi,
  getinTouchprotectPageformApi,
  getTouchInvestformApi,
  getinTouchbecomeagentpageformApi,
} from "../utils/services";
import { useRouter } from "next/router";
const otpurl = 'https://api.fincart.com/api/v2/b2b/InsertB2BEnquiry';
const submiturl = 'https://api.fincart.com/api/v2/b2b/InsertB2BEnquiry';
const Banner = ({
  heading,
  homePage,
  investPage,
  protectPage,
  becomeagentpage,
}) => {
  const [showOnbanner, setshowOnbanner] = useState(false);
  const [aboutbanner, setaboutbanner] = useState(true);
  const [thankyou, setThankYou] = useState(false)
  const [showPartnerText, setShowPartnerText] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log(router, "router")
    if (router?.pathname == "/becomeagent") {
      setShowPartnerText(true)
    }
  }, [])

  const Showlogin = () => {
    setshowOnbanner(true);
    // setaboutbanner(false);

    setTimeout(function () {
      setaboutbanner(false);
    }, 1000);
  };
  const CloseNav = () => {
    setshowOnbanner(false);
    setaboutbanner(true);
  };

  let _newHead = heading.slice(0, 23);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;
  const [formData, setFormData] = useState({});
  const [otpModel, setotpModel] = useState(false);
  const [firstNameError, setFirstNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [mobError, setMobError] = useState({});
  const [checked, setchecked] = useState(true);
  const [checkeds, setcheckeds] = useState(false);
  const [otpError, setotpError] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [loader, setLoader] = useState(false);

  const handleFormChange = (e) => {
    setchecked(true)
    setcheckeds(false)
    const _name = e.target.name;
    const _value = e.target.value;
    setFormData({
      ...formData,
      [_name]: _value,
    });
  };
  // const submitGetInTouch = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (homePage) {
  //       const result = await getInTouchFormApi({
  //         data: {
  //           name: formData.name,
  //           email: formData.email,
  //           Phone_No: formData.mobile,
  //         },
  //       });
  //       console.log(result);
  //     } else if (investPage) {
  //       const result = await getTouchInvestformApi({
  //         data: {
  //           name: formData.name,
  //           email: formData.email,
  //           Phone_No: formData.mobile,
  //         },
  //       });
  //       console.log(result);
  //     } else if (protectPage) {
  //       const result = await getinTouchprotectPageformApi({
  //         data: {
  //           name: formData.name,
  //           email: formData.email,
  //           Phone_No: formData.mobile,
  //         },
  //       });
  //       console.log(result);
  //     } else if (becomeagentpage) {
  //       const result = await getinTouchbecomeagentpageformApi({
  //         data: {
  //           name: formData.name,
  //           email: formData.email,
  //           Phone_No: formData.mobile,
  //         },
  //       });
  //       console.log(result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleGetotp = async (e) => {
    setchecked(false)
    setcheckeds(true)
    e?.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setLoader(true)
      setDisabledButton(true)
      try {
        const resp = await axios.post(otpurl, {
          LeadEmail: formData.email,
          LeadPhone: formData.mobile,
          LeadName: formData.name,
          otp: "",
          LeadTrackerCode: "570b7ee2-a212-4b2b-a05f-8f609cfb19d4",
          isVerifyOtp: "false",
          LeadPassword: 'Fincart@123',
        })
        console.log(resp)
        console.log(resp.data, "resp.data.data.status")
        // setotpModel(true)
        if (resp?.data?.status == "Success") {
          setDisabledButton(false)
          setLoader(false)
        }
        if (resp.data.status === "Error") {
          setDisabledButton(false)
          setLoader(false)

          // swal({
          //   title: resp.data.msg,
          //   icon: "warning",
          //   dangerMode: true,
          //   button: "Go To Login Page",
          // })
          toast.error(resp?.data?.msg)
            .then(function () {
              window.open("https://app.fincart.com/user/login", "_blank");
            });
          setchecked(true)
          setotpModel(false)
          setcheckeds(false)
        } else {
          setotpModel(true)
          setcheckeds(false)
        }
      } catch (error) {
        console.log(error.response)
        setDisabledButton(false)
        setLoader(false)
      }
    }
  }

  const submit = () => {
    handleGetotp();
    setLoader(false)
  };
  const submitGetInTouch = async (e) => {

    e?.preventDefault();
    const isValid = formValidations();
    if (isValid) {
      setLoader(true)
      setDisabledSubmit(true)
      try {
        const resp = await axios.post(submiturl, {
          LeadEmail: formData.email,
          LeadPhone: formData.mobile,
          LeadName: formData.name,
          otp: formData.otp,
          LeadTrackerCode: "570b7ee2-a212-4b2b-a05f-8f609cfb19d4",
          isVerifyOtp: "true",
          LeadPassword: 'Fincart@123',

        })
        console.log(resp)
        if (resp?.data?.status == "Success") {
          toast.success("submited successfully")
          setThankYou(true);
          setDisabledSubmit(false)
          setLoader(false)
          setotpModel(false)
          setShowGetInTouchModel(true)
        }
        if (resp.data.status === "Error") {
          setDisabledSubmit(false)
          setLoader(false)
          // swal({
          //   title: "Invalid OTP",
          //   icon: "warning",
          //   dangerMode: true,
          // });
          toast.error(resp?.data?.msg)
          // setFormData(null)
          setShowGetInTouchModel(true)
          setotpModel(true)
        } else {
          toast.success("Signup Completed", "You Can Login", "success");
          setFormData(null)
          setShowGetInTouchModel(false)
          setotpModel(false)
          setchecked(true)
          setcheckeds(false)
        }
      } catch (error) {
        console.log(error.response)
        setDisabledSubmit(false)
        setLoader(false)
      }
    }
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }


  const formValidation = () => {
    const firstNameError = {}
    const mobError = {};
    const emailError = {};
    let isValid = true;
    if (formData?.name === undefined) {
      firstNameError.shortName = "This field is mandatory"
      isValid = false;
    }
    if (!formData.mobile?.match(mobileRegex)) {
      mobError.invalidMob = "Enter 10 digit mobile no."
      isValid = false;
    }
    else if (String(formData.mobile)[0] < 6) {
      mobError.invalidMob = "Please enter valid mobile no."
      isValid = false;
    }
    if (!formData.email?.trim().match(emailRegex)) {
      emailError.invalidEmail = "Please enter a valid email!";
      isValid = false;
    }
    setFirstNameError(firstNameError);
    setMobError(mobError);
    setEmailError(emailError);
    return isValid;
  }

  const formValidations = () => {
    const otpError = {}

    let isValid = true;
    if (formData?.otp === undefined || formData?.otp === "") {
      otpError.shortName = "This field is mandatory"
      isValid = false;
    }
    setotpError(otpError);

    return isValid;
  }
  console.log(otpError)
  return (
    <>
      {aboutbanner && (
        <div className={styles.Maindiv}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className={styles.banhead}>
                  <h4>{heading.slice(0, 20)}</h4>
                  <h4>{heading.slice(20)}</h4>
                </div>
              </div>
              {
                thankyou ? (
                  <div className="col-md-6">
                    <div className="thankYouMain">
                      <div className="thankYoucontentGetInTouch">
                        <h2>Thank you for registering! </h2>
                        <p>{showPartnerText ? "Please expect a call from our Mutual Fund Distributor shortly." : "Please expect a call from our Wealth Manager shortly."}</p>
                      </div>
                      <div className="thankyousocialIconGetInTouch">
                        <h4>In the meantime, you are welcome to explore our social media channels!</h4>
                        <div className="d-flex align-items-center mt-4">
                          <div className="paddingRight2">
                            <a className="d-flex align-items-center justify-content-center" href={"https://www.linkedin.com/company/fincartfinancialplanners/"} target="_blank">
                              <Image src={linkedInIcon} alt="linkedIn" />
                            </a>
                          </div>
                          <div className="px-3">
                            <a className="d-flex align-items-center justify-content-center" href={"https://twitter.com/fincart_advisor"} target="_blank">
                              <Image src={twitterIcon} alt="twitterIcon" />
                            </a>
                          </div>
                          <div className="px-3">
                            <a className="d-flex align-items-center justify-content-center" href={"https://www.youtube.com/c/FINCARTFinancialPlanners"} target="_blank">
                              <Image src={youtubeIcon} alt="youtubeIcon" />
                            </a>
                          </div>
                          <div className="px-3">
                            <a className="d-flex align-items-center justify-content-center" href={"https://www.instagram.com/fincart_financial_planner/"} target="_blank">
                              <Image src={instagramIcon} alt="instagramIcon" />
                            </a>
                          </div>
                          <div className="px-3 d-flex align-items-center justify-content-center">
                            <a className="d-flex align-items-center justify-content-center" href={"https://www.facebook.com/fincartinvestmentplanners"} target="_blank">
                              <Image src={facebookIcon} alt="facebookIcon" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                  :
                  <div className={`col-md-6  ${styles.banform}`}>
                    {!otpModel &&
                      <form onSubmit={(e) => handleGetotp(e)}>
                        <div className={styles.name}>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="YOUR NAME"
                            onChange={handleFormChange}
                          />
                          {Object.keys(firstNameError).map((key, id) => {
                            return <span key={id} style={{ color: "red", fontSize: '12px' }}>{firstNameError[key]}</span>
                          })}
                        </div>
                        <div className={styles.name}>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="EMAIL ID"
                            onChange={handleFormChange}
                          />
                          {Object.keys(emailError).map((key, id) => {
                            return <span key={id} style={{ color: "red", fontSize: '12px' }}>{emailError[key]}</span>
                          })}
                        </div>
                        <div className={styles.name}>
                          <input
                            type="number"
                            name="mobile"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="MOBILE NUMBER"
                            onChange={handleFormChange}
                          />
                          {Object.keys(mobError).map((key, id) => {
                            return <span key={id} style={{ color: "red", fontSize: '12px' }}>{mobError[key]}</span>
                          })}
                        </div>
                        {/* {checked &&
                      <div className={styles.otp}>
                        <button type="submit" className="btn">
                          Get Otp
                        </button>
                      </div>
                    }
                    {checkeds &&
                      <div className={styles.otp}>
                        <button type="submit" className="btn">
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Get Otp
                        </button>
                      </div>
                    } */}
                        <div className={`${styles.otp} ${loader && styles.loaderIngOtp}`}>
                          <button disabled={disabledButton} type="submit" className={styles.submitbtn}>
                            <span>{loader ? "Loading..." : "Get Otp"}</span>
                          </button>
                        </div>
                      </form>
                    }
                    {otpModel &&
                      <form onSubmit={(e) => submitGetInTouch(e)}>
                        {/* <div className={styles.name}>
                   <input
                     type="name"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="YOUR NAME"
                     onChange={handleFormChange}
                   />
                 </div>
                 <div className={styles.name}>
                   <input
                     type="email"
                     className="form-control"
                     id="exampleInputPassword1"
                     placeholder="EMAIL ID"
                     onChange={handleFormChange}
                   />
                 </div> */}
                        <div className={styles.name}>
                          <input
                            type="otp"
                            name="otp"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Valid Otp"
                            onChange={handleFormChange}
                          />
                          {Object.keys(otpError).map((key, id) => {
                            return <span key={id} style={{ color: "red", fontSize: '12px' }}>{otpError[key]}</span>
                          })}
                          <div className={styles.resendOtpMain}>
                            <OtpTimer
                              seconds={30}
                              text="Resend otp : "
                              ButtonText="Resend otp"
                              resend={submit}
                              background="none"
                            />
                          </div>
                        </div>
                        <div className={`${styles.submit} ${loader && styles.submitLoading}`}>
                          <button disabled={disabledSubmit} type="submit" className={styles.submitbtn}>
                            <span>{loader ? 'Loading...' : 'Submit'}</span>
                          </button>
                        </div>
                      </form>
                    }
                  </div>
              }
            </div>
          </div>
        </div>
      )}
      {showOnbanner && (
        <div
          className={`animate__animated animate__backInUp animate__rollIn animate__slideInUp animate__fast animate__delay-0s ${styles.maindiv}`}
        >
          <div onClick={() => CloseNav()} className={styles.crossbtn}>
            <Image src={path2} />
          </div>
          <div className="container">
            <div className="row">
              <div className={styles.maindivheading}>
                <h2>get in touch</h2>

                <p>
                  Begin your journey towards financial freedom with our team of
                  experts.
                </p>
              </div>
            </div>
            <form onSubmit={(e) => submitGetInTouch(e)}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className={styles.name}>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="YOUR NAME"
                      name="name"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.name}>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="EMAIL ID"
                      name="email"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.name}>
                    <input
                      type="mobile"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="MOBILE NUMBER"
                      name="mobile"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button href="" type="submit" className={styles.submitbtn}>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className={styles.name}>
                    <input
                      type="mobile"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="MOBILE NUMBER"
                    />
                  </div>
                  <div className={`textareas ${styles.name}`}>
                    <textarea
                      id="message"
                      classname="form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className={styles.submit}>
                    <button href="" type="submit" className={styles.submitbtn}>
                      <span>Submit</span>
                    </button>
                  </div>
                </div> 
                */}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
