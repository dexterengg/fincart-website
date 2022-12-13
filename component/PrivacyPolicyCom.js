import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from "../assets/styles/Terms.module.css"


const PrivacyPolicyCom = ({PrivacyPolicydata}) => {
    return (
        <div className={styles.termsAndCondionMain}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className={styles.termsHeading}>
                            <h2>Privacy Policy</h2>
                        </div>
                        {/* eslint-disable-next-line */}
                        <ReactMarkdown
                            className={styles.termsAndCondition}
                            children={PrivacyPolicydata?.data?.attributes?.PrivacyPolicy}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyCom