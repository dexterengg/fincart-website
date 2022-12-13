import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../assets/styles/Customizedplanning.module.css";
const Customizedplanning = ({
  sec4_h1,
  sec4_desc,
  list1,
  list2,
  list3,
  list4,
}) => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.planSectionDiv}>
        <div className="container">
          <div className="row">
            <div className={styles.subheading}>
              <h3>{sec4_h1}</h3>
              <p>{sec4_desc}</p>
            </div>
            {
              list1 &&
              <div className={styles.plandatacontent}>
                <div className={styles.dottedLineDiv}>
                  <div className={styles.dottedline}></div>
                </div>
                <div className={styles.plandatacontentDesc}>
                  <h4>{list1}</h4>
                </div>
              </div>
            }
            {
              list2 &&
              <div className={styles.plandatacontent}>
                <div className={styles.dottedLineDiv}>
                  <div className={styles.dottedline}></div>
                </div>
                <div className={styles.plandatacontentDesc}>
                  <h4>{list2}</h4>
                </div>
              </div>
            }
            {
              list3 &&
              <div className={styles.plandatacontent}>
                <div className={styles.dottedLineDiv}>
                  <div className={styles.dottedline}></div>
                </div>
                <div className={styles.plandatacontentDesc}>
                  <h4>{list3}</h4>
                </div>
              </div>
            }
            {
              list4 &&
              <div className={styles.plandatacontent}>
                <div className={styles.dottedLineDiv}>
                  <div className={styles.dottedline}></div>
                </div>
                <div className={styles.plandatacontentDesc}>
                  <h4>{list4}</h4>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizedplanning;
