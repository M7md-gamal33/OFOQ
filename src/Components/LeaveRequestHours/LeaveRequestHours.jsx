import React, { useEffect, useRef, useState } from 'react'
import Style from './LeaveRequestHours.module.css'
import moment from 'moment/moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default function LeaveRequestHours() {
    const [hoursDiff, setHoursDiff] = useState(0);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const [opendateTime, setOpenDateTime] = useState(false);
    const [opendateTime2, setOpenDateTime2] = useState(false);

    const handleDateChange = (date) => {
        if (date.isSameOrAfter(moment(), 'minute')) {
            setSelectedDate(date);
            setInputValue(date.format('dddd DD MMMM YYYY  hh:mm A'));
          }
    }; 
    
    const handleDateChange2 = (date) => {
        if (selectedDate && date.isAfter(selectedDate.clone().add(1, 'hour'), 'minute'))
        {
            setSelectedDate2(date);
            setInputValue2(moment(date).format('dddd DD MMMM YYYY  hh:mm A'));
        }
        else if (selectedDate)
        {
          const updatedDate = selectedDate.clone().add(1, 'hour');
          setSelectedDate2(updatedDate);
          setInputValue2(updatedDate.format('dddd DD MMMM YYYY  hh:mm A'));
        }
        else
        {
                              //ال toast
                              //الاولاني الاول يهبل datetime املا ال 

        }
    }; 





  function showCalendar(){
    setOpenDateTime(!opendateTime);
    setOpenDateTime2(false)
  }
  function showCalendar2(){
    setOpenDateTime2(!opendateTime2);
    setOpenDateTime(false)
  }

      const isValidDate = (current) => {
        return current.isSameOrAfter(moment(), "day");
    };
    const isValidDate2 = (current) => {
        return current.isSame(selectedDate, 'day');
    };


    useEffect(() => {
      if (selectedDate && selectedDate2) {
          const duration = moment.duration(selectedDate2.diff(selectedDate));
          setHoursDiff(duration.asHours());
          // console.log(hoursDiff);    
      }
    }, [selectedDate, selectedDate2]);


    useEffect(() => {
      if (selectedDate) {
        setSelectedDate2(selectedDate.clone().add(1, 'hour'));
        setInputValue2(selectedDate.clone().add(1, 'hour').format('dddd DD MMMM YYYY  hh:mm A'));
      }
    }, [selectedDate]);


    
  const handleOutsideClick = (e) => {
    if (
      opendateTime &&
      !e.target.closest('.custom-date-range') &&
      !e.target.closest('.input-group-annual')
    ) {
      setOpenDateTime(false);
    }
    if (
        opendateTime2 &&
        !e.target.closest('.custom-date-range') &&
        !e.target.closest('.input-group-annual')
      ) {
        setOpenDateTime2(false);
      }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [opendateTime , opendateTime2]);

  return <>
    
    <div className="first-popup-word pt-3 ">
       <p className='text-dark fw-medium mb-0 pb-1'>Date - Time From</p>
    </div>

    <div onClick={()=>{showCalendar()}} className='input-group-annual d-flex justify-content-end align-items-center'>
      <input readOnly  value={inputValue} className="w-100 rounded-4 p-3"  placeholder="Annual Leave" /*{moment().format('dddd DD MMMM YYYY  hh:mm A')}*/ ></input>
      <i className="colorOfCal pe-3 fa-solid fa-calendar-days"></i> 
    </div>
                  
                        

    {!opendateTime? <>
                    
      <div className="d-flex justify-content-between align-items-center first-popup-word pt-3 ">
        <p className='text-dark fw-medium mb-0 pb-1'>Date \ Period</p>
        <p className='mb-0 pb-1'>Period : <span className="first-number-color fw-medium"> {hoursDiff} Hours</span></p>
      </div>

        <div onClick={()=>{showCalendar2()}} className='input-group-annual d-flex justify-content-end align-items-center'>
          <input readOnly  value={inputValue2} className="w-100 rounded-4 p-3"  placeholder="Annual Leave" ></input>
          <i className="colorOfCal pe-3 fa-solid fa-calendar-days"></i> 
        </div>
                    
    </>: ""}

                    

  {opendateTime? <> 
    <div>
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        isValidDate={isValidDate}
        input={false}
        initialValue={moment()}
        timeFormat="hh:mm A"
        className='custom-date-range'
      />
    </div>
  </>:""}


  {opendateTime2? <> 
    <div>
      <Datetime
        value={selectedDate2}
        onChange={handleDateChange2}
        isValidDate={isValidDate2}
        input={false}
        initialValue={selectedDate || moment()}
        timeFormat="HH:00 A"
        className='custom-date-range'      
      />
    </div>
  </>:""}

</>
  
}
