import React from "react";
import Abouthome from "../component/About/Abouthome";
import Mission from "../component/About/Mission";
import Ban2 from "../component/Ban2";
import Network from "../component/About/Network";
import Numbers from "../component/About/Numbers";
import Touch from "../component/Touch";
import Ceo from "../component/About/Ceo";
import Team from "../component/About/Team";
import Head from "next/head";
import {
  getAboutPageApi,
  getFinancialplannerapi,
  getSupportaccountapi,
  getTechnologyteamapi,
} from "../component/utils/services";

export default function Invest({ aboutPageAllData, technologyTeamData,FinancialplannerData,SupportaccountData }) {
  console.log(aboutPageAllData, "aboutPageAllData");

  return (
    <>
     <Head>
        <title>{`${aboutPageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${aboutPageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <Abouthome
          section_first_heading={
            aboutPageAllData?.data?.attributes?.section_first_heading
          }
          section_first_description={
            aboutPageAllData?.data?.attributes?.section_first_description
          }
        />
        <Mission
          sec_second_misson={
            aboutPageAllData?.data?.attributes?.sec_second_misson
          }
          sec_second_misson_description={
            aboutPageAllData?.data?.attributes?.sec_second_misson_description
          }
          sec_second_vision={
            aboutPageAllData?.data?.attributes?.sec_second_vision
          }
          sec_second_vision_description={
            aboutPageAllData?.data?.attributes?.sec_second_vision_description
          }
        />
        <Ban2
          isabout={true}
          heading={aboutPageAllData?.data?.attributes?.sec_third_heading}
          description={
            aboutPageAllData?.data?.attributes?.sec_third_description
          }
          plan={aboutPageAllData?.data?.attributes?.sec_third_plan}
          invest={aboutPageAllData?.data?.attributes?.sec_third_invest}
          prosper={aboutPageAllData?.data?.attributes?.sec_third_prosper}
          subtitle={aboutPageAllData?.data?.attributes?.sec_third_plan_title}
          investSubtitle={
            aboutPageAllData?.data?.attributes?.sec_third_invest_title
          }
          prosperSubtitle={
            aboutPageAllData?.data?.attributes?.sec_third_prosper_title
          }
          planDescription={
            aboutPageAllData?.data?.attributes?.sec_third_plan_description
          }
          investDescription={
            aboutPageAllData?.data?.attributes?.sec_third_invest_description
          }
          prosperDescription={
            aboutPageAllData?.data?.attributes?.sec_third_prosper_description
          }
        />
        <Ceo
          sec_fourth_message={
            aboutPageAllData?.data?.attributes?.sec_fourth_message
          }
          sec_fourth_title={
            aboutPageAllData?.data?.attributes?.sec_fourth_title
          }
          sec_fourth_description={
            aboutPageAllData?.data?.attributes?.sec_fourth_description
          }
          sec_fourth_profile={
            aboutPageAllData?.data?.attributes?.sec_fourth_profile?.data?.attributes?.formats?.small?.url

          }
        />
        <Numbers
          sec_fifth_heading={
            aboutPageAllData?.data?.attributes?.sec_fifth_heading
          }
          sec_fifth_description={
            aboutPageAllData?.data?.attributes?.sec_fifth_description
          }
          clients={aboutPageAllData?.data?.attributes?.clients}
          consultants={aboutPageAllData?.data?.attributes?.consultants}
          awards={aboutPageAllData?.data?.attributes?.awards}
          reviews={aboutPageAllData?.data?.attributes?.reviews}
        />
        <Team
          sec_sixth_description={
            aboutPageAllData?.data?.attributes?.sec_sixth_description
          }
          teamdata={technologyTeamData?.data}
          financialdata={FinancialplannerData?.data}
          supportdata={SupportaccountData?.data}
        />
        <Network
          sec_seventh_heading={
            aboutPageAllData?.data?.attributes?.sec_seventh_heading
          }
          sec_seventh_description={
            aboutPageAllData?.data?.attributes?.sec_seventh_description
          }
          networkdata={aboutPageAllData?.data?.attributes?.sec_seventh_logoes?.data}
        />
        <Touch
          get_in_touch_heading={
            aboutPageAllData?.data?.attributes?.sec_eighth_heading
          }
          get_in_touch_description={
            aboutPageAllData?.data?.attributes?.sec_eighth_description
          }
          aboutPage={true}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const result = await getAboutPageApi();
  const result2 = await getTechnologyteamapi();
  const result3 = await getFinancialplannerapi();
  const result4 = await getSupportaccountapi();
  const technologyTeamData = result2.res;
  const FinancialplannerData = result3.res;
  const SupportaccountData = result4.res;
  const aboutPageAllData = result.res;
  return {
    props: {
      aboutPageAllData,
      technologyTeamData,
      FinancialplannerData,
      SupportaccountData
    },
  };
}
