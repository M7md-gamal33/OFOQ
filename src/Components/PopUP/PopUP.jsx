import React, { useContext } from 'react'
import Style from './PopUP.module.css'
import { HomeContext } from '../../HomeContext/HomeContext'
import AnnualImg from '../../Images/Screenshot 2024-06-03 065327.png'

export default function PopUp() {

  let {ShowDialog , setShowDialog} = useContext(HomeContext)

  function close(){
    setShowDialog(false)
  }

  function handleBoxClick(event) {
    event.stopPropagation(); // منع إغلاق النافذة عند النقر داخل الـ box
  }
  

  return <>

  {ShowDialog? 

    <section onClick={ close} className="light-box">
        <div onClick={ handleBoxClick} className="box-data rounded-1 shadowBox">

          <div className="under-line100 d-flex justify-content-between p-3">
            <h6>Annual Leave Request</h6>
            <i onClick={close} className="pointer first-number-color fa-solid fa-xmark"></i>
          </div>

          <div className="row g-2">
            <div className="col-md-8">
              <div className="pt-3 px-5">

                <form>
                  <div className="d-flex justify-content-between align-items-center first-popup-word ">
                    <p className='mb-0 pb-1'>Leave Type</p>
                    <p className='mb-0 pb-1'>You have a Balance : <span className="first-number-color fw-medium">14 Days</span></p>
                  </div>
                  
                  <div className='input-group-annual d-flex justify-content-end align-items-center'>
                    <input className="w-100 rounded-4 p-3" type="" disabled placeholder="Annual Leave" ></input>
                    <i className=" pe-4 fa-solid fa-angle-down"></i> 
                  </div>


                  <div className="d-flex justify-content-between align-items-center first-popup-word pt-3 ">
                    <p className='mb-0 pb-1'>Date \ Period</p>
                    <p className='mb-0 pb-1'>Period : <span className="first-number-color fw-medium">14 Days</span></p>
                  </div>

                  <div className="">
                    
                  </div>
                </form>

              </div>
            </div>

            <div className="col-md-4">
              <div>
                <img className="w-100 pt-4" src={AnnualImg} alt="" />
              </div>
            </div>

          </div>
          

        </div>
    </section>

  :""}  

  </>
  
}
