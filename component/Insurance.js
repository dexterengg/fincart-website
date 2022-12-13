import React, { useState } from "react";
import Debt from "./Debt";
import Hybrid from "./Hybrid";
import Motor from "./Motor";
import MutualfundData from "./MutualfundData";

const Insurance = ({
  section_eighth_Insurance_Life_description,
  section_eighth_Insurance_Health_description,
  section_eighth_Insurance_Critical_description,
  section_eighth_Insurance_Motor_description
}) => {
  const [mutualFund, setMutualFund] = useState(true);
  const [hybrid, setHybrid] = useState(false);
  const [debt, setDebt] = useState(false);
  const [motor, setMotor] = useState(false);

  const handleMutualFund = () => {
    setMutualFund(true);
    setHybrid(false);
    setDebt(false);
    setMotor(false);
  };
  const handlehybrid = () => {
    setMutualFund(false);
    setHybrid(true);
    setDebt(false);
    setMotor(false);
  };
  const handleDebt = () => {
    setMutualFund(false);
    setHybrid(false);
    setDebt(true);
    setMotor(false);
  };
  const handleMotor = () => {
    setMutualFund(false);
    setHybrid(false);
    setDebt(false);
    setMotor(true);
  };

  return (
    <section className="pt-4">
      <div className="investus_tab_list ms-4 me-5">
        <div
          className={`${
            mutualFund && "investactive"
          } insurance cursor pt-4 pb-2`}
          onClick={() => handleMutualFund()}
        >
          <h5>Life Insurance</h5>
        </div>
        <div
          className={`${hybrid && "investactive"} insurance cursor pt-4 pb-2`}
          onClick={() => handlehybrid()}
        >
          <h5>Health Insurance</h5>
        </div>
        <div
          className={`${debt && "investactive"} insurance cursor pt-4 pb-2`}
          onClick={() => handleDebt()}
        >
          <h5>Critical Illness</h5>
        </div>
        <div
          className={`${motor && "investactive"} insurance cursor pt-4 pb-2`}
          onClick={() => handleMotor()}
        >
          <h5>Motor Insurance</h5>
        </div>
      </div>
      <div className="ps-4 pe-5 pb-4">
        {mutualFund && (
          <MutualfundData
            description={section_eighth_Insurance_Life_description}
          />
        )}
        {hybrid && (
          <Hybrid section={section_eighth_Insurance_Health_description} />
        )}
        {debt && (
          <Debt critical={section_eighth_Insurance_Critical_description} />
        )}
        {motor && (
          <Motor des={section_eighth_Insurance_Motor_description} />
        )}
      </div>
    </section>
  );
};

export default Insurance;
