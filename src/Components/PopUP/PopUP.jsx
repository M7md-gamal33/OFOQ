import React, { useContext, useEffect, useRef, useState } from 'react'
import Style from './PopUP.module.css'
import AnnualImg from '../../Images/Screenshot 2024-06-03 065327.png'

import format from 'date-fns/format';
import { addDays } from 'date-fns';
import { differenceInDays  } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import RequestSuccessfully from '../RequestSuccessfully/RequestSuccessfully';
import Select from 'react-select'
import { Dropdown } from 'bootstrap';
import LeaveRequestHours from '../LeaveRequestHours/LeaveRequestHours';
import { HomeContext } from '../../HomeContext/HomeContext';
import toast from 'react-hot-toast';

export default function PopUp({title , close , placeholder , tmm , popLeaves }) {

  const {setSelectedDate, setSelectedDate2, selectedDate, selectedDate2, opendateTime, opendateTime2 } = useContext(HomeContext);


  function handleBoxClick(event) {
    event.stopPropagation(); // منع إغلاق النافذة عند النقر داخل الـ box
  }


  // const refOne = useRef(null);
  // function handleDocumentClick(event) {
  //   if (refOne.current && !refOne.current.contains(event.target)) {
  //     setOpenCalendar(false);
  //   }
  // }

  // document.addEventListener('mousedown', handleDocumentClick);

  //! من ضمن ال dateRange------------ 
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date() , 1),
      key: 'selection'
    }
  ]);

  const formatDate = (date) => {
    return format(date, 'EEEE dd MMMM yyyy');
  };
  
  const [openCalendar, setOpenCalendar] = useState(false)

  function showCalendar(){
    setOpenCalendar(!openCalendar);
  }

  const [isDateSelected, setIsDateSelected] = useState(false);
  const handleDateChange = (item) => {
    setRange([item.selection]);
    setIsDateSelected(true); // تغيير الحالة بعد اختيار التواريخ
  };


   //! من ضمن ال dateRange------------ 

   const handleOutsideClick = (e) => {
    // Check if the click is outside the calendar and input
    if (
      openCalendar &&
      !e.target.closest('.custom-date-range') &&
      !e.target.closest('.input-group-annual')
    ) {
      setOpenCalendar(false);
    }
  };

  // Attach click listener to handle clicks outside input and calendar
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openCalendar]);

  //العـــــــوده

   // dateRange دالة لحساب الفرق في الأيام ل 
   const calculateDays = () => {
    if (!isDateSelected) return 0; // في حال لم يتم اختيار تواريخ، عرض 0
    const start = range[0].startDate;
    const end = range[0].endDate;
    return differenceInDays(end, start) + 1; // +1 لتضمين كل من تاريخ البداية والنهاية
  };


  // ReactQuill تبع ال .........................
  const [value, setValue] = useState('');
    

  const module = {
  toolbar: [
      ['bold', 'italic' ,{ list: "ordered" }, { list: "bullet" } , "image" , "clean"]
  ]
  }
  // ReactQuill تبع ال ........................


  const [showPopUp, setShowPopUp] = useState(true);
  const [screenSuccessfully, setScreenSuccessfully] = useState(false);
    
    function changeShowDialog(){
        setScreenSuccessfully(true);
        setShowPopUp(false);
        setSelectedDate("");
        setSelectedDate2("");
    }
    

    //! employeeRequest الي في ال dropdown الي هو ال select تبع ال .....................
    const options = [
      { value: 'military', label: 'Military Service Certificate' },
      { value: 'education', label: 'Education Qualification Certificate' },
      { value: 'experience', label: 'Experience Certificate' },
      { value: 'promotion', label: 'Promotion Request' },
      { value: 'attendance', label: 'Attendance Report' },
      { value: 'work', label: 'Work Schedule Adjustment' },
      { value: 'hr', label: 'Hr Letter' },
      { value: 'health', label: 'Health Insurance Details' },
      { value: 'leave', label: 'Leave Balance Statement' },
      { value: 'remote', label: 'Remote Work Request' },
    ]

    const optionsLeaves = [
      { value: 'days', label: 'Anuual Leave' },
      { value: 'hours', label: 'Anuual Hours' },
    ]
    const [valueDropdown, setValueDropdown] = useState(null)
    const [replace, setReplace] = useState(false)

    function handleSelectChange(x)
    {
      setValueDropdown(x)
      if(x?.value === "hours")
      {
        setReplace(true);
      }
      else
      {
        setReplace(false);
      }

    }
    
    //! employeeRequest الي في ال dropdown الي هو ال select تبع ال .....................


    //TODO .......... Leaves الي في PopUp اكواد ال ...............
   
  return <>
    {showPopUp? <>
      <section onClick={ close} className="light-box">
        <div onClick={ handleBoxClick } className={`box-data rounded-1 shadowBox ${tmm ? Style.box_data_employeeRequest :""}`}>

          <div className="under-line100 d-flex justify-content-between p-3">
            <h6>{title}</h6>
            <i onClick={close} className="pointer first-number-color fa-solid fa-xmark"></i>
          </div>

          <div className="row g-0">
            <div className={` ${tmm ? 'col-md-12' : 'col-md-8'}`}>
              <div className={`pt-3  ${tmm? 'px-4':'px-5'}`}>

                <form>
                  <div className="d-flex justify-content-between align-items-center first-popup-word ">
                    <p className={`${tmm || popLeaves ? "text-dark fw-medium mb-0 pb-2" : "mb-0 pb-1" }`}>{tmm? "Request Type" : "Leave Type"}</p>
                    {!tmm? <p className='mb-0 pb-1'>You have a Balance : <span className="first-number-color fw-medium">14 Days</span></p> : "" }
                  </div>
                  
                  {(tmm || popLeaves) ?
                   <>
                    <div>
                      <Select
                        options={popLeaves? optionsLeaves : options}
                        defaultValue={(popLeaves? optionsLeaves.find((x) => x.value === "days") : valueDropdown) }
                        placeholder = "Select Request Type"
                        onChange={handleSelectChange}
                        isSearchable
                        noOptionsMessage={() => "Data Not Found"}
                        className={Style.select_style}
                        classNamePrefix="select-style"
                        maxMenuHeight={200}
                        isClearable
                      />
                    </div>
                   </>
                  :<>
                    <div  className='input-group-annual d-flex justify-content-end align-items-center'>
                      <input className="w-100 rounded-4 p-3" type="" disabled  placeholder={placeholder} ></input>
                      <i className=" pe-4 fa-solid fa-angle-down"></i> 
                    </div>
                  </>
                  }
                  

                  {!tmm  ?
                  <>
                    {replace? <>
                                
                                <LeaveRequestHours/>
                            </>:

                            <>
                            <div className="d-flex justify-content-between align-items-center first-popup-word pt-3 ">
                              <p className='text-dark fw-medium mb-0 pb-1'>Date \ Period</p>
                              <p className='mb-0 pb-1'>Period : <span className="first-number-color fw-medium">{calculateDays()} Days</span></p>
                            </div>


                            <div onClick={() => { showCalendar() }} className="input-group-annual d-flex justify-content-end align-items-center">
                              <input readOnly value = 
                                              { isDateSelected ? `${formatDate(range[0].startDate)} - ${formatDate(range[0].endDate)}`
                                                : '' 
                                              } 
                                     className="w-100 rounded-4 p-3" placeholder="Select Date / Period"></input>
                              <i className="colorOfCal pe-3 fa-solid fa-calendar-days"></i>
                            </div>
                            </>
                      }
                    
                    

                  </> 
                  :""}

    
                  <div >
                  {openCalendar? <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={2}
                    direction='horizontal'
                    minDate={new Date()}
                    className='w-100 custom-date-range'
                  />:
                  !(opendateTime || opendateTime2)?
                    <>    
                      <div className="first-popup-word pt-3 ">
                      <p className='text-dark fw-medium mb-0 pb-2'>{tmm? "Document Description":"Comment"}</p>
                      </div>
      
                      <ReactQuill placeholder={tmm? "Type Your Document Description":"Type Your Comment Here"} modules={module} className= {` custom-quill-toolbar w-100 borderOfQuill ${tmm? Style.custom_quill_editor_employeeRequest: "custom-quill-editor"}`} theme="snow" value={value} onChange={setValue} />
                    </>:""
                 
                  }
                  </div>

                  {tmm? 
                    <>
                    
                      <div className="first-popup-word pt-3 ">
                          <p className='text-dark fw-medium mb-0 pb-2'>Comment</p>
                      </div>
                      <textarea placeholder='Type your Comment Here' className={`w-100 rounded-4 p-3 ${Style.textArea}`}>

                      </textarea>
                  
                    </>
                  :""}
                  
                </form>

              </div>
            </div>

                {tmm ? "" : 
                <>
                    <div className="col-md-4">
                      <div>
                        <img className="w-100 pt-4" src={AnnualImg} alt="" />
                      </div>
                    </div>
                </>
                }
            

          </div>
          
          {!(openCalendar || opendateTime || opendateTime2)?
                  <div className={`${replace? "mb-3":""} uper-line1 btns-of-annualRequest d-flex justify-content-end align-items-center ${tmm? "mt-4": ""}`}>
                    <button onClick={ close} className="btn1 mt-2 me-3 first-number-color">Cancel</button>
                    <button onClick={() => {
                      if(!isDateSelected && !replace && !tmm )
                      {
                        toast.error("Please fill out the date range field first!")
                        // changeShowDialog(); 
                      }
                      else if(!valueDropdown && !isDateSelected){
                        toast.error("Please select request type!");
                      }
                      else if(popLeaves && replace && !selectedDate && !selectedDate2){
                        toast.error("Please select number of hours!");
                      }
                      else{
                        changeShowDialog();
                      }
                      }}
                      className="btn2 mt-2 me-4 text-white" type='submit' >Send</button>
                  </div>: ""}

        </div>
      </section>
    </>:""}
      
    
      

      
    
 
    
    {screenSuccessfully? <RequestSuccessfully setShowPopUp={setShowPopUp} close={close} title="Leave Request" tmm={tmm}/>:""}

  

  </>

}
