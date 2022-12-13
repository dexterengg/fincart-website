import React, { useState } from "react";
import styles from "../assets/styles/WorldMade.module.css";
import Image from "next/image";
import Select from "react";
import { popupoption } from "../component/Option";
import path1 from "../assets/img/Plan/Icon1.svg";
import path2 from "../assets/img/Plan/Icon2.svg";
import path3 from "../assets/img/Plan/Icon3.svg";
import path4 from "../assets/img/Plan/Group 3100.svg";
import path5 from "../assets/img/Plan/Icon5.svg";
import path6 from "../assets/img/Plan/Icon6.svg";
import moment from 'moment';
import { Button, Input } from "reactstrap";
import { useEffect } from "react";
import { CountryList, TravelList } from "./CountryList";
import Link from "next/link";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import GetInTouchModal from "./GetInTouchModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const url = 'https://api.fincart.com/api/v2/fincalc';

const planobjectiveData = [
  {
    imgicon: path1,
    title: "child's education",
  },
  {
    imgicon: path2,
    title: "child's wedding",
  },
  {
    imgicon: path3,
    title: "dream home",
  },
  {
    imgicon: path4,
    title: "dream car",
  },
  {
    imgicon: path5,
    title: "vacation",
  },
  {
    imgicon: path6,
    title: "own study",
  },
];
const WorldMade = ({
  worldhead,
  boxdescription1,
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
}) => {

  const [showOnClickDownload, setShowOnClickDownload] = useState(false);
  const [activecolor, setactivecolor] = useState(false);
  const [activecolors, setactivecolors] = useState(false);
  const [activecolorss, setactivecolorss] = useState(false);
  const [activecolorsss, setactivecolorsss] = useState(false);
  const [activecolorssss, setactivecolorssss] = useState(false);
  const [activecolorsssss, setactivecolorsssss] = useState(false);
  const [ShowOnpara, setShowOnpara] = useState(false);
  const [Setselect, setSetselect] = useState(true);
  const [lumpsumvalue, setlumpsumvalue] = useState("")
  const [lumpsumsipvalue, setlumpsumsipvalue] = useState("")
  const [inputRupayVal, setInputRupayVal] = useState("");
  const [travelvalue, settravelvalue] = useState("none");
  const [myGoalSelectVal, setMyGoalSelectVal] = useState("");
  const [myMyChilsSelectVal, setMyChilsSelectVal] = useState("1");
  const [selecttedYear, setSelectedYear] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("0");
  const [firstTitle, setFirstTitle] = useState("with a budget of Rs.");
  const [secondTitle, setSecondTitle] = useState(
    "and I will need these funds by"
  );
  const [initialTitle, setinitialTitle] = useState(
    ""
  );
  const [thirdTitleForOther] = useState("I have a budget of");
  const [OtherInput, setOtherInput] = useState("");
  const [isShowOtherInput, setIsShowOtherInput] = useState(false);

  const [isShowInput, setIsShowInput] = useState(true);
  const [isShowCountry, setIsShowCountry] = useState(false);
  const [travelpeople, settravelpeople] = useState(false);
  const [listOfYears, setListOfYears] = useState([]);
  const [minDate, setMinDate] = useState("");
  const [firstNameError, setFirstNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [mobError, setMobError] = useState({});
  const [travelpeopleerror, settravelpeopleerror] = useState({});
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);
  const [whiteboxsss, setwhiteboxsss] = useState(false);


  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  }

  useEffect(() => {
    let _year = new Date().getFullYear() +1;
    let _month = new Date().getMonth();
    let _date = new Date().getDate();
    // let _result = `${_month}-${_date}-${_year}`
    const defaultMinDate = new Date(_year, _month, _date)
    setMinDate(defaultMinDate)
  }, []);
  useEffect(() => {
    let _currentYear = new Date().getFullYear();
    const listOfYear = (startYear) => {
      var currentYear = new Date().getFullYear(),
        years = [];
      while (startYear <= currentYear + 20) {
        years.push(startYear++);
      }
      return years;
    };
    let result = listOfYear(_currentYear);
    setListOfYears(result);
  }, []);

  useEffect(() => {
    if (myGoalSelectVal === "0") {
      setFirstTitle("with a budget of Rs.");
      setSecondTitle("and I will need these funds by");
    } else if (myGoalSelectVal === "FG12") {
      setFirstTitle("and I am planning to send him/her to");
      setSecondTitle("to study, and I will need these funds by");
      setIsShowInput(false);
      setIsShowCountry(true);
      settravelpeople(false)
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "FG6") {
      setinitialTitle("for ")
      setFirstTitle("people and I want to travel to");
      setSecondTitle(" and I will need these funds by");
      settravelpeople(true)
      setIsShowInput(false);
      setIsShowCountry(true);
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "3") {
      setFirstTitle("and my current monthly expense is Rs.");
      setSecondTitle(" and I want to retire by ");
      settravelpeople(false)
      setIsShowInput(true);
      setIsShowCountry(false);
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "FG4") {
      setFirstTitle("and the down payment I need to pay is Rs.");
      setSecondTitle("and I will need these funds by");
      setIsShowInput(true);
      settravelpeople(false)
      setIsShowCountry(false);
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "FG3") {
      setFirstTitle("the cost of the car is Rs.");
      setSecondTitle("and I will need these funds by");
      setIsShowInput(true);
      setIsShowCountry(false);
      settravelpeople(false)
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "FG13") {
      setFirstTitle("and I have a budget of Rs.");
      setSecondTitle("for the marriage, and I will need these funds by");
      setIsShowInput(true);
      setIsShowCountry(false);
      settravelpeople(false)
      setIsShowOtherInput(false)

    } else if (myGoalSelectVal === "FG5") {
      setFirstTitle("and I want to go to");
      setSecondTitle("for my studies, and I will need these funds by ");
      setIsShowInput(false);
      setIsShowCountry(true);
      settravelpeople(false)
      setIsShowOtherInput(true)
    }
  }, [myGoalSelectVal, selecttedYear]);


  const hendleMyGoalSelect = (e) => {
    setMyGoalSelectVal(e)
    setShowOnpara(true)
    setSetselect(false)
  };
  const handlechild = (e) => {
    setwhiteboxsss(false)
    setactivecolor(true)
    setactivecolors(false)
    setactivecolorss(false)
    setactivecolorsss(false)
    setactivecolorssss(false)
    setactivecolorsssss(false)
    setMyGoalSelectVal("FG12")
    setShowOnpara(true)
    setSetselect(false)
  };
  const handlechildwed = (e) => {
    setwhiteboxsss(false)
    setactivecolor(false)
    setactivecolors(true)
    setactivecolorss(false)
    setactivecolorsss(false)
    setactivecolorssss(false)
    setactivecolorsssss(false)
    setMyGoalSelectVal("FG13")
    setShowOnpara(true)
    setSetselect(false)
  };
  const handleDreamhome = (e) => {
    setwhiteboxsss(false)
    setactivecolor(false)
    setactivecolors(false)
    setactivecolorss(true)
    setactivecolorsss(false)
    setactivecolorssss(false)
    setactivecolorsssss(false)
    setMyGoalSelectVal("FG4")
    setShowOnpara(true)
    setSetselect(false)
  };
  const handleDreamcar = (e) => {
    setwhiteboxsss(false)
    setactivecolor(false)
    setactivecolors(false)
    setactivecolorss(false)
    setactivecolorsss(true)
    setactivecolorssss(false)
    setactivecolorsssss(false)
    setMyGoalSelectVal("FG3")
    setShowOnpara(true)
    setSetselect(false)
  };
  const handleDreamvacation = (e) => {
    setwhiteboxsss(false)
    setactivecolor(false)
    setactivecolors(false)
    setactivecolorss(false)
    setactivecolorsss(false)
    setactivecolorssss(true)
    setactivecolorsssss(false)
    setMyGoalSelectVal("FG6")
    setShowOnpara(true)
    setSetselect(false)
  };
  const handleDreamstudy = (e) => {
    setwhiteboxsss(false)
    setactivecolor(false)
    setactivecolors(false)
    setactivecolorss(false)
    setactivecolorsss(false)
    setactivecolorssss(false)
    setactivecolorsssss(true)
    setMyGoalSelectVal("FG5")
    setShowOnpara(true)
    setSetselect(false)
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      let _newDate = new Date(selecttedYear);
      let _year = _newDate.getFullYear();
      let _month = _newDate.getMonth() + 1;
      let sendDate = `${_year}-${_month}`;
      try {
        const resp = await axios.post(url, {
          type: "CAMT",
          currentAmount: inputRupayVal ? inputRupayVal : OtherInput ? OtherInput : "0",
          startDate: null,
          endDate: sendDate ? sendDate : null,
          goalCode: myGoalSelectVal,
          otherGoalName: null,
          childName: "test",
          travelPeople: travelvalue ? travelvalue : null,
          locationCode: selectedCountry ? selectedCountry : null,
          budgetType: null,
          businessStartupCost: null,
          monthlyexpence: null
        })
        let finalsipvalue = resp.data.data.investSip
        // const investsips = function formatMoney(finalsipvalue) {
        //   return finalsipvalue.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
        // }
        const investsips = () => {
          // return finalsipvalue.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

        };
        const investSip = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(resp.data.data.investSip);
        setlumpsumsipvalue(investSip)
        const investLumpsum = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(resp.data.data.investLumpsum);
        setlumpsumvalue(investLumpsum)
        setInputRupayVal("")
        setSelectedYear("")
        // setSelectedCountry("")

        setShowOnClickDownload(false)
        setwhiteboxsss(true)
      } catch (error) {
        console.log(error.response)
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
    const travelpeopleerror = {};
    let isValid = true;
    if (inputRupayVal) {
      if (inputRupayVal === "") {
        firstNameError.shortName = "Enter Budget"
        isValid = false;
      }
    }
    if (travelpeople) {
      if (travelvalue === "none") {
        travelpeopleerror.shortName = "No. of people"
        isValid = false;
      }
    }
    if (isShowCountry) {
      if (selectedCountry == "0") {
        mobError.invalidMob = "Select Country Name"
        isValid = false;
      }
    }
    if (selecttedYear?.length < 1) {
      emailError.invalidEmail = "Select valid date";
      isValid = false;
    }
    setFirstNameError(firstNameError);
    setMobError(mobError);
    setEmailError(emailError);
    settravelpeopleerror(travelpeopleerror);
    return isValid;
  }
  return (
    <>
      {!showOnClickDownload && (
        <form >
          <div className={styles.worldouter} id="getinworld">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.worldmadehead}>
                    <h2 className="">{worldhead}</h2>
                  </div>
                  <div className={styles.worldpara}>
                    <p>{boxdescription1}</p>
                  </div>
                </div>
                <div className={`col-md-12 ${styles.worldbluebox}`}>
                  <div>
                    <p className={styles.plansection}>
                      I'd like to make a plan for my
                    </p>
                    {/* <div className="row"> */}
                    <div className={styles.mainparent}>

                      {/* <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handlechild(e)}>
                          <div className={activecolor ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path1}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title1}</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handlechildwed(e)}>
                          <div className={activecolors ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path2}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title2}</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4  col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handleDreamhome(e)}>
                          <div className={activecolorss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path3}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title3}</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handleDreamcar(e)}>
                          <div className={activecolorsss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path4}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title4}</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handleDreamvacation(e)}>
                          <div className={activecolorssss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path5}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title5}</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className=" col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4 p-0"> */}
                      <div className={styles.mainchild}>
                        <div className={styles.borderBottom} onClick={(e) => handleDreamstudy(e)}>
                          <div className={activecolorsssss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                            <Image
                              src={path6}
                              alt="Img"
                              className={`img-fluid ${styles.beReadyImgs}`}
                            />
                          </div>
                          <div className={styles.beReadyContent}>
                            <h3>{Title6}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {ShowOnpara &&
                    <p className={styles.sameline}>
                      {initialTitle}

                      {travelpeople && (
                        <span className={styles.category1}>
                          <select
                            className={styles.formselect}
                            aria-label="Default select example"
                            onChange={(e) => settravelvalue(e.target.value)}
                          >
                            <option value="">No. of people</option>
                            {TravelList?.map((data, index) => {
                              return <option value={data.code}>{data.name}</option>;
                            })}
                          </select>
                          {Object.keys(travelpeopleerror).map((key, id) => {
                            return <span key={id} style={{ color: "white", fontSize: '12px' }}>{travelpeopleerror[key]}</span>
                          })}
                        </span>
                      )}
                      {firstTitle}
                      {isShowInput && (
                        <span>
                          <input
                            type="text"
                            value={inputRupayVal}
                            className={styles.wordinput}
                            onChange={(e) => setInputRupayVal(e.target.value)}
                            placeholder="XXXX"
                          />
                          {Object.keys(firstNameError).map((key, id) => {
                            return <span key={id} style={{ color: "white", fontSize: '12px' }}>{firstNameError[key]}</span>
                          })}
                        </span>
                      )}
                      {isShowCountry && (
                        <span className={styles.category1}>
                          <select
                            className={styles.formselect}
                            aria-label="Default select example"
                            onChange={(e) => setSelectedCountry(e.target.value)}
                          >
                            <option value="0">Select Country</option>
                            {CountryList?.map((data, index) => {
                              return <option value={data.code}>{data.name}</option>;
                            })}
                          </select>
                          {/* { selectedCountry == "0" &&
                                 <span style={{ color: "red", fontSize: '12px' }}>Please Select Country </span>
                              } */}
                          {Object.keys(mobError).map((key, id) => {
                            return <span key={id} style={{ color: "white", fontSize: '12px' }}>{mobError[key]}</span>
                          })}
                        </span>
                      )}
                      {isShowOtherInput && selectedCountry == "005" && (
                        <>
                          {thirdTitleForOther}
                          <span>
                            <input
                              type="text"
                              value={OtherInput}
                              className={styles.wordinput}
                              onChange={(e) => setOtherInput(e.target.value)}
                              placeholder="Enter amount"
                            />
                            {Object.keys(firstNameError).map((key, id) => {
                              return <span key={id} style={{ color: "white", fontSize: '12px' }}>{firstNameError[key]}</span>
                            })}
                          </span>
                        </>
                      )}

                      {secondTitle}
                      <span className={styles.category2}>
                        {/* <select
                               className={styles.formselect}
                               aria-label="Default select example"
                               onChange={(e) => setSelectedYear(e.target.value)}
                             >
                               <option value="0">20xx</option>
                               {listOfYears?.map((data, i) => {
                                 return <option value={data}>{data}</option>;
                               })}
                             </select> */}
                        {/* <input
                          className={styles.formselect}
                          type="month"
                          name="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          // value={selecttedYear}
                          value={selecttedYear}
                          min={`${minDate}`}
                          onChange={(e) => setSelectedYear(e.target.value)}
                        /> */}
                        <DatePicker
                          selected={selecttedYear}
                          onChange={(date) => setSelectedYear(date)}
                          dateFormat="MM/yyyy"
                          minDate={minDate}
                          placeholderText="select date"
                          showFourColumnMonthYearPicker
                          className={styles.formselect}
                          // scrollableYearDropdown
                          // showYearDropdown
                        />

                        {Object.keys(emailError).map((key, id) => {
                          return <span key={id} style={{ color: "white", fontSize: '12px' }}>{emailError[key]}</span>
                        })}
                      </span>
                    </p>
                  }
                  {/* <div className={`cursor ${styles.checkbox}`}>
                  <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="I agree to the Terms & Conditions"
                  />
                  <Link
                    href={"https://www.fincart.com/Privacy-Policy"}
                    target="_blank"
                  >
                    <span className="checkboxpadding">
                      I agree to the<u> Terms & Conditions</u>
                    </span>
                  </Link>
                </div> */}
                  <div className={styles.calcbtn}>
                    <Button
                      className={styles.calcbtns}
                      // onClick={() => setShowOnClickDownload(true)}
                      onClick={handlesubmit}
                    >
                      Calculate
                    </Button>
                  </div>
                </div>
                {whiteboxsss &&
                  <div className={styles.worldwhitebox}>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className={styles.lumpsum}>
                          <div className={styles.left}>
                            <h1>{lumpsumvalue && lumpsumvalue}</h1>
                            <p>lumpsum</p>
                          </div>
                          <div className={styles.right}>
                            <h1>{lumpsumsipvalue && lumpsumsipvalue}</h1>
                            <p>sip</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className={styles.btnsection}>
                          <a className={`btn ${styles.investanimation}`} onClick={() => Showlogin()}>
                            invest now
                          </a>
                          <div className={styles.requestbutton} onClick={() => Showlogin()}>
                            <a className={`btn ${styles.investanimation}`}>
                              request consultation
                            </a>
                          </div>

                          {/* <div className={styles.mainhow}>
                         <div className={styles.arrowbutton}>
                           <a href="" className={styles.arwimg}>
                             <Image src={path1} />
                           </a>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.arrowtext}>
                           <p>invest now</p>
                         </div>
                       </div> */}
                          {/* <div className={styles.mainhow}>
                         <div className={styles.arrowbutton}>
                           <a href="" className={styles.arwimg}>
                             <Image src={path1} />
                           </a>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.arrowtext}>
                           <p>request consultation</p>
                         </div>
                       </div> */}
                          {/* <Link
                
                href={
                  "https://app.fincart.com/user/login"
                }
                target="_blank"
              >
                          <a className={`btn ${styles.chooseanimation}`}>Know More </a>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </form>
      )}

      {showOnClickDownload && (
        <div className={styles.worldouter}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={styles.worldmadehead}>
                  <h2 className="allhead">{worldhead}</h2>
                </div>
                <div className={styles.worldpara}>
                  <p>{boxdescription1}</p>
                </div>
              </div>

              <div className={styles.imgsection}>
                {/* <div className="row"> */}
                <div className={styles.mainparent}>

                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handlechild(e)}>
                      <div className={activecolor ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path1}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title1}</h3>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handlechildwed(e)}>
                      <div className={activecolors ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path2}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title2}</h3>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handleDreamhome(e)}>
                      <div className={activecolorss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path3}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title3}</h3>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handleDreamcar(e)}>
                      <div className={activecolorsss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path4}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title4}</h3>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handleDreamvacation(e)}>
                      <div className={activecolorssss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path5}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title5}</h3>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6"> */}
                  <div className={styles.mainchild}>
                    <div className={styles.borderBottom} onClick={(e) => handleDreamstudy(e)}>
                      <div className={activecolorsssss ? `${styles.iconsvg}` : `${styles.iconsvgs}`}>
                        <Image
                          src={path6}
                          alt="Img"
                          className={`img-fluid ${styles.beReadyImgs}`}
                        />
                      </div>
                      <div className={styles.beReadyContent}>
                        <h3>{Title6}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 p-0">
                <div className={styles.worldbluebox}>
                  {/* <p className={styles.sameline}>
                    i'd like to create a plan for
                    <span className={styles.category}>
                      <select
                        className={styles.formselect}
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">MY VACATION</option>
                        <option value="2">MY CHILD'S EDUCATION</option>
                        <option value="3">MY OWN EDUCATION</option>
                        <option value="4">MY CHILD'S WEDDING</option>
                        <option value="5">MY RETIREMENT</option>
                        <option value="6">BUYING A NEW CAR</option>
                        <option value="7">BUYING A NEW HOUSE</option>
                      </select>
                    </span>
                    with a budget of rs.
                    <span className={styles.wordinputMain}>
                      <input type="text" className={styles.wordinput} />
                      <span> lac(s)</span>
                    </span>
                    and i will need these funds by
                    <span className={styles.category}>
                      <select
                        className={styles.formselect}
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">MY VACATION</option>
                        <option value="2">MY CHILD'S EDUCATION</option>
                        <option value="3">MY OWN EDUCATION</option>
                        <option value="4">MY CHILD'S WEDDING</option>
                        <option value="5">MY RETIREMENT</option>
                        <option value="6">BUYING A NEW CAR</option>
                        <option value="7">BUYING A NEW HOUSE</option>
                      </select>
                    </span>
                  </p> */}
                  <p className={styles.sameline}>
                    {firstTitle}
                    {isShowInput && (
                      <span>
                        <input
                          type="text"
                          value={inputRupayVal}
                          className={styles.wordinput}
                          onChange={(e) => setInputRupayVal(e.target.value)}
                          placeholder="XXXX"
                        />
                      </span>
                    )}
                    {isShowCountry && (
                      <span className={styles.category1}>
                        <select
                          className={styles.formselect}
                          aria-label="Default select example"
                          onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                          <option value="0">COUNTRY NAME</option>
                          {CountryList?.map((data, index) => {
                            return <option value={data.code}>{data.name}</option>;
                          })}
                        </select>
                      </span>
                    )}

                    {secondTitle}
                    <span className={styles.category2}>
                      {/* <select
                               className={styles.formselect}
                               aria-label="Default select example"
                               onChange={(e) => setSelectedYear(e.target.value)}
                             >
                               <option value="0">20xx</option>
                               {listOfYears?.map((data, i) => {
                                 return <option value={data}>{data}</option>;
                               })}
                             </select> */}
                      {/* <Input
                        className={styles.formselect}
                        type="month"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={selecttedYear}
                        min={`${minDate}`}
                        onChange={(e) => setSelectedYear(e.target.value)}
                      /> */}

                      <DatePicker
                        selected={selecttedYear}
                        onChange={(date) => setSelectedYear(date)}
                        dateFormat="MM/yyyy"
                        minDate={minDate}
                        // showFullMonthYearPicker
                        placeholderText="select date"
                        // showMonthYearPicker
                        showFourColumnMonthYearPicker
                        className={styles.formselect}
                      />
                    </span>
                  </p>
                  {/* <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="topping"
                      name="topping"
                      value="I agree to the Terms & Conditions"
                    />
                    <span className="checkboxpadding">
                      I agree to the<u> Terms & Conditions</u>
                    </span>
                  </div> */}
                  {/* <div className={styles.calcbtn}>
                    <Button className="buttons buttontwo">Calculate</Button>
                  </div> */}
                  <div className={styles.calcbtn}>
                    <Button
                      className={styles.calcbtns}
                      // onClick={() => setShowOnClickDownload(true)}
                      onClick={handlesubmit}
                    >
                      Calculate
                    </Button>
                  </div>
                </div>
                <div className={styles.worldwhitebox}>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className={styles.lumpsum}>
                        <div className={styles.left}>
                          <h1>{lumpsumvalue && lumpsumvalue}</h1>
                          <p>lumpsum</p>
                        </div>
                        <div className={styles.right}>
                          <h1>{lumpsumsipvalue && lumpsumsipvalue}</h1>
                          <p>sip</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={styles.btnsection}>
                        <a className={`btn ${styles.investanimation}`} onClick={() => Showlogin()}>
                          invest now
                        </a>
                        <div className={styles.requestbutton} onClick={() => Showlogin()}>
                          <a className={`btn ${styles.investanimation}`}>
                            request consultation
                          </a>
                        </div>

                        {/* <div className={styles.mainhow}>
                          <div className={styles.arrowbutton}>
                            <a href="" className={styles.arwimg}>
                              <Image src={path1} />
                            </a>
                          </div>
                          <div className={styles.line}></div>
                          <div className={styles.arrowtext}>
                            <p>invest now</p>
                          </div>
                        </div> */}
                        {/* <div className={styles.mainhow}>
                          <div className={styles.arrowbutton}>
                            <a href="" className={styles.arwimg}>
                              <Image src={path1} />
                            </a>
                          </div>
                          <div className={styles.line}></div>
                          <div className={styles.arrowtext}>
                            <p>request consultation</p>
                          </div>
                        </div> */}
                        {/* <Link
                 
                 href={
                   "https://app.fincart.com/user/login"
                 }
                 target="_blank"
               >
                           <a className={`btn ${styles.chooseanimation}`}>Know More </a>
                           </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        setShowGetInTouchModel={setShowGetInTouchModel}
        homePage
        planpage
        investPage
        protectPage
        becomeagentpage
        otpModel={otpModel}
        setotpModel={setotpModel}
      />
    </>
  );
};

export default WorldMade;
