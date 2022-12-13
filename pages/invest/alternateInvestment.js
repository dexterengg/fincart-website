import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getAlternativeinvestmentApi, getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getInvestmentplanningApi, getMutualfundApi, getMutualfundfaqsapi, getTaxsavingandplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ AlternativeinvestmentAllData,AlternativeinvestmentfaqAllData}) {
  console.log(AlternativeinvestmentAllData, "AlternativeinvestmentAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.list1}
          list2={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.list2}
          list3={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.list3}
          list4={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.list4}         />
          
        <Whatdoget
          sec5_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq
                          FinancialplanningData={AlternativeinvestmentfaqAllData?.data} />

        <Touch 
               get_in_touch_heading={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={AlternativeinvestmentAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getAlternativeinvestmentApi();
  const result2 = await getMutualfundfaqsapi();
   console.log(result,"getAlternativeinvestmentApi")
  const AlternativeinvestmentAllData = result.res;
  const AlternativeinvestmentfaqAllData = result2.res;
  return {
    props: {
        AlternativeinvestmentAllData,
        AlternativeinvestmentfaqAllData


    },
  };
}
