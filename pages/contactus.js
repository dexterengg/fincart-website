import React from 'react'
import Contacthome from "../component/Contactus/Contacthome";
import Head from "next/head";
import Touch from "../component/Touch";
import { getContactPageApi, getHomePageApi } from '../component/utils/services';
export default function contactus({ contactPageAllData,homePageAllData}) {
console.log(contactPageAllData, "contactPageAllData")
  return (
    <>
     <Head>
        <title>{`${contactPageAllData?.data?.attributes?.SeoZone?.meta_title}`}</title>
        <meta name="description" content={`${contactPageAllData?.data?.attributes?.SeoZone?.meta_description}`} />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico"
        />
      </Head>
        <main>
            <Contacthome 
              heading={
                contactPageAllData?.data?.attributes?.title
              }
              mobile={
                contactPageAllData?.data?.attributes?.mobile
              }
              mailId={
                contactPageAllData?.data?.attributes?.mailId
              }
              Location={
                contactPageAllData?.data?.attributes?.Location
              }
              view_map_link={
                contactPageAllData?.data?.attributes?.view_map_link
              }
            />
            <Touch 
       get_in_touch_heading={
            homePageAllData?.data?.attributes?.get_in_touch_heading
          }
          get_in_touch_description={
            homePageAllData?.data?.attributes?.get_in_touch_description
          }
          contactpage={true}
            />
        </main>
    </>
  )
}

export async function getStaticProps() {
  const result = await getContactPageApi();
  const result2 = await getHomePageApi();
  const contactPageAllData = result.res;
  const homePageAllData = result2.res;
  return {
    props: {
      contactPageAllData,
      homePageAllData,
    },
  };
}