import React, { useContext, useEffect, useState } from 'react'
import Style from './RequestSuccessfully.module.css'
import AnnualLeave from '../../Images/Capture.PNG'

export default function RequestSuccessfully({setShowPopUp , close ,title}) {
  // let {close , ShowDialog} = useContext(HomeContext);

  function handleBoxClick(event) {
    event.stopPropagation(); // منع إغلاق النافذة عند النقر داخل الـ box
  }

  const [showSuccess, setShowSuccess] = useState(true);
  function exit() {
    setShowSuccess(false);
    setShowPopUp(true);
    close()
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // تفعيل الرسوم المتحركة عند تحميل المكون
  }, [])
  return <>
  {showSuccess?<>
    <section onClick={ exit} className="light-box">
      <div onClick={ handleBoxClick } className={`rounded-1 shadowBox ${Style.content} ${Style.box_data_successfully} ${isVisible? Style.show: Style.hide}`}>

        <div className="under-line100 d-flex justify-content-between px-3 pt-4 pb-0">
          <h6>{title}</h6>
          <i onClick={exit} className="pointer fs-5 first-number-color fa-solid fa-xmark"></i>
        </div>

        <div className="">
          <img className="w-100" src={AnnualLeave} alt="AnnualLeave" />
        </div>

        <div className={`text-center ${Style.under_line_successfully}`}>
          <h5>Your Request has been sent Successfully</h5>
        </div>

        <div className="d-flex justify-content-end me-3">
          <button onClick={exit} className={`mt-5 px-5 fw-medium text-white ${Style.btn_finish}`}>Finish</button>
        </div>
    
      </div>
    </section>
  </> :""}
    
  

    
  </>
  
}
