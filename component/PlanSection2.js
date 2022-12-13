import styles from "../assets/styles/Plan.module.css";
import path1 from "../assets/img/home/RightArrow-W.png";
import Image from "next/image";

const PlanSection2 = () => {
  return (
    <div className="px-5">
      <div className={styles.maindiv}>
        <h2> CHOOSE YOUR PLAN</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>comprehensive</h3>
          <p>
            A plan that takes a holistic view of your short and long term
            financial goals. <br /> Our experienced advisors create a detailed
            plan that helps you achieve them.
          </p>
        </div>
        <div className={`${styles.banbutton} col-md-6`}>
          <div className={styles.arrowbutton}>
            <a href="">
              <Image src={path1} />
            </a>
          </div>
          <div className={styles.line}></div>
          <div className={styles.arrowtext}>
            <p>FIND OUT NOW</p>
          </div>
        </div>
      </div>
      <div className={styles.mainplanhead}>
        <div className={styles.planhead}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>NEED BASED</h2>
                <div className="col-md-4">
                  <div className={styles.plansubhead}>
                    <h3>Children Education</h3>
                    <p>
                      Bless your child with the best education opportunities
                      with financial safety. Your child will be able to fulfil
                      his/her dreams and career goals without you worrying about
                      the additional financial strain.
                    </p>
                    <h6 className={styles.subpara}>know more</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4">
                  <div className={styles.plansubhead}>
                    <h3>Retirement Planning</h3>
                    <p>
                      We believe in empowering you to enjoy the retirement phase
                      of your life that is free of financial worries or
                      constraints.
                    </p>
                    <h6 className={styles.subpara}>know more</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4">
                  <div className={styles.plansubhead}>
                    <h3>Tax Saving</h3>
                    <p>
                      We offer a suitable tax-saving plan that can help reduce
                      the burden of taxes and maximize your savings. Such
                      investments help you save taxes and still earn equity
                      linked returns..
                    </p>
                    <h6 className={styles.subpara}>know more</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection2;
