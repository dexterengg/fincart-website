import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "animate.css";
import path2 from "../assets/img/about/cross.svg";
import styles from "../assets/styles/GetInTouchModal.module.css";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import OtpTimer from "otp-timer";
import linkedInIcon from "../assets/img/linkedinwhite.svg"
import facebookIcon from "../assets/img/facebookwhite.svg"
import instagramIcon from "../assets/img/instagramwhite.svg"
import twitterIcon from "../assets/img/twitterwhite.svg"
import youtubeIcon from "../assets/img/youtubewhite.svg"


import {
  getInTouchFormApi,
  getinTouchprotectPageformApi,
  getTouchInvestformApi,
  getinTouchbecomeagentpageformApi,
  getTouchPlanformApi,
} from "./utils/services";
import Link from "next/link";
import { NavLink } from "reactstrap";
const otpurl = 'https://api.fincart.com/api/v2/user/app/tempregister';
const submiturl = 'https://api.fincart.com/api/v2/user/app/tempregister/validateOTP_v2';
function GetInTouchModal({
  showGetInTouchModal,
  closeGetInTouchModal,
  homePage,
  planpage,
  investPage,
  protectPage,
  becomeagentpage,
  setotpModel,
  otpModel,
  setShowGetInTouchModel

}) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;
  const [formData, setFormData] = useState({});
  const [firstNameError, setFirstNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [mobError, setMobError] = useState({});
  const [passwordError, setpasswordError] = useState({});
  const [otpError, setotpError] = useState({});
  const [checkboxError, setcheckboxError] = useState({});
  const [checked, setchecked] = useState(false);
  const [checkeds, setcheckeds] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [loader, setLoader] = useState(false);
  const [thankyou, setThankYou] = useState(false)


  const handleFormChange = (e) => {
    const _name = e.target.name;
    const _value = e.target.value;
    setFormData({
      ...formData,
      [_name]: _value,
    });
  };

  const handletermchange = (e) => {
    // setchecked(true)
    const checkebox = e.target.checked;
    setchecked(checkebox)
    setcheckeds(false)
  }
  // const submitGetInTouch = async (e) => {
  //   setotpModel(true)
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
  //     } else if (planpage) {
  //       const result = await getTouchPlanformApi({
  //         data: {
  //           name: formData.name,
  //           email: formData.email,
  //           Phone_No: formData.mobile,
  //         },
  //       });
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
          userid: formData.email,
          mobile: formData.mobile,
          name: formData.name,
          otp: '',
          clientstatus: 'X',
          status: '',
          password: formData.password,
          description: ''

        })
        if (resp?.data?.status == "Success") {
          setDisabledButton(false)
          setLoader(false)
        }
        if (resp.data.status === "Error") {
          toast.error(resp?.data?.msg)
          setDisabledSubmit(false)
          setLoader(false)
            .then(function () {
              window.open("https://app.fincart.com/user/login", "_blank");
            });
          setotpModel(false)
          setcheckeds(false)
        } else {
          setotpModel(true)
          setcheckeds(false)
        }

        const checkebox = e.target.checked;
        setchecked(checkebox)
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
    setchecked(false)
    e?.preventDefault();
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
          password: formData.password,
          status: '',
          description: ''

        })
        if (resp?.data?.status == "Success") {
          // toast.success("submited successfully")
          setThankYou(true);
          setDisabledSubmit(false)
          setLoader(false)
          setotpModel(false)
          setShowGetInTouchModel(true)
        }
        if (resp.data.status === "Error") {
          setDisabledSubmit(false)
          setLoader(false)
          toast.error(resp?.data?.msg)
          setShowGetInTouchModel(true)
          setotpModel(true)
        } else {
          toast.success("Signup Completed", "You Can Login", "success");
          setFormData(null)
          // setShowGetInTouchModel(false)
          // setotpModel(false)
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
    const checkboxError = {};
    let isValid = true;
    console.log(checked, "checked")
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
    if (checked === false) {
      checkboxError.invalidCheckbox = "This field is mandatory";
      isValid = false;
    }
    setFirstNameError(firstNameError);
    setMobError(mobError);
    setEmailError(emailError);
    setcheckboxError(checkboxError);
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

  const handletermcondition = () => {
    window.open("https://fincart.netlify.app/terms-and-conditions", "_blank");
  };
  return (
    <>
      <Modal
        size="md"
        centered
        show={showGetInTouchModal}
        onHide={closeGetInTouchModal}
      >
        <Modal.Body>
          <div priority={true} className={`${styles.maindiv}`}>
            <div className={styles.crossbtn} onClick={closeGetInTouchModal}>
              <Image src={path2} />
            </div>
            <div className="container">
              {
                thankyou ? (
                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <div className="thankYouMain">
                        <div className="thankYoucontentGetInTouch">
                          <h2>Thank you for registering! </h2>
                          <p>Please expect a call from our Wealth Manager shortly.</p>
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
                  </div>
                )
                  :
                  <div className="row">
                    <div className="row">
                      <div className={styles.maindivheading}>
                        <h2>Signup</h2>
                        <p>
                          If you still need assitance please do not hesitate to
                          contact us on
                        </p>
                      </div>
                    </div>
                    {!otpModel &&
                      <form onSubmit={(e) => handleGetotp(e)}>
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8">
                            <div className={styles.name}>
                              <input
                                type="name"
                                name="name"
                                className="form-control"
                                id="exampleInputname1"
                                aria-describedby="emailHelp"
                                placeholder="YOUR NAME"
                                onChange={handleFormChange}
                              />
                              {Object.keys(firstNameError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{firstNameError[key]}</span>
                              })}
                            </div>
                            <div className={styles.name}>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="exampleInputemail1"
                                placeholder="EMAIL ID"
                                onChange={handleFormChange}
                              />
                              {Object.keys(emailError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{emailError[key]}</span>
                              })}
                            </div>
                            <div className={styles.name}>
                              <input
                                type="mobile"
                                name="mobile"
                                className="form-control"
                                id="exampleInputmobile1"
                                placeholder="MOBILE NUMBER"
                                onChange={handleFormChange}
                              />
                              {Object.keys(mobError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{mobError[key]}</span>
                              })}
                            </div>
                            <div className={styles.name}>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="PASSWORD"
                                onChange={handleFormChange}
                              />
                              {Object.keys(passwordError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{passwordError[key]}</span>
                              })}
                            </div>
                            <div className={styles.name}>
                              <span className={styles.singleline}>
                                <input
                                  type="checkbox"
                                  name="password"
                                  //  className="form-control"
                                  id="exampleInputcheck1"
                                  placeholder="PASSWORD"
                                  checked={checked}
                                  onChange={handletermchange}
                                />
                                <span className={styles.singlelines} onClick={() => handletermcondition()}> I agree to the terms and conditions</span>
                              </span>
                              {Object.keys(checkboxError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{checkboxError[key]}</span>
                              })}
                            </div>
                            <div className={`${styles.otp} ${loader && styles.loaderIngOtp}`}>
                              <button disabled={disabledButton} type="submit" className={styles.submitbtn}>
                                <span>{loader ? "Loading..." : "Get Otp"}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    }
                    {otpModel &&
                      <form onSubmit={(e) => submitGetInTouch(e)}>
                        <div className="row d-flex justify-content-center">
                          <div className="col-md-8">
                            <div className={styles.name}>
                              <input
                                type="number"
                                name="otp"
                                className="form-control"
                                id="exampleInputotp1"
                                placeholder="Enter Four Digit Valid Otp"
                                onChange={handleFormChange}
                              />
                              {Object.keys(otpError).map((key, id) => {
                                return <span key={id} style={{ color: "white", fontSize: '12px' }}>{otpError[key]}</span>
                              })}
                              <div className={`${styles.resendOtpMain} ${styles.resendOtpWhite}`}>
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
                          </div>
                        </div>
                      </form>
                    }
                  </div>
              }

            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GetInTouchModal;
