// import styles from "../styles/BlogCard.module.css";
import styles from "../../assets/styles/commonstyle/BlogCard.module.css";
import Link from "next/link";
// import path7 from "../../assets/img/become/Icon ionic-md-time.png";
// import path8 from "../../assets/img/become/Icon feather-eye.png";
import path7 from "../../assets/img/become/eye.png";
import path8 from "../../assets/img/become/time.png";
import Image from "next/image";
import { IMG_BASE_URL } from "../utils/services";
import { useRouter } from "next/router";


const BlogCard = ({ data }) => { 
  console.log(data, "relatedPost")
  const Route = useRouter();

  const handleBlogClick =(link) => {
    Route.push(`/blogs/${link}`)
  }
  return (
    <div onClick={() => handleBlogClick(data?.attributes?.slug)}>
      <a>
        <div className={styles.blogcard}>
           
          <div className={styles.imgholder}>
            <img src={`${IMG_BASE_URL}${data?.attributes?.Banner_img?.data[0]?.attributes?.formats?.medium?.url}`} className="img-fluid" />
          </div>
          <div className={styles.bottomSection}>
          <div className={styles.taghead}>
                <h3>{data?.attributes?.title}</h3>
            </div>
            {/* <h4 className={styles.title}>
             {data?.attributes?.Brief_overview}
            </h4> */}
            {/* <p className={styles.content}>
             {data?.attributes?.Brief_overview?.slice(0, 150)}...
            </p> */}
            {/* <div className={styles.timeMain}>
              <div className={styles.timeClasses}>
                <Image src={path7} alt="img" />
                <span>{data?.date}</span>
              </div>
              <div className={styles.viewsClasses}>
                <Image src={path8} alt="img" />
                <span>{data?.readTime}</span>
              </div>
            </div> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
