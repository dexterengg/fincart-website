import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getGoalplanningfaqapi, getInvestmentplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ GoalplanningAllData,GoalplanningfaqAllFData}) {
  console.log(GoalplanningAllData, "GoalplanningAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={GoalplanningAllData?.data?.attributes?.InnerPages?.list1}
          list2={GoalplanningAllData?.data?.attributes?.InnerPages?.list2}
          list3={GoalplanningAllData?.data?.attributes?.InnerPages?.list3}
          list4={GoalplanningAllData?.data?.attributes?.InnerPages?.list4}
        />
          
        <Whatdoget
          sec5_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
          isNotShow = {true}
        />
        <Financialhelpus
   process_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={GoalplanningAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={GoalplanningAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq 
                  FinancialplanningData={GoalplanningfaqAllFData?.data} />
     
        <Touch 
               get_in_touch_heading={GoalplanningAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={GoalplanningAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getGoalplanningApi();
  const result2 = await getGoalplanningfaqapi();
  const GoalplanningAllData = result.res;
  const GoalplanningfaqAllFData = result2.res;
  return {
    props: {
        GoalplanningAllData,
        GoalplanningfaqAllFData
 

    },
  };
}
