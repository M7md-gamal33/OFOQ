import React, { useState } from 'react'
import Style from './Leaves.module.css'
import PopUp from '../PopUP/PopUP';

export default function Leaves() {

  const [display, setDisplay] = useState(false)
  function fullDisplay(){
    setDisplay(!display);
  }

  const [showPopUp, setShowPopUp] = useState(false)
  function showPopUpInLeaves()
  {
    setShowPopUp(true);
  }

  function close()
  {
    setShowPopUp(false)
  }
  

  return <>
    
    <div className="row">
        <div className="col-md-12">
          <div className="py-1 bg-white rounded-bottom-4 d-flex justify-content-between align-items-center">

            <div className="p-4 pb-3 d-flex justify-content-center align-items-center">
             <i className="h4 mx-3 icon-of-myData fs-3 fa-solid fa-person-walking-luggage"></i>{" "}
             <h4 className="">My Leaves</h4>
            </div>

            <button onClick={() => showPopUpInLeaves()} className="btn btn-Of-Leave mx-3 text-white fw-medium rounded-3 ">Request a Leave</button>
            {showPopUp? <PopUp title="Leave Request" close={close} popLeaves="true" placeholder="Annual Leave"/>:""}
          </div>
        </div>
    </div>

    {/* <div className="row">
      <div className="col-md-12">
        <div onClick={()=>{fullDisplay()}} className="d-flex align-items-center justify-content-between rounded-4 bg-white my-4 px-4 py-3 pointer">

          <div className="d-flex justify-content-center align-items-center">
            <i className="fs-5 fa-regular fa-rectangle-list"></i>
            <h1 className="h6 px-2 m-0 fw-bold">Leaves Stats</h1>
          </div>

          <div className={`d-flex justify-content-center align-items-center ${display? "d-none":""}`}>
            <p className="p-0 m-0 little-word">Annual Balance Left</p>
            <h2 className="h5 p-0 m-0 px-3 first-number-color fs-4">15</h2>
            <p className="smallParagraph pt-1 m-0 little-word">Pending Request Included</p>
          </div>

          <div className="d-flex justify-content-center align-items-center first-number-color">
            <h3 className={`h6 m-0 pe-2 textToggle ${display? "d-none":""}`}>Show</h3>
            <h3 className={`h6 m-0 pe-1 textToggle ${display? "":"d-none"}`}>Hide</h3>
            <i className="pt-1 px-1 fa-solid fa-angle-down"></i>
          </div>


        </div>
      </div>
    </div> */}




    <div className="row mx-5 under-line3 pb-1">
      <div className="col-md-12">
        <div onClick={()=>{fullDisplay()}} className="rounded-4 bg-white my-4 px-4 py-2 pointer">

          <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex justify-content-center align-items-center py-2 ">
            <i className="fs-5 fa-regular fa-rectangle-list"></i>
            <h1 className="h6 px-2 m-0 fw-bold ">Leaves Stats</h1>
          </div>

          <div className={`d-flex justify-content-center align-items-center momo ${display? "hide":""}`}>
            <p className="p-0 m-0 little-word">Annual Balance Left</p>
            <h2 className="h5 p-0 m-0 px-3 first-number-color fs-4">15</h2>
            <p className="smallParagraph pt-1 m-0 little-word">Pending Request Included</p>
          </div>

          <div className="d-flex justify-content-center align-items-center first-number-color">
            <div className={`d-flex justify-content-center align-items-center ${display? "d-none":""}`}>
               <h3 className={`h6 m-0 pe-2 textToggle py-1 `}>Show</h3>
               <i className="pt-1 px-1 fa-solid fa-angle-down "></i>
            </div>

            <div className={`d-flex justify-content-center align-items-center ${display? "":"d-none"}`}>
               <h3 className={`h6 m-0 pe-1 textToggle py-1`}>Hide</h3>
               <i className="pt-1 px-1 fa-solid fa-angle-up "></i>
            </div>
          </div>
          </div>

          {/* Display تقسيمه ال  */}

          <div className={`row mx-0 g-5 py-4 content ${display? "show":""}`} >

            <div className="col-md-5 displayCol5 rounded-4 p-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="elementOne pt-2 py-3 rounded-start-4 text-center text-white">
                  <p className="small fw-medium py-2 ">Annual Taken</p>
                  <p className="fw-bold">19 DAYS</p>
                </div>

                <div className="me-auto ps-3 pb-3 small fw-medium opacity-75">
                  <p>Pending Leaves</p>
                </div>

                <div className="elementThree text-center pb-3 ps-3 fw-medium opacity-75">
                  <p>1 Request</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 "> 
              <div className="text-center rounded-4 displayCol5  ">
                <div className="py-4 pt-0 rounded-start-4 text-center">
                  <p className="elementTwo small fw-medium py-2 rounded-top-4 text-white">Annual Taken</p>
                  <p className="fw-medium opacity-75">15 DAYS</p>
                </div>
              </div>
            </div>

            <div className="col-md-5 displayCol5 rounded-4 p-0">
              <div className="d-flex justify-content-between align-items-center">
              
                <div className="me-auto ps-3 small fw-medium opacity-75">
                  <p>Sick Leaves</p>
                  <p className='m-0'>Monthly Leaves</p>
                </div>

                <div className="elementThree text-center ps-3 fw-medium opacity-75">
                  <p>10 Leaves</p>
                  <p className='m-0'>22 Days</p>
                </div>

                <div className="elementOne pt-2 py-3 rounded-end-4 text-center text-white">
                  <p className="small fw-medium py-2 ">Total Leaves</p>
                  <p className="fw-bold">15 Leaves</p>
                </div>
              </div>
            </div>

          </div>

         {/* display نهايه تقسيمه ال  */}
          

          

        </div>
      </div>
    </div>

    

    

    <div className="bigDivInLeaves mx-5">

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineWarning">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave <span className="text-warning h6 ps-3 fw-normal">Pending</span></h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineDanger">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave <span className="text-danger h6 ps-3 fw-normal">Cancelled</span></h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineSuccess">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave <span className="text-success h6 ps-3 fw-normal">Approved</span></h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineDanger">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave <span className="text-danger h6 ps-3 fw-normal">Cancelled</span></h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineSuccess">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave</h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-4 mt-4 myBorder ps-5 py-4 coloredLineWarning">

        <div className="d-flex ">

          <i className="h4 pe-3 fs-5 first-number-color fa-solid fa-person-walking-luggage"></i>{" "}

          <div className="">
            <h5 className="pb-3 color-in-leaves">Annual Leave</h5>
            <h6 className="pb-3">NOTES : <span className="little-word fw-normal">Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% Increase customer retention rate to 92.5% I</span></h6>
          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center pe-4">

          <div className='d-flex justify-content-center align-items-center fontSmall calendar'>
            <i className="fs-5 first-number-color fa-solid fa-calendar-days"></i>
            <span> <span className="px-3 little-word_color">From</span>Tuesday 1 March 2022</span>
            <span> <span className="px-3 little-word_color">To</span>Wednesday 2 March 2023</span>
          </div>

          <div className="hourGlass fontSmall">
            <i className="first-number-color fs-5 pe-2 fa-solid fa-hourglass-end"></i>
            <span>1 Day(s)</span>
          </div>

          <div className="paperPlane fontSmall">
           <i className="fs-5 pe-2 first-number-color fa-regular fa-paper-plane"></i>
           <span>Requested on 28 February 2023</span>
          </div>

        </div>

      </div>

      <div className="loadMore bg-white ps-5 py-4 mt-4 mb-5 rounded-4 d-flex justify-content-center align-items-center first-number-color">
            <h3 className='h6 m-0 '>Load More</h3>
            <i className="pt-1 px-3 fa-solid fa-angle-down"></i>
          </div>

    </div>


      

  </>
  
}
