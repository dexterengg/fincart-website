import React from 'react'
import styles from "../assets/styles/Terms.module.css"
import ReactMarkdown from 'react-markdown';


const TermsAndConditionCom = ({termsAndConditionData}) => {
    return (
        <div className={styles.termsAndCondionMain}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className={styles.termsHeading}>
                            <h2>Terms & Conditions</h2>
                        </div>
                        {/* eslint-disable-next-line */}
                        <ReactMarkdown
                            className={styles.termsAndCondition}
                            children={termsAndConditionData?.data?.attributes?.Terms}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditionCom