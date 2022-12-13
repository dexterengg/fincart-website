import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/Products.module.css";
import Submain from "../../component/Submain";
import Insurance from "../../component/Insurance";
import Gold from "../../component/Gold";
import Alternate from "../../component/Alternate";
import Fixeddeposite from "../../component/Fixeddeposite";
import path1 from "../../assets/img/Logo/Group 3140.svg";
import path2 from "../../assets/img/Logo/Group 2823.svg";
import path3 from "../../assets/img/Logo/Group 2824.svg";
import path4 from "../../assets/img/Logo/Group 2825.svg";
import path5 from "../../assets/img/Protect/Group 2826.svg";
import Accordion from "react-bootstrap/Accordion";

import Image from "next/image";
const Investus = ({
  heading,
  section_eighth_description,
  section_eighth_mutualFund,
  section_eighth_Insurance,
  section_eighth_Gold,
  sec_eighth_pension,
  section_eighth_Alternate,
  section_eighth_mutualFund_Equity_description,
  section_eighth_mutualFund_Hybrid_description,
  section_eighth_mutualFund_Debt_description,
  section_eighth_Insurance_Life_description,
  section_eighth_Insurance_Health_description,
  section_eighth_Insurance_Critical_description,
  section_eighth_Insurance_Motor_description,
  section_eighth_Gold_Digital_desription,
  section_eighth_Alternate_P2P_description,
  section_eighth_Alternate_Portfolio_description,
  section_eighth_Alternate_alternative_description,
  sec_eighth_pensionNPS,
  sec_eighth_pensionILPS
}) => {
  const [mutualFund, setMutualFund] = useState(true);
  const [insurance, setInsurance] = useState(false);
  const [gold, setGold] = useState(false);
  const [alternate, setAlternate] = useState(false);
  const [fixeddeposite, setFixeddeposite] = useState(false);
  const [isShowAccordions, setIsShowAccordions] = useState(false);

  const handleMutualFund = () => {
    setMutualFund(true);
    setInsurance(false);
    setGold(false);
    setAlternate(false);
    setFixeddeposite(false);
  };
  const handleInsurance = () => {
    setMutualFund(false);
    setInsurance(true);
    setGold(false);
    setAlternate(false);
    setFixeddeposite(false);
  };
  const handleGold = () => {
    setMutualFund(false);
    setInsurance(false);
    setGold(true);
    setAlternate(false);
    setFixeddeposite(false);
  };
  const handlealternate = () => {
    setMutualFund(false);
    setInsurance(false);
    setGold(false);
    setAlternate(true);
    setFixeddeposite(false);
  };
  const handleFixeddeposite = () => {
    setMutualFund(false);
    setInsurance(false);
    setGold(false);
    setAlternate(false);
    setFixeddeposite(true);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsShowAccordions(true)
    }
  })

  return (
    <>
      <div className="investus">
        <div className="container-fluid container-md">
          <div className="row">
            <div className="col-12">
              <div className="invest_title">
                <h3>{heading}</h3>
                <p>{section_eighth_description}</p>
              </div>
            </div>
          </div>
          {
            !isShowAccordions && (
              <div className="investus_background mt-5">
                <div className="row">
                  <div className="col-md-2 col-12 invest_sub_nav">
                    <ul>
                      <li
                        className={`forBorder1 ${mutualFund && "mutual"} cursor`}
                        onClick={() => handleMutualFund()}
                      >
                        <div className="row align-items-center justify-content-center">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center invest_image">
                                <Image src={path1} />
                              </div>
                              <h5 className={mutualFund && "textColorChange"}>
                                {section_eighth_mutualFund}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`forBorder2 ${insurance && "mutual"} cursor`}
                        onClick={() => handleInsurance()}
                      >
                        <div className="row align-items-center justify-content-center">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center invest_image">
                                <Image src={path2} />
                              </div>
                              <h5 className={insurance && "textColorChange"}>
                                {section_eighth_Insurance}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`forBorder3 ${gold && "mutual"} cursor`}
                        onClick={() => handleGold()}
                      >
                        <div className="row align-items-center justify-content-center">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center invest_image">
                                <Image src={path3} />
                              </div>
                              <h5 className={gold && "textColorChange"}>
                                {section_eighth_Gold}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`forBorder5 ${fixeddeposite && "mutual"} cursor`}
                        onClick={() => handleFixeddeposite()}
                      >
                        <div className="row align-items-center ">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center invest_image">
                                <Image src={path5} />
                              </div>
                              <h5 className={fixeddeposite && "textColorChange"}>
                               {sec_eighth_pension}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`forBorder4 ${alternate && "mutual"} cursor`}
                        onClick={() => handlealternate()}
                      >
                        <div className="row align-items-center ">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center ">
                              <div className="d-flex align-items-center invest_image">
                                <Image src={path4} />
                              </div>
                              <h5 className={alternate && "textColorChange"}>
                                {section_eighth_Alternate}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className={`col-md-10 col-12 ${styles.contentbg}`}>
                    {mutualFund && (
                      <Submain
                        section_eighth_mutualFund_Equity_description={
                          section_eighth_mutualFund_Equity_description
                        }
                        section_eighth_mutualFund_Hybrid_description={
                          section_eighth_mutualFund_Hybrid_description
                        }
                        section_eighth_mutualFund_Debt_description={
                          section_eighth_mutualFund_Debt_description
                        }
                      />
                    )}

                    {insurance && (
                      <Insurance
                        section_eighth_Insurance_Life_description={
                          section_eighth_Insurance_Life_description
                        }
                        section_eighth_Insurance_Health_description={
                          section_eighth_Insurance_Health_description
                        }
                        section_eighth_Insurance_Critical_description={
                          section_eighth_Insurance_Critical_description
                        }
                        section_eighth_Insurance_Motor_description={
                          section_eighth_Insurance_Motor_description
                        }
                      />
                    )}
                    {gold && (
                      <Gold
                        section_eighth_Gold_Digital_desription={
                          section_eighth_Gold_Digital_desription
                        }
                      />
                    )}
                    {fixeddeposite && <Fixeddeposite 
                      sec_eighth_pensionNPS={sec_eighth_pensionNPS}
                      sec_eighth_pensionILPS={sec_eighth_pensionILPS}
                    />}
                    {alternate && (
                      <Alternate
                        section_eighth_Alternate_P2P_description={
                          section_eighth_Alternate_P2P_description
                        }
                        section_eighth_Alternate_Portfolio_description={
                          section_eighth_Alternate_Portfolio_description
                        }
                        section_eighth_Alternate_alternative_description={
                          section_eighth_Alternate_alternative_description
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          }


          {
            isShowAccordions && (
              <div className="investus_background mt-5">
                <Accordion defaultActiveKey="0" className="Productsaccordian">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="productsaccordionHead">
                        <div className="productsaccordionImg">
                          <Image src={path1} />
                        </div>
                        <h5>
                          {section_eighth_mutualFund}
                        </h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Submain
                        section_eighth_mutualFund_Equity_description={
                          section_eighth_mutualFund_Equity_description
                        }
                        section_eighth_mutualFund_Hybrid_description={
                          section_eighth_mutualFund_Hybrid_description
                        }
                        section_eighth_mutualFund_Debt_description={
                          section_eighth_mutualFund_Debt_description
                        }
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="productsaccordionHead">
                        <div className="productsaccordionImg">
                          <Image src={path2} />
                        </div>
                        <h5>
                          {section_eighth_Insurance}
                        </h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Insurance
                        section_eighth_Insurance_Life_description={
                          section_eighth_Insurance_Life_description
                        }
                        section_eighth_Insurance_Health_description={
                          section_eighth_Insurance_Health_description
                        }
                        section_eighth_Insurance_Critical_description={
                          section_eighth_Insurance_Critical_description
                        }
                        section_eighth_Insurance_Motor_description={
                          section_eighth_Insurance_Motor_description
                        }
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="productsaccordionHead">
                        <div className="productsaccordionImg">
                          <Image src={path3} />
                        </div>
                        <h5>
                          {section_eighth_Gold}
                        </h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Gold
                        section_eighth_Gold_Digital_desription={
                          section_eighth_Gold_Digital_desription
                        }
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="productsaccordionHead">
                        <div className="productsaccordionImg">
                          <Image src={path5} />
                        </div>
                        <h5>
                        {sec_eighth_pension}
                        </h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Fixeddeposite 
                      sec_eighth_pensionNPS={sec_eighth_pensionNPS}
                      sec_eighth_pensionILPS={sec_eighth_pensionILPS} />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <div className="productsaccordionHead">
                        <div className="productsaccordionImg">
                          <Image src={path4} />
                        </div>
                        <h5>
                          {section_eighth_Alternate}
                        </h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Alternate
                        section_eighth_Alternate_P2P_description={
                          section_eighth_Alternate_P2P_description
                        }
                        section_eighth_Alternate_Portfolio_description={
                          section_eighth_Alternate_Portfolio_description
                        }
                        section_eighth_Alternate_alternative_description={
                          section_eighth_Alternate_alternative_description
                        }
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Investus;
