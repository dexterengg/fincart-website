import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/Calculator.module.css";
import Image from "next/image";
// import Select from "react";
import path1 from "../../assets/img/home/RightArrow-W.png";
import path2 from "../../assets/img/become/Graph.png";
import axios from "axios";
import Select from "react-select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const getcategorylist =
  "https://api.fincart.com/api/v2/invest/mngstar/fundlist";
const postschemelist =
  "https://api.fincart.com/api/v2/invest/mngstar/searchSchemes";
const finalecalculate =
  "https://api.fincart.com/api/v2/invest/mngstar/SchemePerformance";
const Calculator = ({ heading, section_fifth_description }) => {
  const [showOnClickDownload, setShowOnClickDownload] = useState(false);
  const [showCategory, setshowCategory] = useState([]);
  const [showScheme, setshowScheme] = useState([]);
  const [showSchemes, setshowSchemes] = useState([]);
  const [showchartdata, setshowchartdata] = useState([]);
  const [categoryvalue, updatecategory] = useState("");
  const [schemevalue, updatescheme] = useState("");
  const [schemevaluess, updateschemess] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [minDate, setMinDate] = useState("");

  const [categoryError, setcategoryError] = useState({});
  const [fundError, setfundError] = useState({});
  const [schemeError, setschemeError] = useState({});
  const [fromdateError, setfromdateError] = useState({});
  const [enddateError, setenddateError] = useState({});

  useEffect(() => {
    // let today = new Date();
    // let mm = today.getMonth() + 1; //January is 0!
    // let yyyy = today.getFullYear();
    // if (mm < 10) {
    //   mm = "0" + mm;
    // }

    // today = yyyy + "-" + mm;
    // setMinDate(today);

    let _year = new Date().getFullYear();
    let _month = new Date().getMonth() + 1;
    let _date = new Date().getDate();
    let _result = `${_month}-${_date}-${_year}`
    setMinDate(_result)
  }, [minDate]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(getcategorylist);
        let options = [];
        response?.data?.data?.funds.map((opt) =>
          options.push({
            label: opt.fundName,
            value: opt.fundid,
          })
        );
        let option = [];
        response?.data?.data?.obj.map((opt) =>
          option.push({
            label: opt.objName,
          })
        );
        // console.log(response);
        // console.log(options);
        // console.log(option);
        setshowCategory(options);
        setshowScheme(option);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  useEffect(() => {
    if (categoryvalue && schemevalue) {
      (async () => {
        try {
          const response = await axios.post(postschemelist, {
            fundid: categoryvalue,
            obj: schemevalue,
            subObj: "",
            schemeName: "",
            userGoalId: "",
            divOpt: "",
          });

          // console.log(response);
          let option = [];
          response?.data?.data.map((opt) =>
            option.push({
              label: opt.scheme_name,
              value: opt.scheme_id,
            })
          );
          setshowSchemes(option);
        } catch (error) {
          console.log(error.response);
        }
      })();
    }
  }, [categoryvalue, schemevalue]);

  const handlecalculate = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      let _newDate = new Date(startdate);
      let _year = _newDate.getFullYear();
      let _month = _newDate.getMonth() + 1;
      let sendFromDate = `${_year}-${_month}`;
      let _newDate2 = new Date(enddate);
      let _year2 = _newDate2.getFullYear();
      let _month2 = _newDate2.getMonth() + 1;
      let sendEndDate = `${_year2}-${_month2}`;
      try {
        const resp = await axios.post(finalecalculate, {
          Scheme_code: schemevaluess,
          fromDate: sendFromDate,
          toDate: sendEndDate,
          trxn_type: "X",
        });
        console.log(resp);
        console.log(resp.data.data);
        setshowchartdata(resp?.data?.data);
        setShowOnClickDownload(true);
        updatecategory("Select category");
        updatescheme("Select Fund");
        updateschemess("Select Scheme");
        setstartdate("");
        setenddate("");
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const formValidation = () => {
    const categoryError = {};
    const fundError = {};
    const schemeError = {};
    const fromdateError = {};
    const enddateError = {};
    let isValid = true;
    if (categoryvalue === "") {
      categoryError.shortName = "Please Select Category";
      isValid = false;
    }
    if (schemevalue === "") {
      fundError.invalidMob = "Please Select Fund";
      isValid = false;
    }
    if (schemevaluess === "") {
      schemeError.invalidEmail = "Please Select Scheme";
      isValid = false;
    }
    if (startdate === "") {
      fromdateError.invalidEmail = "Please Select Start date";
      isValid = false;
    }
    if (enddate === "") {
      enddateError.invalidEmail = "Please Select End date";
      isValid = false;
    }
    setcategoryError(categoryError);
    setfundError(fundError);
    setschemeError(schemeError);
    setfromdateError(fromdateError);
    setenddateError(enddateError);
    return isValid;
  };
  console.log(categoryvalue, "categoryvalue");
  console.log(schemevalue, "schemevalue");
  console.log(schemevaluess, "schemevaluess");
  console.log(startdate, "startdate");
  console.log(enddate, "enddate");

  const handlecategoryChange = (e) => {
    updatecategory(e.target.value);
    setShowOnClickDownload(false);
  };

  const handlefund = (e) => {
    updatescheme(e.target.value);
    setShowOnClickDownload(false);
  };
  const handlescheme = (e) => {
    updateschemess(e.target.value);
    setShowOnClickDownload(false);
  };
  const handlestartdate = (date) => {
    setstartdate(date);
    setShowOnClickDownload(false);
  };
  const handleenddate = (date) => {
    setenddate(date);
    setShowOnClickDownload(false);
  };
  return (
    <>
      <div className={styles.worldouter}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.worldmadehead}>
                <h2 className="allhead">{heading}</h2>
              </div>
              <div className={styles.worldpara}>
                <p>{section_fifth_description}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className={styles.worldbluebox}>
                <p className={styles.sameline}>
                  I want to know the past performance of a Mutual Fund 
                  <span className={styles.category}>
                    {/* <select
                      className={styles.formselect}
                      aria-label="Default select example"
                      isSearchable
                      // onChange={(e) => {
                      //   updatecategory(e.target.value);
                      // }}
                      onChange={handlecategoryChange}
                    >
                      <option selected>Select category</option>
                      {showCategory?.map((data) => {
                        return (
                          <>
                            <option value={data.value}>{data.label}</option>
                          </>
                        );
                      })}
                    </select>
                    {Object.keys(categoryError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {categoryError[key]}
                        </span>
                      );
                    })} */}
                    <select
                      className={styles.formselect}
                      aria-label="Default select example"
                      // onChange={(e) => {
                      //   updatescheme(e.target.value);
                      // }}
                      onChange={handlefund}
                    >
                      <option selected>Select Fund</option>
                      {showScheme?.map((data) => {
                        return (
                          <>
                            <option value={data.label}>{data.label}</option>
                          </>
                        );
                      })}
                    </select>
                  </span>
                  in the
                  category{" "}{" "}
                  <span className={styles.category1}>
                    {/* <select
                      className={styles.formselect}
                      aria-label="Default select example"
                      // onChange={(e) => {
                      //   updatescheme(e.target.value);
                      // }}
                      onChange={handlefund}
                    >
                      <option selected>Select Fund</option>
                      {showScheme?.map((data) => {
                        return (
                          <>
                            <option value={data.label}>{data.label}</option>
                          </>
                        );
                      })}
                    </select> */}

                    <select
                      className={styles.formselect}
                      aria-label="Default select example"
                      isSearchable
                      // onChange={(e) => {
                      //   updatecategory(e.target.value);
                      // }}
                      onChange={handlecategoryChange}
                    >
                      <option selected>Select category</option>
                      {showCategory?.map((data) => {
                        return (
                          <>
                            <option value={data.value}>{data.label}</option>
                          </>
                        );
                      })}
                    </select>
                    {Object.keys(categoryError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {categoryError[key]}
                        </span>
                      );
                    })}
                    {Object.keys(fundError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {fundError[key]}
                        </span>
                      );
                    })}
                  </span>
                  for the scheme{" "}
                  <span className={styles.category2}>
                    <select
                      className={styles.formselect}
                      aria-label="Default select example"
                      // onChange={(e) => {
                      //   updateschemess(e.target.value);
                      // }}
                      onChange={handlescheme}
                    >
                      <option selected>Select Scheme</option>
                      {showSchemes?.map((data) => {
                        return (
                          <>
                            <option value={data.value}>{data.label}</option>
                          </>
                        );
                      })}
                    </select>
                    {Object.keys(schemeError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {schemeError[key]}
                        </span>
                      );
                    })}
                  </span>
                  from{" "}
                  <span className={styles.category3}>
                    {/* <input
                      className={styles.formselects}
                      type="month"
                      name="startdate"
                      id="exampleDate"
                      placeholder="start Date"
                      max={`${minDate}`}
                      // onChange={(e) => setstartdate(e.target.value)}
                      onChange={handlestartdate}
                    /> */}
                    <DatePicker
                      selected={startdate}
                      onChange={handlestartdate}
                      dateFormat="MM/yyyy"
                      maxDate={new Date()}
                      placeholderText="start Date"
                      showFourColumnMonthYearPicker
                      className={styles.formselect}
                    />
                    {Object.keys(fromdateError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {fromdateError[key]}
                        </span>
                      );
                    })}
                  </span>
                  to{" "}
                  <span className={styles.category4}>
                    {/* <input
                      className={styles.formselects}
                      type="month"
                      name="enddate"
                      id="exampleDate"
                      placeholder="end date"
                      max={`${minDate}`}
                      // onChange={(e) => setenddate(e.target.value)}
                      onChange={handleenddate}
                    /> */}
                    <DatePicker
                      selected={enddate}
                      onChange={handleenddate}
                      dateFormat="MM/yyyy"
                      maxDate={new Date()}
                      placeholderText="end date"
                      showFourColumnMonthYearPicker
                      className={styles.formselect}
                    />
                    {Object.keys(enddateError).map((key, id) => {
                      return (
                        <span
                          key={id}
                          style={{ color: "white", fontSize: "12px" }}
                        >
                          {enddateError[key]}
                        </span>
                      );
                    })}
                  </span>
                </p>
                <div className={styles.calcbtn}>
                  <Button
                    className="buttons buttontwo"
                    // onClick={() => setShowOnClickDownload(true)}
                    onClick={(e) => handlecalculate(e)}
                  >
                    Calculate
                  </Button>
                </div>
              </div>
            </div>
            {showOnClickDownload && (
              <div className="col-md-12">
                <div className="worldoutergraph">
                  {/* <Image src={path2} alt="Img" /> */}
                  <LineChart
                    width={1000}
                    height={300}
                    data={showchartdata}
                    margin={{
                      top: 40,
                      right: 30,
                      left: 20,
                      bottom: 0,
                    }}
                    padding={{
                      bottom: 20,
                    }}
                    className="LineChart"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="PAmt"
                      stroke="#8884d8"
                    // activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="inAmt"
                      stroke="#82ca9d"
                    // activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
