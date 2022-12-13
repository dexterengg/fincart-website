import styles from "../assets/styles/Plan.module.css";
import path1 from "../assets/img/home/RightArrow-W.png";
import Image from "next/image";
import Link from "next/link";
import Howbtn from "./Howbtn";
import path2 from "../assets/img/about/cross.svg";
import { useState } from "react";
import "animate.css";
import {
  getInTouchFormApi,
  getinTouchprotectPageformApi,
  getTouchInvestformApi,
  getinTouchbecomeagentpageformApi,
} from "./utils/services";
import GetInTouchModal from "./GetInTouchModal";
import { useRouter } from 'next/router'
const Plansection = ({
  heading,
  comprehensive,
  comprehensiveDescription,
  needBased,
  ChildrenEducation,
  ChildrenEducationDescription,
  RetirementPlanning,
  RetirementPlanningDescription,
  TaxSaving,
  TaxSavingDescription,
  VacationPlanning,
  VacationPlanningDescription,
  BuyingHome,
  BuyingHomeDescription,
  BuyingCar,
  BuyingCarDescription,
  homePage,
  investPage,
  protectPage,
  becomeagentpage,
}) => {
 
  const [showOnbanner, setshowOnbanner] = useState(false);
  const [aboutbanner, setaboutbanner] = useState(true);
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);

  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  };
  const CloseNav = () => {
    setshowOnbanner(false);
    setaboutbanner(true);
  };
  const router = useRouter()
  const redirectTo = () => {
    router.push('/plan/#getinworld');
  }

  return (
    <>
   
      <div className={styles.planSectionMain}>
        <div className={styles.planSectionDiv}>
          <div className={styles.paddingPlanMain}>
            {/* <div className="container"> */}
            <div className="row">
              <div className="col-md-12">
                <div className={styles.compheranshhead}>
                  <h2>{heading}</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.compleft}>
                  <h3 className={styles.innerHeading}>{comprehensive}</h3>
                  <p className={styles.innerPara}>{comprehensiveDescription}</p>
                </div>
              </div>
              <div className="col-md-6 d-flex  align-items-center">
              <a className={`btn ${styles.plananimation}`}  onClick={() => Showlogin()}>Find Out Now </a>

                {/* <Howbtn title = "FIND OUT NOW" titlecolor="#0055A5" bgcolor="#0055A5" arrowcolorbg ="#0055A5" arrowfill = "#fff"/> */}
                
            {/* <div className={` cursor ${styles.mainhow}`} onClick={() => Showlogin()}>
                  <div className={styles.arrowbutton}>
                    <div  className={styles.arwimg}>
                      <Image src={path1} />
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.arrowtext}>
                    <p >Find Out Now</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className={styles.planmainhead}>
            <h3 className={styles.innerHeading}>{needBased}</h3>
            <div className="row">
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{ChildrenEducation}</h3>
                  <p>{ChildrenEducationDescription}</p>
                  <a className={styles.educationtext}  onClick={redirectTo} >know more</a>
          
                </div>
              </div>
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{RetirementPlanning}</h3>
                  <p>{RetirementPlanningDescription}</p>
                  <a className={styles.educationtext} onClick={redirectTo}  >know more</a>
                
                </div>
              </div>
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{TaxSaving}</h3>
                  <p>{TaxSavingDescription}</p>
                  <a className={styles.educationtext}  onClick={redirectTo}  >know more</a>
                
                </div>
              </div>
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{VacationPlanning}</h3>
                  <p>{VacationPlanningDescription}</p>
                  <a className={styles.educationtext}  onClick={redirectTo} >know more</a>
              
                </div>
              </div>
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{BuyingHome}</h3>
                  <p>{BuyingHomeDescription}</p>
                  <a className={styles.educationtext}  onClick={redirectTo} >know more</a>
                
                </div>
              </div>
              <div className="col-lg-4 mt-4 col-md-6">
                <div className={styles.planContent}>
                  <h3>{BuyingCar}</h3>
                  <p>{BuyingCarDescription}</p>
                  <a className={styles.educationtext}  onClick={redirectTo} >know more</a>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        setShowGetInTouchModel={setShowGetInTouchModel}
        homePage
        planpage
        investPage
        protectPage
        becomeagentpage
        otpModel ={otpModel}
        setotpModel ={setotpModel}
      />
    </>
  );
};

export default Plansection;
