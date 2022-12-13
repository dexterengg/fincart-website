// import React from "react";
import styles from "../../assets/styles/Planinnerpage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Image from "next/image";
import { toast } from "react-toastify";
import OtpTimer from "otp-timer";
import linkedInIcon from "../../assets/img/linkedinwhite.svg"
import facebookIcon from "../../assets/img/facebookwhite.svg"
import instagramIcon from "../../assets/img/instagramwhite.svg"
import twitterIcon from "../../assets/img/twitterwhite.svg"
import youtubeIcon from "../../assets/img/youtubewhite.svg"
import { useRouter } from "next/router";
const otpurl = 'https://api.fincart.com/api/v2/user/app/tempregister';
const submiturl = 'https://api.fincart.com/api/v2/user/app/tempregister/validateOTP_v2';


const Banner = ({ sec_1_title }) => {
  console.log(sec_1_title, "sec_1_title");
  const [otpModel, setotpModel] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;
  const [formData, setFormData] = useState({});
  const [firstNameError, setFirstNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [mobError, setMobError] = useState({});
  const [checked, setchecked] = useState(true);
  const [checkeds, setcheckeds] = useState(false);
  const [otpError, setotpError] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [loader, setLoader] = useState(false);
  const [thankyou, setThankYou] = useState(false)
  const [showPartnerText, setShowPartnerText] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log(router, "router")
    if (router?.pathname == "/becomeagent") {
      setShowPartnerText(true)
    }
  }, [])

  const handleFormChange = (e) => {
    setcheckeds(false)
    setchecked(true)
    const _name = e.target.name;
    const _value = e.target.value;
    setFormData({
      ...formData,
      [_name]: _value,
    });
  };
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
          userid: formData.email,
          mobile: formData.mobile,
          name: formData.name,
          otp: '',
          clientstatus: 'X',
          status: '',
          password: 'Fincart@123',
          description: ''

        })
        console.log(resp.data.status, "status")
        if (resp?.data?.status == "Success") {
          setDisabledButton(false)
          setLoader(false)
        }
        if (resp.data.status === "Error") {
          // swal({
          //   title: resp.data.msg,
          //   icon: "warning",
          //   dangerMode: true,
          //   button: "Go To Login Page",
          // })
          setDisabledButton(false)
          setLoader(false)
          toast.error(resp?.data?.msg)
            .then(function () {
              window.open("https://app.fincart.com/user/login", "_blank");
            });
          setotpModel(false)
          setcheckeds(true)
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
    e.preventDefault();
    const isValid = formValidations();
    if (isValid) {
      setLoader(true)
      setDisabledSubmit(true)

      try {
        const resp = await axios.post(submiturl, {
          userid: formData.email,
          mobile: formData.mobile,
          name: "",
          otp: formData.otp,
          clientstatus: 'X',
          password: '',
          status: '',
          description: ''

        })
        if (resp?.data?.status == "Success") {
          toast.success("submited successfully")
          setThankYou(true);
          setDisabledSubmit(false)
          setLoader(false)
          setotpModel(false)
          setShowGetInTouchModel(true)
        }
        if (resp.data.status == "Error") {
          toast.error(resp?.data?.msg)

          // swal({
          //   title: "Invalid OTP",
          //   icon: "warning",
          //   dangerMode: true,
          // });
          setDisabledSubmit(false)
          setLoader(false)
          // setFormData(null)
          setShowGetInTouchModel(true)
          setotpModel(true)
        } else {
          toast.success("Signup Completed", "You Can Login", "success");
          setFormData(null)
          setShowGetInTouchModel(false)
          setotpModel(false)

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
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


  const formValidation = () => {
    const firstNameError = {};
    const mobError = {};
    const emailError = {};
    let isValid = true;
    if (formData?.name === undefined) {
      firstNameError.shortName = "This field is mandatory";
      isValid = false;
    }
    if (!formData.mobile?.match(mobileRegex)) {
      mobError.invalidMob = "Enter 10 digit mobile no.";
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
  };

  const formValidations = () => {
    const otpError = {}

    let isValid = true;
    console.log(formData?.otp, "formData?.otp")
    if (formData?.otp === undefined || formData?.otp === "") {
      otpError.shortName = "This field is mandatory"
      isValid = false;
    }
    // if (otpModel) {
    //   if (formData?.otp?.trim().length < 4 || formData?.otp === undefined) {
    //     otpError.shortName = "Enter four digit Valid Otp"
    //     isValid = false;
    //   }
    // }
    setotpError(otpError);

    return isValid;
  }
  return (
    <div className={styles.maindiv}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.mainheading}>
              <h3>{sec_1_title}</h3>
            </div>
            <a href="#whatplanning" className="btn btnhovereffect ">start planning </a>
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
                <div className={styles.subheading}>
                  <h4>get in touch</h4>
                </div>
                {!otpModel && (
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
                        return (
                          <span key={id} style={{ color: "red", fontSize: "12px" }}>
                            {firstNameError[key]}
                          </span>
                        );
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
                        return (
                          <span key={id} style={{ color: "red", fontSize: "12px" }}>
                            {emailError[key]}
                          </span>
                        );
                      })}
                    </div>
                    <div className={styles.name}>
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="MOBILE NUMBER"
                        onChange={handleFormChange}
                      />
                      {Object.keys(mobError).map((key, id) => {
                        return (
                          <span key={id} style={{ color: "red", fontSize: "12px" }}>
                            {mobError[key]}
                          </span>
                        );
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
                )}
                {otpModel && (
                  <form onSubmit={(e) => submitGetInTouch(e)}>
                    <div className={styles.name}>
                      <input
                        type="number"
                        name="otp"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="ENTER OTP"
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
                )}
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;
