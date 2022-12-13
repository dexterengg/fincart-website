import React from "react";
import Image from "next/image";
import ProtectBanner from "../component/Protect/ProtectBanner";
// import Faq from "../component/BecomeAgent/Faq";
import Touch from "../component/Touch";
import Googleowned from "../component/Protect/Googleowned";
import WhyProtect from "../component/Protect/WhyProtect";
import ProtectionCover from "../component/Protect/ProtectionCover";
import QualifiedTeam from "../component/Invest/Testimonials";
import Head from "next/head";
import { getInvestPageApi, getProtectfaqapi, getProtectPageApi } from "../component/utils/services";


  export default function protect({ investPageAllData,ProtectPageAllData,ProtectfaqData }) {
    console.log(ProtectPageAllData ,"ProtectPageAllData")
  return (
    <>
        <Head>
        <title>{`${ProtectPageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${ProtectPageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <ProtectBanner 
              protectPage = {true}
          heading={ProtectPageAllData?.data?.attributes?.section_first_title}
          description={ProtectPageAllData?.data?.attributes?.section_first_description}
        />
        <WhyProtect 
        heading={ProtectPageAllData?.data?.attributes?.section_second_heading}
        description={ProtectPageAllData?.data?.attributes?.section_second_description}
        title1={ProtectPageAllData?.data?.attributes?.section_second_title_1}
        title2={ProtectPageAllData?.data?.attributes?.section_second_title_2}
        title3={ProtectPageAllData?.data?.attributes?.section_second_title_3}
        title4={ProtectPageAllData?.data?.attributes?.section_second_title_4}
        description1={ProtectPageAllData?.data?.attributes?.section_second_description_1}
        description2={ProtectPageAllData?.data?.attributes?.section_second_description_2}
        description3={ProtectPageAllData?.data?.attributes?.section_second_description_3}
        description4={ProtectPageAllData?.data?.attributes?.section_second_description_4}

        />
        <ProtectionCover
          heading={ProtectPageAllData?.data?.attributes?.section_third_heading}
          title1={ProtectPageAllData?.data?.attributes?.section_third_health}
          title2={ProtectPageAllData?.data?.attributes?.section_third_critical}
          title3={ProtectPageAllData?.data?.attributes?.section_third_term}
          section_fourth_heading={ProtectPageAllData?.data?.attributes?.section_fourth_heading}
          description1={ProtectPageAllData?.data?.attributes?.section_third_health_description}
          description2={ProtectPageAllData?.data?.attributes?.section_third_critical_description}
          description3={ProtectPageAllData?.data?.attributes?.section_third_term_description}
          section_fourth_description={ProtectPageAllData?.data?.attributes?.section_fourth_description}
        />
        <QualifiedTeam 
        section_ninth_heading={ProtectPageAllData?.data?.attributes?.section_fourth_title}
        section_ninth_description={ProtectPageAllData?.data?.attributes?.section_fourth_description}
        video_img={ProtectPageAllData?.data?.attributes?.Testimonials_videoimg?.data?.attributes?.formats?.medium?.url}
          video_link={
            ProtectPageAllData?.data?.attributes?.Testimonials_videoLink
          }

        />
        <Googleowned
        InvestData={ProtectfaqData?.data}
        
         />
        <Touch 
           get_in_touch_heading={ProtectPageAllData?.data?.attributes?.get_in_touch_heading}
          get_in_touch_description={ProtectPageAllData?.data?.attributes?.get_in_touch_description}
          protectPage = {true}
        />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const result3 = await getInvestPageApi();
  const result = await getProtectPageApi();
  const result2 = await getProtectfaqapi();
  const ProtectPageAllData = result.res;
  const ProtectfaqData = result2.res;
  const investPageAllData = result3.res;
  return {
    props: {
      ProtectPageAllData,
      ProtectfaqData,
      investPageAllData
    },
  };
}
