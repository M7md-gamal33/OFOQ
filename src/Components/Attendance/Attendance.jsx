import React, { useEffect, useState } from 'react'
import Style from './Attendance.module.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Select from 'react-select'

export default function Attendance() {

  const [selectOn, setSelectOn] = useState(false);
  const [valueDropdown, setValueDropdown] = useState(null)

  function attendanceManagement(){
    setSelectOn(!selectOn);
  }

  const options = [
    { value: 'myFaces', label: 'My Faces List' , icon: <i className="fa-solid fa-fingerprint ps-1"></i>},
    { value: 'empFaces', label: 'Employees Faces List' , icon: <i className="fa-solid fa-users pointer "></i>},
    { value: 'locationsManage', label: 'Locations Management' , icon: <i className="fas fa-map-marker-alt px-1"></i>},
  ]

  const handleOutsideClick = (e) => {
    // Check if the click is outside the calendar and input
    if (
      selectOn  &&
      !e.target.closest(`.select-style__control`) && !e.target.closest(`.btAtten`)
    ) {
      setSelectOn(false);
    }
    
  };

  // Attach click listener to handle clicks outside input and calendar
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectOn]);

  return <>

    <div className={`row ${Style.font}`}>
        <div className="col-md-12">
          <div className={`py-1 bg-white rounded-bottom-4 d-flex justify-content-between align-items-center ${Style.wrap}`} >

            <div className={`p-4 pb-3 d-flex justify-content-center align-items-center ${Style.resize}`}>
              <i className={`h4 mx-3 fs-3 fa-solid fa-stopwatch ${Style.colorOfIconAttend}`}></i>{" "}
              <h4 className={`${Style.font}`} >Attendance</h4>
            </div>

            <div>
              <button onClick={attendanceManagement} className="btAtten btn btn-Of-Leave mx-3 text-white fw-medium rounded-3 px-3"><i className="fa-regular fa-clock fa-flip-horizontal fa-lg ps-1"></i> Attendance Management <i className="ps-2 fa-solid fa-angle-down"></i></button>
              {selectOn?
                <div className={`${Style.font} d-flex justify-content-center z-3`}>
                <Select
                  options={options}
                  defaultValue= {valueDropdown}
                  // onChange={handleSelectChange}
                  className={Style.select_style}
                  classNamePrefix="select-style"
                  menuIsOpen ={true}
                  getOptionLabel={(option) => (
                    <div className="d-flex align-items-center">
                      {option.icon}
                      <span className="ms-3">{option.label}</span>
                    </div>
                  )}
                />
                </div>
                :""
              }
            </div>
          </div>
          
        </div>
    </div>
    
    <div className = "rounded-4 bg-white my-4 py-2 px-0">
      <div className="row">


            {/* عادي Icon لو عايز اضغط يمين وشمال الكلمه وال  NavLink هنا ال  */}
            {/* علشان انا حاطط الناف لينك مع التقسيمه */}
            {/* <div className="col-md-4">
              <NavLink to="" end className={`d-flex justify-content-center align-items-center py-2 active-link ${Style.font} ${Style.colorOfMyself}`}>  
                <i className="fa-regular fa-user fa-lg pointer"></i>
                <h1 className="h6 px-2 m-0 pointer">My Self</h1>
              </NavLink>
            </div>

            <div className="col-md-4">
              <NavLink to="myemployees" end className={`d-flex justify-content-center align-items-center py-2 active-link ${Style.font} ${Style.colorOfMyself}`}>  
                <i className="fa-regular fa-user fa-lg pointer"></i>
                <h1 className="h6 px-2 m-0 pointer">My Employees</h1>
              </NavLink>
            </div> */}


            <div className="col-md-4">
              <div className={`d-flex justify-content-center align-items-center py-2`}>
                <NavLink end to="" className={`active-linkk d-flex align-items-center px-4 ${Style.font} ${Style.colorOfMyself}`}>
                  <i className="fa-solid fa-users fa-lg pointer"></i>
                  <h1 className="h6 px-2 m-0 pointer">My Self</h1>
                </NavLink>
              </div>
            </div>

           
            <div className="col-md-4">
              <div className={`d-flex justify-content-center align-items-center py-2 `}>
                <NavLink to="myemployees" className={`active-linkk d-flex align-items-center px-0 ${Style.font} ${Style.colorOfMyself}`}>
                  <i className="fa-solid fa-users fa-lg pointer"></i>
                  <h1 className="h6 px-2 m-0 pointer">My Employees</h1>
                </NavLink>
              </div>
            </div>


            <div className="col-md-4">
              <div className={`d-flex justify-content-center align-items-center py-2 `}>
                <NavLink to="allemployees" className={`active-linkk d-flex align-items-center px-0 ${Style.font} ${Style.colorOfMyself}`}>
                  <i className="fa-solid fa-users fa-lg pointer"></i>
                  <h1 className="h6 px-2 m-0 pointer">All Employees</h1>
                </NavLink>
              </div>
            </div>

      </div>
    </div>


    

    <div>
      <Outlet></Outlet>
    </div>

  

  </>
  
}



        {/* <NavLink to="" className="col-md-4">
          <div className={`d-flex justify-content-center align-items-center py-2 ${Style.font } ${Style.colorOfMyself}`}>
            <i className="fa-regular fa-user fa-lg pointer"></i>
            <h1 className="h6 px-2 m-0 pointer">My Self</h1>
          </div>
        </NavLink>

        <NavLink to="myemployees" className="col-md-4">
          <div className={`d-flex justify-content-center align-items-center py-2 ${Style.font } ${Style.colorOfMyself}`}>
            <i className="fa-solid fa-users fa-lg pointer"></i>
            <h1 className="h6 px-2 m-0 pointer">My Employees</h1>
          </div>
        </NavLink> */}