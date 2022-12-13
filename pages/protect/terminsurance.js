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
  getGoalplanningApi,
  getInvestmentplanningApi,
  getMutualfundApi,
  getTaxsavingandplanningApi,
  getTerminsuranceApi,
  getTerminsurancefaqsApi,
} from "../../component/utils/services";
export default function PlanInnerPage({ TerminsuranceAllData,TerminsurancefaqAllData }) {
  console.log(TerminsuranceAllData, "TerminsuranceAllData");
  return (
    <div>
      <main>
        <Banner
          sec_1_title={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_1_h1
          }
        />
        <Whatplanning
          sec_2_h1={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_2_h1
          }
          sec_2_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_2_desc
          }
          sec_3_h1={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_h1
          }
          sec_3_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc
          }
          sec3_desc1={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc1
          }
          sec3_desc2={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc2
          }
          sec3_desc3={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc3
          }
          sec3_desc4={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_3_desc4
          }
        />
        <Customizedplanning
          sec4_h1={TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_4_h1}
          sec4_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec_4_desc
          }
          list1={TerminsuranceAllData?.data?.attributes?.InnerPages?.list1}
          list2={TerminsuranceAllData?.data?.attributes?.InnerPages?.list2}
          list3={TerminsuranceAllData?.data?.attributes?.InnerPages?.list3}
          list4={TerminsuranceAllData?.data?.attributes?.InnerPages?.list4}         />

        <Whatdoget
          sec5_h1={TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_h1}
          sec5_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_desc
          }
          emergency={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h1
          }
          emergency_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p1
          }
          risk={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h2
          }
          risk_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p2
          }
          goal={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h3
          }
          goal_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p3
          }
          retirement={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h4
          }
          retirement_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p4
          }
          estate={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h5
          }
          estate_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p5
          }
          tax={TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_h6}
          tax_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec5_item_p6
          }
        />
        <Financialhelpus
          process_h1={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_h1
          }
          process_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_desc
          }
          drawn={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h1
          }
          drawn_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p1
          }
          helps_h1={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h2
          }
          helps_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p2
          }
          raise={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_h3
          }
          raise_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec6_item_p3
          }
        />
        <Planning
          raise={TerminsuranceAllData?.data?.attributes?.InnerPages?.sec7_h1}
          raise_desc={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec8_desc
          }
        />
        <Faq FinancialplanningData={TerminsurancefaqAllData?.data} />

        <Touch
          get_in_touch_heading={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec8_h1
          }
          get_in_touch_description={
            TerminsuranceAllData?.data?.attributes?.InnerPages?.sec8_desc
          }
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getTerminsuranceApi();
  const result2 = await getTerminsurancefaqsApi();

  const TerminsuranceAllData = result.res;
  const TerminsurancefaqAllData = result2.res;
  return {
    props: {
      TerminsuranceAllData,
      TerminsurancefaqAllData,
    },
  };
}
