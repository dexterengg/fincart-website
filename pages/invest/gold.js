import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getGoldApi, getGoldfaqsapi, getInvestmentplanningApi, getMutualfundApi, getTaxsavingandplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ GoldAllData,GoldAllfaqData}) {
  console.log(GoldAllData, "GoldAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={GoldAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={GoldAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={GoldAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={GoldAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={GoldAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={GoldAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={GoldAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={GoldAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={GoldAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={GoldAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={GoldAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={GoldAllData?.data?.attributes?.InnerPages?.list1}
          list2={GoldAllData?.data?.attributes?.InnerPages?.list2}
          list3={GoldAllData?.data?.attributes?.InnerPages?.list3}
          list4={GoldAllData?.data?.attributes?.InnerPages?.list4}        />
          
        <Whatdoget
          sec5_h1={GoldAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={GoldAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={GoldAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={GoldAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={GoldAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={GoldAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={GoldAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq 
                            FinancialplanningData={GoldAllfaqData?.data} />


        <Touch 
               get_in_touch_heading={GoldAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={GoldAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getGoldApi();
  const result2 = await getGoldfaqsapi();
  const GoldAllData = result.res;
  const GoldAllfaqData = result2.res;
  return {
    props: {
        GoldAllData,
        GoldAllfaqData
    },
  };
}
