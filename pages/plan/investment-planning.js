import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getFinancialplanningApi, getFinancialplanningfaqapi, getInvestmentplanningApi, getInvestmentplanningfaqapi } from "../../component/utils/services";
export default function PlanInnerPage({ InvestmentplanningallData,InvestmentplanningfaqAllData}) {
  console.log(InvestmentplanningfaqAllData, "InvestmentplanningfaqAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={InvestmentplanningallData?.data?.attributes?.Inner_pages?.
            sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_2_h1}

          sec_2_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_2_desc}
          sec_3_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_h1}
          sec_3_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_desc}
          sec3_desc1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_desc1}
          sec3_desc2={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_desc2}
          sec3_desc3={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_desc3}
          sec3_desc4={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_4_h1}
          sec4_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec_4_desc}
          list1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.list1}
          list2={InvestmentplanningallData?.data?.attributes?.Inner_pages?.list2}
          list3={InvestmentplanningallData?.data?.attributes?.Inner_pages?.list2}
          list4={InvestmentplanningallData?.data?.attributes?.Inner_pages?.list4}
        />
          
        <Whatdoget
          sec5_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_h1}
          sec5_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_desc}
          emergency={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h1}
          emergency_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p1}
          risk={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h2}
          risk_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p2}
          goal={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h3}
          goal_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p3}
          retirement={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h4}
          retirement_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p4}
          estate={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h5}
          estate_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p5}
          tax={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_h6}
          tax_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_h1}
   process_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_desc}
   drawn={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_h1}
   drawn_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_p1}
   helps_h1={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_h2}
   helps_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_p2}
   raise={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_h3}
   raise_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec6_item_p3}


         />
        <Planning 
               raise={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec7_h1}
   raise_desc={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec8_desc}
        />
        <Faq 
                  FinancialplanningData={InvestmentplanningfaqAllData?.data} 

        />
        <Touch 
               get_in_touch_heading={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec8_h1}
               get_in_touch_description={InvestmentplanningallData?.data?.attributes?.Inner_pages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getInvestmentplanningApi();
  const result2 = await getInvestmentplanningfaqapi();

  const InvestmentplanningallData = result.res;
  const InvestmentplanningfaqAllData = result2.res;
  return {
    props: {
        InvestmentplanningallData,
        InvestmentplanningfaqAllData 
 

    },
  };
}
