import React, { useState } from "react";
import Debt from "./Debt";
import Hybrid from "./Hybrid";
import MutualfundData from "./MutualfundData";

const Submain = ({
  section_eighth_mutualFund_Equity_description,
  section_eighth_mutualFund_Hybrid_description,
  section_eighth_mutualFund_Debt_description,
}) => {
  const [mutualFund, setMutualFund] = useState(true);
  const [hybrid, setHybrid] = useState(false);
  const [debt, setDebt] = useState(false);

  const handleMutualFund = () => {
    setMutualFund(true);
    setHybrid(false);
    setDebt(false);
  };
  const handlehybrid = () => {
    setMutualFund(false);
    setHybrid(true);
    setDebt(false);
  };
  const handleDebt = () => {
    setMutualFund(false);
    setHybrid(false);
    setDebt(true);
  };

  return (
    <section className="pt-4">
      <div className="investus_tab_list submainFlexMobile ms-4 me-5">
        <div
          className={`${mutualFund && "investactive"} equity cursor pt-4 pb-2`}
          onClick={() => handleMutualFund()}
        >
          <h5>Equity</h5>
        </div>
        <div
          className={`${hybrid && "investactive"} equity cursor pt-4 pb-2`}
          onClick={() => handlehybrid()}
        >
          <h5>Hybrid</h5>
        </div>
        <div
          className={`${debt && "investactive"}  equity cursor pt-4 pb-2`}
          onClick={() => handleDebt()}
        >
          <h5>Debt</h5>
        </div>
      </div>
      <div className="ps-4 pe-5 pb-4">
        {mutualFund && <MutualfundData 
          description={section_eighth_mutualFund_Equity_description}
        />}
        {hybrid && <Hybrid 
                    section={section_eighth_mutualFund_Hybrid_description}

        />}
        {debt && <Debt                    
                  critical={section_eighth_mutualFund_Debt_description}
 />}
      </div>
    </section>
  );
};

export default Submain;
