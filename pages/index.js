import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../component/HomeBanner";
import Ban2 from "../component/Ban2";
import Plansection from "../component/Plansection";
import Comprehensivesection from "../component/Comprehensivesection";
import Filter from "../component/Filter";
import Progress from "../component/Progress";
import Choosesection from "../component/Choosesection";
import Achievements from "../component/Achievements";
import Testmonial from "../component/Testmonial";
import Financialplanning from "../component/Financialplanning";
import Touch from "../component/Touch";
import { getHomeblogapi, getHomePageApi } from "../component/utils/services";
import Doubtshome from "../component/Doubtshome";

export default function Home({ homePageAllData, homePageBlogdata }) {
  console.log(homePageAllData, "homePageAllData");
  return (
    <div>
      <Head>
        <title>{`${homePageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${homePageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
      <main>
        <HomeBanner
          homePage={true}
          heading={homePageAllData?.data?.attributes?.heading}
        />
        <div className="popImgVisivilityHidden"></div>
        <Ban2
          heading={homePageAllData?.data?.attributes?.ourPhilosophy}
          description={homePageAllData?.data?.attributes?.description}
          plan={homePageAllData?.data?.attributes?.plan}
          subtitle={homePageAllData?.data?.attributes?.subtitle}
          planDescription={homePageAllData?.data?.attributes?.planDescription}
          invest={homePageAllData?.data?.attributes?.invest}
          investSubtitle={homePageAllData?.data?.attributes?.investSubtitle}
          investDescription={
            homePageAllData?.data?.attributes?.investDescription
          }
          prosper={homePageAllData?.data?.attributes?.prosper}
          prosperSubtitle={homePageAllData?.data?.attributes?.prosperSubtitle}
          prosperDescription={
            homePageAllData?.data?.attributes?.prosperDescription
          }
        />

        <Plansection
          homePage={true}
          heading={homePageAllData?.data?.attributes?.chooseYourPlan}
          comprehensive={homePageAllData?.data?.attributes?.comprehensive}
          comprehensiveDescription={
            homePageAllData?.data?.attributes?.comprehensiveDescription
          }
          needBased={homePageAllData?.data?.attributes?.needBased}
          ChildrenEducation={
            homePageAllData?.data?.attributes?.ChildrenEducation
          }
          ChildrenEducationDescription={
            homePageAllData?.data?.attributes?.ChildrenEducationDescription
          }
          RetirementPlanning={
            homePageAllData?.data?.attributes?.RetirementPlanning
          }
          RetirementPlanningDescription={
            homePageAllData?.data?.attributes?.RetirementPlanningDescription
          }
          TaxSaving={homePageAllData?.data?.attributes?.TaxSaving}
          TaxSavingDescription={
            homePageAllData?.data?.attributes?.TaxSavingDescription
          }
          VacationPlanning={homePageAllData?.data?.attributes?.VacationPlanning}
          VacationPlanningDescription={
            homePageAllData?.data?.attributes?.VacationPlanningDescription
          }
          BuyingHome={homePageAllData?.data?.attributes?.BuyingHome}
          BuyingHomeDescription={
            homePageAllData?.data?.attributes?.BuyingHomeDescription
          }
          BuyingCar={homePageAllData?.data?.attributes?.BuyingCar}
          BuyingCarDescription={
            homePageAllData?.data?.attributes?.BuyingCarDescription
          }
        />
        <Comprehensivesection
          heading={homePageAllData?.data?.attributes?.solution}
          Outsource={homePageAllData?.data?.attributes?.Outsource}
          OutsourceReady={homePageAllData?.data?.attributes?.OutsourceReady}
          readyDescription={homePageAllData?.data?.attributes?.readyDescription}
          OutsourceFamily={homePageAllData?.data?.attributes?.OutsourceFamily}
          familyDescription={
            homePageAllData?.data?.attributes?.familyDescription
          }
          OutsourceGoal={homePageAllData?.data?.attributes?.OutsourceGoal}
          goalDescription={homePageAllData?.data?.attributes?.goalDescription}
          OutsourceRetirement={
            homePageAllData?.data?.attributes?.OutsourceRetirement
          }
          retirementDescription={
            homePageAllData?.data?.attributes?.retirementDescription
          }
          OutsourceEstate={homePageAllData?.data?.attributes?.OutsourceEstate}
          estateDescription={
            homePageAllData?.data?.attributes?.estateDescription
          }
          OutsourceTax={homePageAllData?.data?.attributes?.OutsourceTax}
          taxDescription={homePageAllData?.data?.attributes?.taxDescription}
          chat_link={homePageAllData?.data?.attributes?.chat_link}
          Phone_No={homePageAllData?.data?.attributes?.Phone_No}
        />
        <Filter
          heading={homePageAllData?.data?.attributes?.filter}
          products={homePageAllData?.data?.attributes?.products}
          productsDescription={
            homePageAllData?.data?.attributes?.productsDescription
          }
          product_1={homePageAllData?.data?.attributes?.product_1}
          product_2={homePageAllData?.data?.attributes?.product_2}
          product_3={homePageAllData?.data?.attributes?.product_3}
          product_4={homePageAllData?.data?.attributes?.product_4}
          product_5={homePageAllData?.data?.attributes?.product_5}
          product_6={homePageAllData?.data?.attributes?.product_6}
          product_7={homePageAllData?.data?.attributes?.product_7}
        />
        <Choosesection
          heading={homePageAllData?.data?.attributes?.you_get_to_choose}
          DO_ON={homePageAllData?.data?.attributes?.DO_ON}
          DO_ON_Description={
            homePageAllData?.data?.attributes?.DO_ON_Description
          }
          SEEK={homePageAllData?.data?.attributes?.SEEK}
          Seek_Description={homePageAllData?.data?.attributes?.Seek_Description}
        />
        <Doubtshome
          heading={homePageAllData?.data?.attributes?.doubts}
          Watch_our_video={homePageAllData?.data?.attributes?.Watch_our_video}
          video_link={homePageAllData?.data?.attributes?.video_link}
          video_img={
            homePageAllData?.data?.attributes?.video_img?.data?.attributes
              ?.formats?.medium?.url
          }
        />
        <Progress
          heading={homePageAllData?.data?.attributes?.track}
          trackDescription={homePageAllData?.data?.attributes?.trackDescription}
          track_image={
            homePageAllData?.data?.attributes?.track_image?.data[0]?.attributes
              ?.formats?.medium?.url
          }
        />

        <Achievements
          heading={homePageAllData?.data?.attributes?.achievements}
          clients={homePageAllData?.data?.attributes?.clients}
          consultants={homePageAllData?.data?.attributes?.consultants}
          awards={homePageAllData?.data?.attributes?.awards}
        />
        <Testmonial
          heading={homePageAllData?.data?.attributes?.testimonials}
          testimonials_name_1={
            homePageAllData?.data?.attributes?.testimonials_name_1
          }
          testimonials_subtitle_1={
            homePageAllData?.data?.attributes?.testimonials_subtitle_1
          }
          testimonials_description_1={
            homePageAllData?.data?.attributes?.testimonials_description_1
          }
          testimonials_name_2={
            homePageAllData?.data?.attributes?.testimonials_name_2
          }
          testimonials_subtitle_2={
            homePageAllData?.data?.attributes?.testimonials_subtitle_2
          }
          testimonials_description_2={
            homePageAllData?.data?.attributes?.testimonials_description_2
          }
          testimonials_name_3={
            homePageAllData?.data?.attributes?.testimonials_name_3
          }
          testimonials_subtitle_3={
            homePageAllData?.data?.attributes?.testimonials_subtitle_3
          }
          testimonials_description_3={
            homePageAllData?.data?.attributes?.testimonials_description_3
          }
        />
        <Financialplanning
          heading={homePageAllData?.data?.attributes?.about_financial}
          blogAllData={homePageBlogdata?.data}
          about_financial_title_1={homePageBlogdata?.data[0]?.attributes?.title}
          about_financial_description_1={
            homePageBlogdata?.data[0]?.attributes?.Brief_overview
          }
          about_financial_title_2={homePageBlogdata?.data[1]?.attributes?.title}
          about_financial_description_2={
            homePageBlogdata?.data[1]?.attributes?.Brief_overview
          }
          about_financial_title_3={homePageBlogdata?.data[2]?.attributes?.title}
          about_financial_description_3={
            homePageBlogdata?.data[2]?.attributes?.Brief_overview
          }
          about_financial_title_4={homePageBlogdata?.data[3]?.attributes?.title}
          about_financial_description_4={
            homePageBlogdata?.data[3]?.attributes?.Brief_overview
          }
          about_financial_image_1={
            homePageBlogdata?.data[0]?.attributes?.Banner_img?.data[0]
              ?.attributes?.url
          }
          about_financial_image_2={
            homePageBlogdata?.data[1]?.attributes?.Banner_img?.data[0]
              ?.attributes?.url
          }
          about_financial_image_3={
            homePageBlogdata?.data[2]?.attributes?.Banner_img?.data[0]
              ?.attributes?.url
          }
          about_financial_image_4={
            homePageBlogdata?.data[3]?.attributes?.Banner_img?.data[0]
              ?.attributes?.url
          }
        />
        <Touch
          get_in_touch_heading={
            homePageAllData?.data?.attributes?.get_in_touch_heading
          }
          get_in_touch_description={
            homePageAllData?.data?.attributes?.get_in_touch_description
          }
          homePage={true}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await getHomePageApi();
  const homePageAllData = result.res;
  const result2 = await getHomeblogapi();
  const homePageBlogdata = result2.res;
  return {
    props: {
      homePageAllData,
      homePageBlogdata,
    },
  };
}
