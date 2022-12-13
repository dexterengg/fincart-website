import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getAssetinsuranceApi, getAssetinsurancehomefaqsApi, getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getHealthinsuranceApi, getInvestmentplanningApi, getMutualfundApi, getTaxsavingandplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ AssetinsuranceAllData,AssetinsurancefaqAllData}) {
  console.log(AssetinsuranceAllData, "AssetinsuranceAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.list1}
          list2={AssetinsuranceAllData?.data?.attributes?.InnerPages?.list2}
          list3={AssetinsuranceAllData?.data?.attributes?.InnerPages?.list3}
          list4={AssetinsuranceAllData?.data?.attributes?.InnerPages?.list4}            />
          
        <Whatdoget
          sec5_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq 
                            FinancialplanningData={AssetinsurancefaqAllData?.data} />

     
        <Touch 
               get_in_touch_heading={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={AssetinsuranceAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getAssetinsuranceApi();
  const result2 = await getAssetinsurancehomefaqsApi();

  const AssetinsuranceAllData = result.res;
  const AssetinsurancefaqAllData = result2.res;
  return {
    props: {
        AssetinsuranceAllData,
        AssetinsurancefaqAllData,

 

    },
  };
}
