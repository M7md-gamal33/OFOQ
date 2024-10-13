import React from 'react'
import Style from './InformationPunch.module.css'

export default function InformationPunch({className, text, attend, colorCustomize}) {

  return <>
    
    <section className={`rounded-4 bg-white py-3 ${Style.mt4} `}>

      <div className="row d-flex align-items-center g-0 px-4">
        
        <div className="col-md-3">
          <div className={`${Style.font}`}>
            <h1 className={`h6 fw-bold ${colorCustomize}`}><i className="fa-solid fa-arrow-right-to-bracket pe-1"></i> {attend}</h1>
            <span>Mobile Punch</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className={`text-center ${Style.font}`}>
            <h2 className="h6 m-auto">Wednesday 2 March 2023</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className={`text-center ${Style.font}`}>
            <h3 className="h6 m-auto">10:12:50 Am</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className={`d-flex justify-content-center align-items-center ${Style.font}`}>
            <h4 className={`h6 py-2 text-center rounded-5 px-3 m-auto ${Style.roundedLocation} ${className}`}>{text}</h4>
            <i className={`fa-solid fa-angle-right ${Style.arrow} ${Style.greenColor}`}></i>
          </div>
        </div>
      
      </div>

    </section>











  </>
  
}
