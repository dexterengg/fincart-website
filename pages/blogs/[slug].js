import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import styles from "../../assets/styles/Bloginner.module.css";
import Bloginnerhead from '../../component/Blog/Bloginnerhead';
import Touch from '../../component/Touch';
import { getHomeblogapi, getInvestPageApi, getsingleblogapi } from '../../component/utils/services';

const PageNo = ({ BlogData, homePageBlogAlldata,investPageAllData }) => {
  console.log(BlogData, "BlogData")

  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    let _result = homePageBlogAlldata?.data?.filter((data) => {
      return data?.attributes?.tag?.data?.attributes?.Name === BlogData?.data[0]?.attributes?.tag?.data?.attributes?.Name && data?.attributes?.slug !== BlogData?.data[0]?.attributes?.slug
    })
    setRelatedPost(_result)
  }, [BlogData, homePageBlogAlldata]);

  return (
    <>
      <Bloginnerhead relatedPost ={relatedPost} BlogData={BlogData?.data[0]} />
      <Touch 
              get_in_touch_heading={
            investPageAllData?.data?.attributes?.get_in_touch_heading
          }
          get_in_touch_description={
            investPageAllData?.data?.attributes?.get_in_touch_description
          }
          investPage={true}
      />
    </>
  )
}

export default PageNo;


export async function getStaticPaths() {
  const result = await getsingleblogapi();
  const paths = result?.res?.data?.map((post) => ({
    params: {
      slug: post.attributes?.slug
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const result = await getsingleblogapi(context?.params?.slug);
  const result3 = await getInvestPageApi();
  const investPageAllData = result3.res;
  const result2 = await getHomeblogapi();
  const homePageBlogAlldata = result2.res;
  const BlogData = result.res;
  return {
    props: {
      BlogData,
      homePageBlogAlldata,
      investPageAllData,
    },
  };
}