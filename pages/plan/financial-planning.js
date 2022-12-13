import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import {
  getFinancialplanningApi,
  getFinancialplanningfaqapi,
} from "../../component/utils/services";
export default function PlanInnerPage({
  FinancialplanningAllData,
  FinancialplanningfaqAllData,
}) {
  console.log(FinancialplanningAllData, "FinancialplanningAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={FinancialplanningAllData?.data?.attributes?.sec_1_title}
        />
        <Whatplanning
          sec_2_h1={FinancialplanningAllData?.data?.attributes?.sec_2_h1}
          sec_2_desc={FinancialplanningAllData?.data?.attributes?.sec_2_desc}
          sec_3_h1={FinancialplanningAllData?.data?.attributes?.sec_3_h1}
          sec_3_desc={FinancialplanningAllData?.data?.attributes?.sec_3_desc}
          sec3_desc1={FinancialplanningAllData?.data?.attributes?.sec3_desc1}
          sec3_desc2={FinancialplanningAllData?.data?.attributes?.sec3_desc2}
          sec3_desc3={FinancialplanningAllData?.data?.attributes?.sec3_desc3}
          sec3_desc4={FinancialplanningAllData?.data?.attributes?.sec3_desc4}
        />
        <Customizedplanning
          sec4_h1={FinancialplanningAllData?.data?.attributes?.sec4_h1}
          sec4_desc={FinancialplanningAllData?.data?.attributes?.sec4_desc}
          list1={FinancialplanningAllData?.data?.attributes?.list1}
          list2={FinancialplanningAllData?.data?.attributes?.list2}
          list3={FinancialplanningAllData?.data?.attributes?.list3}
          list4={FinancialplanningAllData?.data?.attributes?.list4}
         
        />
        <Whatdoget
          sec5_h1={FinancialplanningAllData?.data?.attributes?.sec5_h1}
          sec5_desc={FinancialplanningAllData?.data?.attributes?.sec5_desc}
          emergency={FinancialplanningAllData?.data?.attributes?.emergency}
          emergency_desc={
            FinancialplanningAllData?.data?.attributes?.emergency_desc
          }
          risk={FinancialplanningAllData?.data?.attributes?.risk}
          risk_desc={FinancialplanningAllData?.data?.attributes?.risk_desc}
          goal={FinancialplanningAllData?.data?.attributes?.goal}
          goal_desc={FinancialplanningAllData?.data?.attributes?.goal_desc}
          retirement={FinancialplanningAllData?.data?.attributes?.retirement}
          retirement_desc={
            FinancialplanningAllData?.data?.attributes?.retirement_desc
          }
          estate={FinancialplanningAllData?.data?.attributes?.estate}
          estate_desc={FinancialplanningAllData?.data?.attributes?.estate_desc}
          tax={FinancialplanningAllData?.data?.attributes?.tax}
          tax_desc={FinancialplanningAllData?.data?.attributes?.tax_desc}
        />
        <Financialhelpus
          process_h1={FinancialplanningAllData?.data?.attributes?.process_h1}
          process_desc={
            FinancialplanningAllData?.data?.attributes?.process_desc
          }
          drawn={FinancialplanningAllData?.data?.attributes?.drawn}
          drawn_desc={FinancialplanningAllData?.data?.attributes?.drawn_desc}
          helps_h1={FinancialplanningAllData?.data?.attributes?.helps_h1}
          helps_desc={FinancialplanningAllData?.data?.attributes?.helps_desc}
          raise={FinancialplanningAllData?.data?.attributes?.raise}
          raise_desc={FinancialplanningAllData?.data?.attributes?.raise_desc}
        />
        <Planning 
          sec_seventh_title={FinancialplanningAllData?.data?.attributes?.sec_seventh_title}
          sec_seventh_desc={FinancialplanningAllData?.data?.attributes?.sec_seventh_desc}
        />
        <Faq
        FinancialplanningData={FinancialplanningfaqAllData?.data} />
        <Touch
          get_in_touch_heading={
            FinancialplanningAllData?.data?.attributes?.get_in_touch_h1
          }
          get_in_touch_description={
            FinancialplanningAllData?.data?.attributes?.get_in_touch_desc
          }
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getFinancialplanningApi();
  const result2 = await getFinancialplanningfaqapi();

  const FinancialplanningAllData = result.res;
  const FinancialplanningfaqAllData = result2.res;

  return {
    props: {
      FinancialplanningAllData,
      FinancialplanningfaqAllData,
 
    },
  };
}
