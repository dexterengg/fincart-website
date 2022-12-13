import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getInvestmentplanningApi, getLegacyandinheritanceplanningApi, getLegacyandinheritanceplanningfaqsapi, getTaxsavingandplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ LegacyandinheritanceplanningAllData,LegacyandinheritanceplanningfaqAllData}) {
  console.log(LegacyandinheritanceplanningfaqAllData, "LegacyandinheritanceplanningfaqAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.list1}
          list2={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.list2}
          list3={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.list3}
          list4={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.list4}        />
          
        <Whatdoget
          sec5_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq 
                  FinancialplanningData={LegacyandinheritanceplanningfaqAllData?.data} />


        <Touch 
               get_in_touch_heading={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={LegacyandinheritanceplanningAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getLegacyandinheritanceplanningApi();
  const result2 = await getLegacyandinheritanceplanningfaqsapi();
  const LegacyandinheritanceplanningAllData = result.res;
  const LegacyandinheritanceplanningfaqAllData = result2.res;
  return {
    props: {
        LegacyandinheritanceplanningAllData,
        LegacyandinheritanceplanningfaqAllData


    },
  };
}
