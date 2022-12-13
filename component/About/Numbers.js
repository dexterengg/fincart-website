import React from "react";
import styles from "../../assets/styles/Numbers.module.css";
const Numbers = ({
  sec_fifth_heading,
  sec_fifth_description,
  clients,
  consultants,
  awards,
  reviews,
}) => {
  const NumbersData = [
    {
      title: "4000",
      description: "clients",
    },
    {
      title: "30",
      description: "consultants",
    },
    {
      title: "15",
      description: "awards",
    },
    {
      title: "334",
      description: "reviews ",
      spanName: "(4.7 reviews)",
    },
  ];
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.maindivHeading}>
          <div className="container">
            <div className={styles.maindivsubheading}>
              <h3>{sec_fifth_heading}</h3>

              <div className={styles.mainpara}>
                <p>{sec_fifth_description}</p>
              </div>
            </div>
            <div className="row">
              {/* {NumbersData.map((data, index) => {
                return (
                  <div
                    className={`col-md-3 ${styles.numbercontent} ${
                      index !== 3 && styles.borderRight
                    }`}
                    key={index}
                  >
                    <h4>{data?.title}</h4>
                    <p>
                      {data?.description}{" "}
                      <span className={styles.spanNameSize}>
                        {data?.spanName}
                      </span>
                    </p>
                  </div>
                );
              })} */}

              <div
                className={`col-md-3 ${styles.numbercontent} ${styles.borderRight}`}
              >
                <p>{clients}</p>
                <h4>clients</h4>
              </div>
              <div
                className={`col-md-3 ${styles.numbercontent} ${styles.borderRight}`}
              >
                <p>{consultants}</p>
                <h4> consultants</h4>
              </div>
              <div
                className={`col-md-3 ${styles.numbercontent} ${styles.borderRight}`}
              >
                <p>{awards}</p>
                <h4>awards</h4>
              </div>
              <div className={`col-md-3 ${styles.numbercontent}`}>
                <p>
                  {reviews}
                  <span className={styles.spanNameSize}>(4.7 reviews)</span>
                </p>
                <h4>reviews</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
