import React from 'react'
import Style from './Attendance.module.css'

export default function Attendance() {
  return <>

    <div className="row ">
        <div className="col-md-12">
          <div className={`py-1 bg-white rounded-bottom-4 d-flex justify-content-between align-items-center ${Style.wrap}`} >

            <div className={`p-4 pb-3 d-flex justify-content-center align-items-center ${Style.resize}`}>
              <i className={`h4 mx-3 fs-3 fa-solid fa-stopwatch ${Style.colorOfIconAttend}`}></i>{" "}
              <h4 className={`${Style.font}`} >Attendance</h4>
            </div>

            <button className="btn btn-Of-Leave mx-3 text-white fw-medium rounded-3 px-3"><i className="fa-regular fa-clock fa-flip-horizontal fa-lg ps-1"></i> Attendance Management <i className="ps-2 fa-solid fa-angle-down"></i></button>
          </div>
        </div>
    </div>
    
    <div className = "rounded-4 bg-white my-4 py-2 px-0 ">
      <div className="row">

        <div className="col-md-4">
          <div className={`d-flex justify-content-center align-items-center py-2 ${Style.font } ${Style.colorOfMyself}`}>
            <i className="fa-regular fa-user fa-lg pointer"></i>
            <h1 className="h6 px-2 m-0 pointer">My Self</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`d-flex justify-content-center align-items-center py-2 ${Style.font } ${Style.colorOfMyself}`}>
            <i className="fa-solid fa-users fa-lg pointer"></i>
            <h1 className="h6 px-2 m-0 pointer">My Employees</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`d-flex justify-content-center align-items-center py-2 ${Style.font } ${Style.colorOfMyself}`}>
            <i className="fa-solid fa-building-user fa-lg pointer"></i>
            <h1 className="h6 px-2 m-0 pointer">All Employees</h1>
          </div>
        </div>

      </div>
    </div>

  

  </>
  
}
