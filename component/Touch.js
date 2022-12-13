import React, { useEffect, useState } from "react";
import style from "../assets/styles/Touch.module.css";
import axios from "axios";
import OtpTimer from "otp-timer";
import linkedInIcon from "../assets/img/linkedin.svg"
import facebookIcon from "../assets/img/facebook.svg"
import instagramIcon from "../assets/img/instagram.svg"
import twitterIcon from "../assets/img/twitter.svg"
import youtubeIcon from "../assets/img/youtube.svg"
import {
  getInTouchFormApi,
  getinTouchprotectPageformApi,
  getTouchInvestformApi,
  getTouchPlanformApi,
  getinTouchcontactformApi,
  getinTouchbecomeagentpageformApi,
} from "./utils/services";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const otpurl = 'https://api.fincart.com/api/v2/user/app/tempregister';
const submiturl = 'https://api.fincart.com/api/v2/user/app/tempregister/validateOTP_v2';
const Touch = ({
  homePage,
  contactpage,
  planpage,
  investPage,
  protectPage,
  becomeagentpage,
  get_in_touch_heading,
  get_in_touch_description,
}) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;
  const [formData, setFormData] = useState({});
  const [otpModel, setotpModel] = useState(false);
  const [firstNameError, setFirstNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [otpError, setotpError] = useState({});
  const [mobError, setMobError] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [loader, setLoader] = useState(false);
  const [thankyou, setThankYou] = useState(false)
  const [showPartnerText, setShowPartnerText] = useState(false);

  const router = useRouter();
  useEffect(() => {
    console.log(router, "router")
    if(router?.pathname =="/becomeagent"){
      setShowPartnerText(true)
    }
  }, [])

  const handleFormChange = (e) => {
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
  //     } else if (planpage) {
  //       const result = await getTouchPlanformApi({
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
  //     } else if (contactpage) {
  //       const result = await getinTouchcontactformApi({
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

    e?.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setDisabledButton(true)
      setLoader(true)
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
        if (resp?.data?.status == "Success") {
          setDisabledButton(false)
          setotpModel(true)
          setLoader(false)
        }
        if (resp?.data?.status == "Error") {
          setDisabledButton(false)
          toast.error(resp?.data?.msg)
          setLoader(false)

        }
      } catch (error) {
        console.log(error, "errorerror")
        setDisabledButton(false)
        setLoader(false)

      }
    }
  }

  const submit = () => {
    handleGetotp();
    setLoader(false)
  };

  const submitFormValidation = () => {
    const otpError = {}
    let isValid = true;
    console.log(formData?.otp, "formData?.otp")
    if (formData?.otp === undefined || formData?.otp === "") {
      otpError.shortName = "This field is mandatory"
      isValid = false;
    }
    setotpError(otpError);
    return isValid;
  }
  const submitGetInTouch = async (e) => {

    e.preventDefault();

    try {
      const isValid = submitFormValidation();
      if (isValid) {
        setDisabledSubmit(true)
        setLoader(true)
        const resp = await axios.post(submiturl, {
          userid: formData.email,
          mobile: formData.mobile,
          name: formData.name,
          otp: formData.otp,
          clientstatus: 'X',
          password: "Fincart@123",
          status: '',
          description: ''

        })
        console.log(resp)
        if (resp?.data?.status == "Success") {
          toast.success("submited successfully")
          setThankYou(true);
          setDisabledSubmit(false)
          setShowGetInTouchModel(false)
          setotpModel(false)
          setLoader(false)
        }
        if (resp?.data?.status == "Error") {
          setDisabledSubmit(false)
          toast.error(resp?.data?.msg)
          setLoader(false)
        }
      }
    } catch (error) {
      console.log(error.response)
      setLoader(false)
      setDisabledSubmit(false)
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
  return (
    <div className={style.maindiv}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={style.maindivheading}>
              <h2>{get_in_touch_heading} </h2>
              <p>{get_in_touch_description}</p>
            </div>
          </div>
          {
            thankyou ?
              (
                <div className="col-md-6">
                  <div className="thankYouMain">
                    <div className="thankYoucontent">
                      <h2>Thank you for registering! </h2>
                      <p>{showPartnerText ? "Please expect a call from our Mutual Fund Distributor shortly." : "Please expect a call from our Wealth Manager shortly."}</p>
                    </div>
                    <div className="thankyousocialIcon">
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
                          <a  className="d-flex align-items-center justify-content-center" href={"https://www.youtube.com/c/FINCARTFinancialPlanners"} target="_blank">
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
              <div className="col-md-6">
                {!otpModel &&
                  <form onSubmit={(e) => handleGetotp(e)}>
                    <div className={style.name}>
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
                    <div className={style.name}>
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
                    <div className={style.name}>
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
                    <div className={`${style.otp} ${loader && style.loaderIngOtp}`}>
                      <button disabled={disabledButton} type="submit" className={style.submitbtn}>
                        <span>{loader ? "Loading..." : "Get Otp"}</span>
                      </button>
                    </div>
                  </form>
                }
                {otpModel &&
                  <form onSubmit={(e) => submitGetInTouch(e)}>
                    {/* <div className={style.name}>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="YOUR NAME"
                    onChange={handleFormChange}
                  />
                </div>
                <div className={style.name}>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="EMAIL ID"
                    onChange={handleFormChange}
                  />
                </div> */}
                    <div className={style.name}>
                      <input
                        type="otp"
                        name="otp"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Otp"
                        onChange={handleFormChange}
                      />
                      {Object.keys(otpError).map((key, id) => {
                        return <span key={id} style={{ color: "red", fontSize: '12px' }}>{otpError[key]}</span>
                      })}
                      <div className={style.resendOtpMain}>
                        <OtpTimer
                          seconds={30}
                          text="Resend otp : "
                          ButtonText="Resend otp"
                          resend={submit}
                          background="none"
                        />
                      </div>
                    </div>

                    <div className={`${style.submit} ${loader && style.submitLoading}`}>
                      <button disabled={disabledSubmit} type="submit" className={style.submitbtn}>
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
  );
};

export default Touch;
