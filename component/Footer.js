import React from 'react'
import classnames from 'classnames'
import styles from "../assets/styles/Footer.module.css"
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'
import Image from 'next/image'
import icon1 from '../assets/img/footer/playstore.png';
import icon2 from '../assets/img/footer/store.png'
// import meetingIcon from "../assets/img/meeting.svg"
// import { openPopupWidget } from 'react-calendly'
import linkedInIcon from "../assets/img/linkedinwhite.svg"
import facebookIcon from "../assets/img/facebookwhite.svg"
import instagramIcon from "../assets/img/instagramwhite.svg"
import twitterIcon from "../assets/img/twitterwhite.svg"
import youtubeIcon from "../assets/img/youtubewhite.svg"


const Footer = () => {
  // const openCalendly = () => {
  //   openPopupWidget({ url: "https://calendly.com/haroon2-designbox" });
  // }
  return (
    <>
      <footer className={classnames({
        [styles.footer]: true,
        'wrapper': true
      })}
      >
        <Container fluid >
          <Row>
            <Col lg="3" className="mr-lg-auto">
              <div className='mb-5' >
                <Link href="/"><Image src="/Fincartwhite.png" width={154} height={54} /></Link>
              </div>
              <h3 className={styles.title} >grow your <br /> wealth with us</h3>
              <p className={styles.footernote}>Download Fincart App for Free on</p>
              <div className={`cursor ${styles.mainapp}`}
              >
                <div className={styles.appiconright}>
                  <Link href={"https://apps.apple.com/in/app/fincart-investment-app/id1540925421"} target="_blank">
                    <Image src={icon2} width={58} height={58} />
                  </Link>
                </div>
                <div className={styles.appiconleft}>
                  <Link href={"https://play.google.com/store/apps/details?id=com.nws.fincart"} target="_blank">
                    <Image className={styles.linkstyle} src={icon1} width={58} height={58} />
                  </Link>
                </div>
              </div>
              <div className="mt-4">
              <p className={styles.footernote}>Connect with us</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="paddingRight2">
                    <a className="d-flex align-items-center justify-content-center" href={"https://www.linkedin.com/company/fincartfinancialplanners/"} target="_blank">
                      <Image src={linkedInIcon} alt="linkedIn" />
                    </a>
                  </div>
                  <div className="px-3">
                    <a className="d-flex align-items-center justify-content-center" href={"https://twitter.com/fincart_advisor"} target="_blank">
                      <Image src={twitterIcon} alt="twitterIcon" />
                    </a>
                  </div>
                  <div className="px-3">
                    <a className="d-flex align-items-center justify-content-center" href={"https://www.youtube.com/c/FINCARTFinancialPlanners"} target="_blank">
                      <Image src={youtubeIcon} alt="youtubeIcon" />
                    </a>
                  </div>
                  <div className="px-3">
                    <a className="d-flex align-items-center justify-content-center" href={"https://www.instagram.com/fincart_financial_planner/"} target="_blank">
                      <Image src={instagramIcon} alt="instagramIcon" />
                    </a>
                  </div>
                  <div className="px-3 d-flex align-items-center justify-content-center">
                    <a className="d-flex align-items-center justify-content-center" href={"https://www.facebook.com/fincartinvestmentplanners"} target="_blank">
                      <Image src={facebookIcon} alt="facebookIcon" />
                    </a>
                  </div>
                </div>
              </div>

            </Col>
            <Col lg="2" md="6" className="mr-lg-auto">
              <ul className={styles.policylist} >
                <li className="PrivacyPolicyFooter mb-3"><Link href="/" scroll> Home</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/about" scroll> About</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/blog" scroll> Blogs</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/contactus" scroll> Contact</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/terms-and-conditions" scroll> Terms and Conditions</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/privacy-policy" scroll>Privacy Policy</Link></li>
              </ul>

            </Col>

            <Col lg="" md="6" className="mr-lg-auto ">
              <p className={styles.policytitle}><Link href="/plan" scroll>Plan</Link></p>
              <ul className={styles.policy} >
                <li className="PrivacyPolicyFooter mb-3"><Link href="/plan/[slug]" as={`/plan/financial-planning`} scroll> Financial Planning</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/plan/[slug]" as={`/plan/investment-planning`} scroll> Investment Planning</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/plan/[slug]" as={`/plan/goal-planning`} scroll> Goal Planning</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/plan/[slug]" as={`/plan/tax-Saving-&-planning`} scroll > Tax Saving & Planning</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/plan/[slug]" as={`/plan/legacy-&-Inheritance-Planning`} scroll > Legacy & Inheritance Planning</Link></li>
              </ul>
            </Col>
            <Col lg="" md="6" className="mr-lg-auto ">
              <p className={styles.policytitle}><Link href="/invest" scroll>Invest</Link></p>
              <ul className={styles.policy} >
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/mutualfunds" scroll> Mutual Funds</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/sip" scroll> SIP</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/incomereturns" scroll> Income Returns</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/gold" scroll> Gold</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/unitLinkedInsurancePlan" scroll> Unit Linked Insurance Plan</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/guaranteedIncomePlan" scroll> Guaranteed Income Plan</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/invest/alternateInvestment" scroll> Alternate Investment </Link></li>
              </ul>
            </Col>
            <Col lg="3" md="6" className="mr-lg-auto ">
              <p className={styles.policytitle}><Link href="/protect" scroll>Protect</Link></p>
              <ul className={styles.policy} >
                <li className="PrivacyPolicyFooter mb-3"><Link href="/protect/healthinsurance" scroll>Health Insurance</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/protect/terminsurance" scroll> Term Insurance</Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/protect/criticalinsurance" scroll> Critical Insurance </Link></li>
                <li className="PrivacyPolicyFooter mb-3"><Link href="/protect/assetinsurance" scroll> Asset Insurance </Link></li>
                {/* <li  className="PrivacyPolicyFooter mb-3"><Link href="#"> Legacy Planning</Link></li>                    */}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* <div className={styles.Calendly} onClick={openCalendly}><Image src={meetingIcon} className={styles.calicon} alt="icon" loading="lazy" /></div> */}
    </>
  )
}

export default Footer