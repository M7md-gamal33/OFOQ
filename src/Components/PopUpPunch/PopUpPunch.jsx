import React, { useState } from 'react'
import Style from './PopUpPunch.module.css'
import faceIdPic from '../../Images/Phone-14-Plus-Face-ID-Issue-1024x1024.png'

export default function PopUpPunch({close}) {

  function handleBoxClick(event) {
    event.stopPropagation(); // منع إغلاق النافذة عند النقر داخل الـ box
  }

  return <>
    
    <section onClick={close} className="light-box">
    <div onClick={handleBoxClick} className= {`shadowBox ${Style.box_data_successfully} ${Style.under_line}`}>

        <div className="px-3 pt-3 w-100 h-100">
          <div>
            <h1 className= {`h6 pb-2 ${Style.font}`}> Add Punch In</h1>
          </div>

          <div className= {`mt-3 ${Style.selfie}`}>

            <div className={`${Style.faceimg} ${Style.under_line2}`}>
              <img className="w-100" src={faceIdPic} alt="" />
            </div>

            <div className={`d-flex justify-content-center text-center pt-3 ${Style.sizeSpan}`}>
              <span>Please Enable the Camera Access to our system to take a photo.</span>
            </div>

            <div className={`${Style.btnmargin}`}>
              <button className= {`btn text-white ${Style.buttonCapture}`}><i className="fa-solid fa-camera me-2"></i> Capture</button>
            </div>

          </div>


        </div>

    </div>

  </section>

  </>
  
}
