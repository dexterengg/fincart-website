import React from 'react'
import { getPrivacyPolicy } from '../component/utils/services';
import PrivacyPolicyCom from '../component/PrivacyPolicyCom';

const PrivacyPolicy = ({ PrivacyPolicydata }) => {
    console.log(PrivacyPolicydata?.data?.attributes?.Terms, "PrivacyPolicydata")
    return (
        <PrivacyPolicyCom PrivacyPolicydata ={PrivacyPolicydata} />
    )
}

export default PrivacyPolicy

export async function getStaticProps() {
    const result = await getPrivacyPolicy();
    const PrivacyPolicydata = result.res;
    return {
        props: {
            PrivacyPolicydata,
        },
    };
}