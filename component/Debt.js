import React from 'react'
import Howbtn from "./Howbtn";
import styles from '../assets/styles/commonstyle/MutualfundData.module.css'
import path1 from "../assets/img/home/RightArrow-W.png";
import Image from "next/image";
import Link from 'next/link';
import GetInTouchModal from './GetInTouchModal';
import { useState } from "react";
const Debt = ({ critical }) => {
  const [showGetInTouchModal, setShowGetInTouchModel] = useState(false);
  const [otpModel, setotpModel] = useState(false);

  const Showlogin = () => {
    setShowGetInTouchModel(true);
  };
  const closeGetInTouchModal = () => {
    setShowGetInTouchModel(false);
    setotpModel(false)
  };
  return (
    <section className='pt-4'>
      <p className='text-center textForMobileOnly'>{critical}</p>
      <div className='cursor mutualfund_buton pt-5'>
        {/* <Howbtn title = "invest now" bgcolor="#0055A5" arrowcolorbg ="#0055A5" arrowfill = "#fff" titlecolor= "#0055A5"/> */}
    
          <a className={`btn ${styles.mutualbtnhover}`} onClick={() => Showlogin()}>Find Out Now </a>

          {/* <div className={styles.mainhow}>
              <div className={styles.arrowbutton}>
                <a href="" className={styles.arwimg}>
                  <Image src={path1} />
                </a>
              </div>
              <div className={styles.line}></div>
              <div className={styles.arrowtext}>
                <p>Find Out Now</p>
              </div>
          
            </div> */}
   
      </div>
      <GetInTouchModal
        showGetInTouchModal={showGetInTouchModal}
        closeGetInTouchModal={closeGetInTouchModal}
        setShowGetInTouchModel={setShowGetInTouchModel}
        otpModel ={otpModel}
        setotpModel ={setotpModel}
      />
    </section>
  )
}

export default Debt