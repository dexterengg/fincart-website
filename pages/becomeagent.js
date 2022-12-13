import Head from "next/head";
import React from "react";
import Banner from "../component/BecomeAgent/Banner";
import Products from "../component/BecomeAgent/Products";
import Advisor from "../component/Advisor";
import Filter from "../component/BecomeAgent/Filter";
import Benefit from "../component/BecomeAgent/Benefit";
import Faq from "../component/BecomeAgent/Faq";
import Touch from "../component/Touch";
import {
  getBecomeadvisorfaqapi,
  getBecomeagentPageApi,
  getProtectfaqapi,
} from "../component/utils/services";

// const Becomeagent = () => {
export default function Becomeagent({ becomePageAllData, BecomefaqData }) {
  console.log(becomePageAllData, "becomePageAllData");
  return (
    <>
      <Head>
        <title>{`${becomePageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${becomePageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <Banner
          becomeagentpage={true}
          heading={becomePageAllData?.data?.attributes?.section_first_heading}
        />
        <Products
          heading={becomePageAllData?.data?.attributes?.section_second_title_1}
          section_second_description_1={
            becomePageAllData?.data?.attributes?.section_second_description_1
          }
          section_second_title_2={
            becomePageAllData?.data?.attributes?.section_second_title_2
          }
          section_second_description_2={
            becomePageAllData?.data?.attributes?.section_second_description_2
          }
          section_second_title_3={
            becomePageAllData?.data?.attributes?.section_second_title_3
          }
          section_second_description_3={
            becomePageAllData?.data?.attributes?.section_second_description_3
          }
        />
        <Advisor
          heading={becomePageAllData?.data?.attributes?.section_third_heading}
          section_third_titile_1={
            becomePageAllData?.data?.attributes?.section_third_titile_1
          }
          section_third_titile_2={
            becomePageAllData?.data?.attributes?.section_third_titile_2
          }
          section_third_titile_3={
            becomePageAllData?.data?.attributes?.section_third_titile_3
          }
          section_third_titile_4={
            becomePageAllData?.data?.attributes?.section_third_titile_4
          }
          section_third_titile_5={
            becomePageAllData?.data?.attributes?.section_third_titile_5
          }
          video_img={becomePageAllData?.data?.attributes?.video_img?.data?.attributes?.formats?.medium?.url}

          video_link={becomePageAllData?.data?.attributes?.section_third_videolink

          }
        />
        <Filter
          heading={becomePageAllData?.data?.attributes?.section_fourth_heading}
          section_fourth_title={
            becomePageAllData?.data?.attributes?.section_fourth_title
          }
          section_fourth_description={
            becomePageAllData?.data?.attributes?.section_fourth_description
          }
          section_fourth_product_1={
            becomePageAllData?.data?.attributes?.section_fourth_product_1
          }
          section_fourth_product_2={
            becomePageAllData?.data?.attributes?.section_fourth_product_2
          }
          section_fourth_product_3={
            becomePageAllData?.data?.attributes?.section_fourth_product_3
          }
          section_fourth_product_4={
            becomePageAllData?.data?.attributes?.section_fourth_product_4
          }
          section_fourth_product_5={
            becomePageAllData?.data?.attributes?.section_fourth_product_5
          }
          section_fourth_product_6={
            becomePageAllData?.data?.attributes?.section_fourth_product_6
          }
          section_fourth_product_7={
            becomePageAllData?.data?.attributes?.section_fourth_product_7
          }
        />
        <Benefit
          heading={becomePageAllData?.data?.attributes?.section_fifth_heading}
          section_fifth_partner={
            becomePageAllData?.data?.attributes?.section_fifth_partner
          }
          section_fifth_marketing={
            becomePageAllData?.data?.attributes?.section_fifth_marketing
          }
          section_fifth_live={
            becomePageAllData?.data?.attributes?.section_fifth_live
          }
          section_fifth_pre_post={
            becomePageAllData?.data?.attributes?.section_fifth_pre_post
          }
          section_fifth_customer={
            becomePageAllData?.data?.attributes?.section_fifth_customer
          }
          section_fifth_research={
            becomePageAllData?.data?.attributes?.section_fifth_research
          }
        />
        <Faq plandata={BecomefaqData?.data} />
        <Touch
          get_in_touch_heading={
            becomePageAllData?.data?.attributes?.get_in_touch_heading
          }
          get_in_touch_description={
            becomePageAllData?.data?.attributes?.get_in_touch_description
          }
          becomeagentpage={true}
        />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const result = await getBecomeagentPageApi();
  const result2 = await getBecomeadvisorfaqapi();
  const becomePageAllData = result.res;
  const BecomefaqData = result2.res;
  return {
    props: {
      becomePageAllData,
      BecomefaqData,
    },
  };
}



