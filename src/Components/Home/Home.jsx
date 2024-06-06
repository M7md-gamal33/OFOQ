import React, { useContext, useRef, useState } from "react";
import Style from "./Home.module.css";
import { HomeContext } from "../../HomeContext/HomeContext";

export default function Home() {
  // const [isHover, setisHover] = useState(false);
  const [isHover, setisHover] = useState([false, false, false]);
  const handleMouseEnter = (index) => {
    const newHoverState = [...isHover];
    newHoverState[index] = true;
    setisHover(newHoverState);
  };
  const handleMouseLeave = (index) => {
    const newHoverState = [...isHover];
    newHoverState[index] = false;
    setisHover(newHoverState);
  };

   let {changeShowDialog} = useContext(HomeContext)

  return (
    <>
      {/* <h3 className="pt-4 pb-2">Welcome, Mohamed Gamal</h3>
      <hr />

      <div>
        <i className="fa-solid fa-bolt-lightning home-icon"></i>
        <span className="ps-2 h6">Quick Actions For You</span>
      </div>

      <div className="row mt-4">
        <div className="col-3">
          <div className="item-one p-3 rounded-3" onMouseEnter={()=> setisHover(true)}
            onMouseLeave={()=> setisHover(false)}>
            <i class="fa-solid fa-umbrella-beach item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Request Annual Leave</span>          
            <i className={`fa-solid fa-chevron-right item-one-icon ms-4 ${isHover ? "arrow-visible" : "arrow-hidden"}`}></i>
          </div>
        </div>

        <div className="col-3">
          <div className="item-one p-3 rounded-3" onMouseEnter={()=> setisHover(true)} 
            onMouseLeave={()=> setisHover(false)}>
            <i class="fa-solid fa-door-open item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Request Casual Leave</span>
            <i className={`fa-solid fa-chevron-right item-one-icon ms-4 ${isHover ? "arrow-visible" : "arrow-hidden"}`}></i>
          </div>
        </div>

        <div className="col-3">
          <div className="item-one p-3 rounded-3" onMouseEnter={()=> setisHover(true)} 
            onMouseLeave={()=> setisHover(false)}>
            <i class="fa-solid fa-receipt item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Employee Request</span>
            <i className={`fa-solid fa-chevron-right item-one-icon ms-4 ${isHover ? "arrow-visible" : "arrow-hidden"}`}></i>
          </div>
        </div>
      </div> */}

      <h3 className="pt-4 pb-2">Welcome, Mohamed Gamal</h3>
      <hr />
      <div>
        <i className="fa-solid fa-bolt-lightning home-icon"></i>
        <span className="ps-2 h6">Quick Actions For You</span>
      </div>
      {/* the first row----------  */}
      <div className="row mt-4">
        <div onClick={()=>changeShowDialog()} className="col-3">
          <div
            className="item-one p-3 rounded-3"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <i className="fa-solid fa-umbrella-beach item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Request Annual Leave</span>
            <i
              className={`fa-solid fa-chevron-right item-one-icon ms-4 ${
                isHover[0] ? "arrow-visible" : "arrow-hidden"
              }`}
            ></i>
          </div>
        </div>

        <div className="col-3">
          <div
            className="item-one p-3 rounded-3"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <i className="fa-solid fa-door-open item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Request Casual Leave</span>
            <i
              className={`fa-solid fa-chevron-right item-one-icon ms-4 ${
                isHover[1] ? "arrow-visible" : "arrow-hidden"
              }`}
            ></i>
          </div>
        </div>

        <div className="col-3">
          <div
            className="item-one p-3 rounded-3"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <i className="fa-solid fa-receipt item-one-icon ps-2"></i>
            <span className="ps-4 h6 me-2">Employee Request</span>
            <i
              className={`fa-solid fa-chevron-right item-one-icon ms-5 ${
                isHover[2] ? "arrow-visible" : "arrow-hidden"
              }`}
            ></i>
          </div>
        </div>
      </div>
      {/*!Second Row--------------- */}
      <div className="row">
        <div className="col-md-6">
          <div className="first-element d-flex mt-4 rounded-3 justify-content-evenly">
            <div className="text-center line pt-3 ">
              <h2 className="h6 pb-2">Total Annual Taken</h2>
              <span className="h4 px-2 first-number-color">9</span>
              <span className="first-number-word"> DAYS</span>
            </div>

            <div className="text-center line pt-3 ">
              <h2 className="h6 pb-2">Annual Balance Left</h2>
              <span className="h4 px-2 first-number-color">19</span>
              <span className="first-number-word"> DAYS</span>
              <h6 className="first-number-word pt-3 pb-2">
                Till The End OF The Year
              </h6>
            </div>

            <div className="text-center pt-3 ">
              <h2 className="h6 pb-2">Pending Leaves</h2>
              <span className="h4 px-2 first-number-color">19</span>
              <span className="first-number-word"> DAYS</span>
              <h6 className="first-number-word pt-3">
                Annual Waiting For Approval
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="first-element d-flex mt-4 rounded-3 justify-content-evenly">
            <div className="text-center line pt-3 ">
              <h2 className="h6 pb-2">Total Leaves</h2>
              <span className="h4 px-2 second-number-color">4</span>
              <span className="first-number-word"> LEAVES</span>
              <h6 className="first-number-word pt-3 pb-2">
                Till The Current Month
              </h6>
            </div>

            <div className="text-center line pt-3 ">
              <h2 className="h6 pb-2">Sick Leaves</h2>
              <span className="h4 px-2 second-number-color">4</span>
              <span className="first-number-word"> DAYS</span>
              <h6 className="first-number-word pt-3 pb-2">
                Till The Current Month
              </h6>
            </div>

            <div className="text-center pt-3 ">
              <h2 className="h6 pb-2">Monthly Rate</h2>
              <span className="h4 px-2 second-number-color">2</span>
              <span className="first-number-word"> DAYS</span>
              <h6 className="first-number-word pt-3">
                Vacation/Months Till Now
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
