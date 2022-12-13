import React from "react";
import styles from "../../assets/styles/Product.module.css";
import path1 from "../../assets/img/become/Group 2870.svg"
import path2 from "../../assets/img/become/Group 2876.svg"
import path3 from "../../assets/img/become/Group 2878.svg"


// import path1 from "../../assets/img/become/Group 1307.png";
// import path2 from "../../assets/img/become/Group 1309.png";
// import path3 from "../../assets/img/become/Group 1310.png";
import Image from "next/image";
const Products = ({
  heading,
  section_second_description_1,
  section_second_title_2,
  section_second_description_2,
  section_second_title_3,
  section_second_description_3,

}) => {
  const ProductData = [
    {
      icon: path1,
      title: "TAP INTO A BIGGER BASE",
      description:
        "Fincart’s differentiated offerings and marketing opens up a large client base for you",
    },
    {
      icon: path2,
      title: "OFFER A WIDER RANGE OF PRODUCTS",
      description:
        "Close more deals by offering your clients products from an exhaustive portfolio to match their needs.",
    },
    {
      icon: path3,
      title: "CULTIVATE LONG-TERM RELATIONSHIP",
      description:
        "A ‘beyond-digital’ model gives your clients the assurance of a real-life advisor, leading to long-term trust and repeat sales.",
    },
  ];
  return (
    <div className={styles.banhead}>
      <div className="container">
        <div className="row pt-4">
          <div className={`col-md-4 col-s-12 col-12 ${styles.productContent}`}>
            <Image src={path1} />
            <h3>{heading}</h3>
            <p>{section_second_description_1}</p>
          </div>
          <div className={`col-md-4 col-s-12 col-12 ${styles.productContent}`}>
            <Image src={path2} />
            <h3>{section_second_title_2}</h3>
            <p>{section_second_description_2}</p>
          </div>
          <div className={`col-md-4 col-s-12 col-12 ${styles.productContent}`}>
            <Image src={path3} />
            <h3>{section_second_title_3}</h3>
            <p>{section_second_description_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
