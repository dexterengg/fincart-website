import React from "react";
import Banner from "../../component/Planinner/Banner";
import Customizedplanning from "../../component/Planinner/Customizedplanning";
import Whatplanning from "../../component/Planinner/Whatplanning";
import Whatdoget from "../../component/Planinner/Whatdoget";
import Touch from "../../component/Touch";
import Financialhelpus from "../../component/Planinner/Financialhelpus";
import Faq from "../../component/Planinner/Faq";
import Planning from "../../component/Planinner/Planning";
import { getFinancialplanningApi, getFinancialplanningfaqapi, getGoalplanningApi, getGuaranteedincomeinsuranceplanApi, getGuaranteedincomeinsuranceplansfaqsApi, getInvestmentplanningApi, getMutualfundApi, getTaxsavingandplanningApi } from "../../component/utils/services";
export default function PlanInnerPage({ GuaranteedincomeinsuranceplanAllData,GuaranteedincomeinsuranceplanfaqAllData}) {
  console.log(GuaranteedincomeinsuranceplanfaqAllData, "GuaranteedincomeinsuranceplanfaqAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_1_h1}
        />
        <Whatplanning
          sec_2_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_2_h1}

          sec_2_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_2_desc}
          sec_3_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_h1}
          sec_3_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_desc}
          sec3_desc1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_desc1}
          sec3_desc2={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_desc2}
          sec3_desc3={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_desc3}
          sec3_desc4={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_3_desc4}
        />
      <Customizedplanning
          sec4_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec_4_desc}
          list1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.list1}
          list2={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.list2}
          list3={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.list3}
          list4={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.list4}          />
          
        <Whatdoget
          sec5_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_desc}
          emergency={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h1}
          emergency_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p1}
          risk={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h2}
          risk_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p2}
          goal={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h3}
          goal_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p3}
          retirement={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h4}
          retirement_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p4}
          estate={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h5}
          estate_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p5}
          tax={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec5_item_p6}
        />
        <Financialhelpus
   process_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_h1}
   process_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_desc}
   drawn={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_h1}
   drawn_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_p1}
   helps_h1={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_h2}
   helps_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_p2}
   raise={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_h3}
   raise_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec6_item_p3}


         />
        <Planning 
               raise={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec7_h1}
   raise_desc={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
        <Faq
                          FinancialplanningData={GuaranteedincomeinsuranceplanfaqAllData?.data} />

   
        <Touch 
               get_in_touch_heading={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec8_h1}
               get_in_touch_description={GuaranteedincomeinsuranceplanAllData?.data?.attributes?.InnerPages?.sec8_desc}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getGuaranteedincomeinsuranceplanApi();
  const result2 = await getGuaranteedincomeinsuranceplansfaqsApi();

  const GuaranteedincomeinsuranceplanAllData = result.res;
  const GuaranteedincomeinsuranceplanfaqAllData = result2.res;
  return {
    props: {
        GuaranteedincomeinsuranceplanAllData,
        GuaranteedincomeinsuranceplanfaqAllData


    },
  };
}
