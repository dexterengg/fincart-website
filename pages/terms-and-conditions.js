import React from 'react'
import { getTermsandCondition } from '../component/utils/services';
import TermsAndConditionCom from '../component/TermsAndConditionCom';

const TermsAndCondition = ({ termsAndConditionData }) => {
    console.log(termsAndConditionData?.data?.attributes?.Terms, "termsAndConditionData")
    return (
        <TermsAndConditionCom termsAndConditionData ={termsAndConditionData} />
    )
}

export default TermsAndCondition

export async function getStaticProps() {
    const result = await getTermsandCondition();
    const termsAndConditionData = result.res;
    return {
        props: {
            termsAndConditionData,
        },
    };
}