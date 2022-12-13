import React from "react";
import Image from "next/image";
import PlanBanner from "../component/PlanBanner";
import WhyPlan from "../component/WhyPlan";
import HowDO from "../component/HowDo";
import WhatBenift from "../component/WhatBenift";
import PlanObjective from "../component/PlanObjective";
import WorldMade from "../component/WorldMade";
import Faq from "../component/BecomeAgent/Faq";
import Doubts from "../component/Doubts";
import Customplan from "../component/Customplan";
import Head from "next/head";

import { getHomePageApi, getPlanfaqapi, getPlanPageApi } from "../component/utils/services";

export default function Home({ PlanPageAllData,PlanfaqData,homePageAllData }) {
  console.log(PlanPageAllData, "PlanPageAllData");
  return (
    <>
       <Head>
        <title>{`${PlanPageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${PlanPageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <PlanBanner
        planpage = {true}
         heading={PlanPageAllData?.data?.attributes?.section_first_title}
        description={PlanPageAllData?.data?.attributes?.section_first_description}
        />
        <WhyPlan head={PlanPageAllData?.data?.attributes?.heading_plan}
         Title1={PlanPageAllData?.data?.attributes?.section_second_title_1}
         Title2={PlanPageAllData?.data?.attributes?.section_second_title_2}
         Title3={PlanPageAllData?.data?.attributes?.section_second_title_3}
         description1={PlanPageAllData?.data?.attributes?.section_second_description_1}
         description2={PlanPageAllData?.data?.attributes?.section_second_description_2}
         description3={PlanPageAllData?.data?.attributes?.section_second_description_3}
        />
        <HowDO 
        heads={PlanPageAllData?.data?.attributes?.section_third_heading}
        boxtitle1={PlanPageAllData?.data?.attributes?.section_third_titile_1}
        boxtitle2={PlanPageAllData?.data?.attributes?.section_third_titile_2}
        boxtitle3={PlanPageAllData?.data?.attributes?.section_third_titile_3}
        boxtitle4={PlanPageAllData?.data?.attributes?.section_third_titile_4}
        boxtitle5={PlanPageAllData?.data?.attributes?.section_third_titile_5}
        boxdescription1={PlanPageAllData?.data?.attributes?.section_third_description_1_li_1}
        boxdescription2={PlanPageAllData?.data?.attributes?.section_third_description_1_li_2}
        boxdescription3={PlanPageAllData?.data?.attributes?.section_third_description_2_li_1}
        boxdescription4={PlanPageAllData?.data?.attributes?.section_third_description_2_li_2}
        boxdescription5={PlanPageAllData?.data?.attributes?.section_third_description_3_li_1}
        boxdescription6={PlanPageAllData?.data?.attributes?.section_third_description_3_li_2}
        boxdescription7={PlanPageAllData?.data?.attributes?.section_third_description_4_li_1}
        boxdescription8={PlanPageAllData?.data?.attributes?.section_third_description_4_li_2}
        boxdescription9={PlanPageAllData?.data?.attributes?.section_third_description_5_li_1}
        boxdescription10={PlanPageAllData?.data?.attributes?.section_third_description_5_li_2}
        />
        <WhatBenift 
        benefithead={PlanPageAllData?.data?.attributes?.section_fourth_heading}
        Title1={PlanPageAllData?.data?.attributes?.section_fourth_title_1}
        Title2={PlanPageAllData?.data?.attributes?.section_fourth_title_2}
        Title3={PlanPageAllData?.data?.attributes?.section_fourth_title_3}
        description1={PlanPageAllData?.data?.attributes?.section_fourth_description_1}
        description2={PlanPageAllData?.data?.attributes?.section_fourth_description_2}
        description3={PlanPageAllData?.data?.attributes?.section_fourth_description_3}
        />
        {/* <PlanObjective 
         planhead={PlanPageAllData?.data?.attributes?.section_fifth_heading}
         Title1={PlanPageAllData?.data?.attributes?.section_fifth_education}
         Title2={PlanPageAllData?.data?.attributes?.section_fifth_wedding}
         Title3={PlanPageAllData?.data?.attributes?.section_fifth_home}
         Title4={PlanPageAllData?.data?.attributes?.section_fifth_car}
         Title5={PlanPageAllData?.data?.attributes?.section_fifth_vacation}
         Title6={PlanPageAllData?.data?.attributes?.section_fifth_study}
         boxdescription1={PlanPageAllData?.data?.attributes?.section_fifth_education_description}
         boxdescription2={PlanPageAllData?.data?.attributes?.section_fifth_wedding_description}
         boxdescription3={PlanPageAllData?.data?.attributes?.section_fifth_home_description}
         boxdescription4={PlanPageAllData?.data?.attributes?.section_fifth_car_description}
         boxdescription5={PlanPageAllData?.data?.attributes?.section_fifth_vacation_description}
         boxdescription6={PlanPageAllData?.data?.attributes?.section_fifth_study_description}
        /> */}
        <WorldMade 
        worldhead={PlanPageAllData?.data?.attributes?.section_sixth_heading}
        boxdescription1={PlanPageAllData?.data?.attributes?.section_sixth_description}
        planhead={PlanPageAllData?.data?.attributes?.section_fifth_heading}
         Title1={PlanPageAllData?.data?.attributes?.section_fifth_education}
         Title2={PlanPageAllData?.data?.attributes?.section_fifth_wedding}
         Title3={PlanPageAllData?.data?.attributes?.section_fifth_home}
         Title4={PlanPageAllData?.data?.attributes?.section_fifth_car}
         Title5={PlanPageAllData?.data?.attributes?.section_fifth_vacation}
         Title6={PlanPageAllData?.data?.attributes?.section_fifth_study}
        />
        <Doubts 
        heading={PlanPageAllData?.data?.attributes?.section_seventh_heading}
        Watch_our_video={PlanPageAllData?.data?.attributes?.section_seventh_description}
        video={PlanPageAllData?.data?.attributes?.section_seventh_video?.data?.attributes}
        video_link={PlanPageAllData?.data?.attributes?.sec_seventh_link
}
          video_img={PlanPageAllData?.data?.attributes?.video_img?.data?.attributes?.formats?.medium?.url}
        />
        <Faq 
           plandata={PlanfaqData?.data}

        />
        <Customplan 
          planpage={true}
        />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const result = await getPlanPageApi();
  
  const result2 = await getPlanfaqapi();
  const PlanPageAllData = result.res;
  const PlanfaqData = result2.res;
  const result3 = await getHomePageApi();
  const homePageAllData = result3.res;

  return {
    props: {
      PlanPageAllData,
      PlanfaqData,
      homePageAllData
    },
  };
}
