import React from "react";
import Investment from "../component/Invest/Investment";
import Goalbased from "../component/Invest/Goalbased";
import Products from "../component/Invest/Products";
import Goalplanning from "../component/Invest/Goalplanning";
import Trackgoal from "../component/Invest/Trackgoal";
import LeadingCrousal from "../component/Invest/LeadingCrousal";
import Testimonials from "../component/Invest/Testimonials";
import Calculator from "../component/Invest/Calculator";
import Investhome from "../component/Invest/Investhome";
import Touch from "../component/Touch";
import Googleowned from "../component/Protect/Googleowned";
import Head from "next/head";
import { getInvestfaqapi, getInvestPageApi, getInvesttrustapi } from "../component/utils/services";

export default function Invest({ investPageAllData, investfaqData,investtrustData }) {
  console.log(investPageAllData, "investPageAllData")

  return (
    <>
     <Head>
        <title>{`${investPageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${investPageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <Investhome
          investPage={true}
          heading={investPageAllData?.data?.attributes?.section_first_title}
          section_first_description={
            investPageAllData?.data?.attributes?.section_first_description
          }
        />
        <Investment
          heading={investPageAllData?.data?.attributes?.section_second_heading}
          section_second_description={
            investPageAllData?.data?.attributes?.section_second_description
          }
          section_second_title_1={
            investPageAllData?.data?.attributes?.section_second_title_1
          }
          section_second_description_1={
            investPageAllData?.data?.attributes?.section_second_description_1
          }
          section_second_title_2={
            investPageAllData?.data?.attributes?.section_second_title_2
          }
          section_second_description_2={
            investPageAllData?.data?.attributes?.section_second_description_2
          }
          section_second_title_3={
            investPageAllData?.data?.attributes?.section_second_title_3
          }
          section_second_description_3={
            investPageAllData?.data?.attributes?.section_second_description_3
          }
        />
        <Goalbased
          heading={investPageAllData?.data?.attributes?.section_third_heading}
          section_third_description={
            investPageAllData?.data?.attributes?.section_third_description
          }
          section_third_titile_1={
            investPageAllData?.data?.attributes?.section_third_titile_1
          }
          section_third_titile_2={
            investPageAllData?.data?.attributes?.section_third_titile_2
          }
          section_third_titile_3={
            investPageAllData?.data?.attributes?.section_third_titile_3
          }
          section_third_image_1={
            investPageAllData?.data?.attributes?.section_third_image_1
          }
          section_third_image_2={
            investPageAllData?.data?.attributes?.section_third_image_2
          }
          section_third_image_3={
            investPageAllData?.data?.attributes?.section_third_image_3
          }
        />
        <LeadingCrousal
          section_fourth_title={
            investPageAllData?.data?.attributes?.section_fourth_title
          }
          section_fourth_description={
            investPageAllData?.data?.attributes?.section_fourth_description
          }
          video={
            investPageAllData?.data?.attributes?.section_fourth_images?.data}
          
        />
        <Calculator
          heading={investPageAllData?.data?.attributes?.section_fifth_heading}
          section_fifth_description={
            investPageAllData?.data?.attributes?.section_fifth_description
          }
        />
        <Trackgoal
          heading={investPageAllData?.data?.attributes?.section_sixth_heading}
        />
        <Goalplanning
                  section_seventh_description={investPageAllData?.data?.attributes?.section_sixth_heading}

      InvestData={investtrustData?.data}
        />
        <Products
          heading={investPageAllData?.data?.attributes?.section_eighth_heading}
          section_eighth_description={
            investPageAllData?.data?.attributes?.section_eighth_description
          }
          section_eighth_mutualFund={
            investPageAllData?.data?.attributes?.section_eighth_mutualFund
          }
          section_eighth_Insurance={
            investPageAllData?.data?.attributes?.section_eighth_Insurance
          }
          section_eighth_Gold={
            investPageAllData?.data?.attributes?.section_eighth_Gold
          }
          sec_eighth_pension={
            investPageAllData?.data?.attributes?.sec_eighth_pension
          }
          section_eighth_Alternate={
            investPageAllData?.data?.attributes?.section_eighth_Alternate
          }
          section_eighth_mutualFund_Equity_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_mutualFund_Equity_description
          }
          section_eighth_mutualFund_Hybrid_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_mutualFund_Hybrid_description
          }
          section_eighth_mutualFund_Debt_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_mutualFund_Debt_description
          }
          section_eighth_Insurance_Life_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Insurance_Life_description
          }
          section_eighth_Insurance_Health_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Insurance_Health_description
          }
          section_eighth_Insurance_Critical_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Insurance_Critical_description
          }
          section_eighth_Insurance_Motor_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Insurance_Motor_description
          }
          section_eighth_Gold_Digital_desription={
            investPageAllData?.data?.attributes
              ?.section_eighth_Gold_Digital_desription
          }
          section_eighth_Alternate_P2P_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Alternate_P2P_description
          }
          section_eighth_Alternate_Portfolio_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Alternate_Portfolio_description
          }
          section_eighth_Alternate_alternative_description={
            investPageAllData?.data?.attributes
              ?.section_eighth_Alternate_alternative_description
          }
          sec_eighth_pensionNPS={
            investPageAllData?.data?.attributes
              ?.sec_eighth_pensionNPS
          }
          sec_eighth_pensionILPS={
            investPageAllData?.data?.attributes
              ?.sec_eighth_pensionILPS
          }
        />
        <Testimonials
          section_ninth_heading={
            investPageAllData?.data?.attributes?.section_ninth_heading
          }
          section_ninth_description={
            investPageAllData?.data?.attributes?.section_ninth_description
          }
          imageData={
            investPageAllData?.data?.attributes?.section_ninth_images?.data
          }
          video_img={investPageAllData?.data?.attributes?.section_ninth_videoImg?.data?.attributes?.formats?.medium?.url}
          video_link={
            investPageAllData?.data?.attributes?.section_ninth_videolink
          }
        />
        <Googleowned InvestData={investfaqData?.data} />
        <Touch
          get_in_touch_heading={
            investPageAllData?.data?.attributes?.get_in_touch_heading
          }
          get_in_touch_description={
            investPageAllData?.data?.attributes?.get_in_touch_description
          }
          investPage={true}
        />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const result = await getInvestPageApi();
  const result2 = await getInvestfaqapi();
  const result3 = await getInvesttrustapi();
  const investPageAllData = result.res;
  const investfaqData = result2.res;
  const investtrustData = result3.res;
  return {
    props: {
      investPageAllData,
      investfaqData,
      investtrustData,
    },
  };
}
