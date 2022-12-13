import React, { useState } from 'react'
import Debt from './Debt'
import Hybrid from './Hybrid'
import MutualfundData from './MutualfundData'

const Alternate = ({sec_eighth_pensionNPS,sec_eighth_pensionILPS}) => {
    const [mutualFund,setMutualFund]=useState(true)
    const [hybrid,setHybrid]=useState(false)
    const [debt,setDebt]=useState(false)

    const handleMutualFund = ()=>{
      setMutualFund(true)
      setHybrid(false)
      setDebt(false)
    }
    const handlehybrid = () =>{
      setMutualFund(false)
      setHybrid(true)
      setDebt(false)
    }
    const handleDebt = () =>{
      setMutualFund(false)
      setHybrid(false)
      setDebt(true)
    }

  return (
    <section className='pt-4'>
      <div className="investus_tab_list ms-4 me-5" >
          <div className={`${mutualFund && 'investactive'} alternate cursor pt-4 pb-2 text-center textForMobileOnly `} onClick={()=>handleMutualFund()}>
            <h5>New Pension Schemes</h5>
          </div>
          <div className={`${hybrid && 'investactive'} alternate  cursor pt-4 pb-2 text-center textForMobileOnly`} onClick={()=>handlehybrid()}>
            <h5>Insurance-linked Pension Schemes</h5>
          </div>
          {/* <div className={`${debt && 'investactive'}  alternate  cursor pt-4 pb-2 text-center textForMobileOnly`} onClick={()=> handleDebt()} >
            <h5>Alternative Investment Funds</h5>
          </div>                 */}
        </div>
        <div className='ps-4 pe-5 pb-4'>
        {
          mutualFund && <MutualfundData
             description={sec_eighth_pensionNPS}

           />
        }
        {
          hybrid && <Hybrid
          section={sec_eighth_pensionILPS}
           />
        }
        {
          debt && <Debt />
        }

        </div>

      

    </section>
  )
}

export default Alternate ;
