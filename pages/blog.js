import React, { useEffect, useState } from "react";
import Featured from "../component/Blog/Featured";
import Touch from "../component/Touch";
import Recent from "../component/Blog/Recent";
import { getAllblogapi,getInvestPageApi } from "../component/utils/services";
export default function Invest({ investPageAllData,BlogData}) {
  console.log(BlogData, "BlogData123")
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    let _result = BlogData?.data?.filter((data) => {
      return data?.attributes?.featured
    })
    console.log(_result, "_result")
    setFeaturedData(_result)
  }, [BlogData])

  return (
    <>
      <main>
        <Featured featuredData ={featuredData} />
        <Recent 
        BlogData={BlogData?.data}

        />
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
};
export async function getStaticProps() {
  const result = await getInvestPageApi();
  const result2 = await getAllblogapi()
  const BlogData = result2.res
  const investPageAllData = result.res;
  return {
    props: {
      investPageAllData,
      BlogData,
    },
  };
}
