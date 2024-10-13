import React, { useEffect, useState } from 'react'
import Style from './Myself.module.css'
import moment from 'moment/moment';
import Select from 'react-select'
import PopUp from '../PopUP/PopUP';
import PopUpPunch from '../PopUpPunch/PopUpPunch';
import InformationPunch from '../InformationPunch/InformationPunch';

export default function Myself() {

  const formattedDate = moment().format('DD MMM YYYY');
  const formattedDate2 = moment().add(3 , "days").format('DD MMM YYYY');
  const [selectOn, setSelectOn] = useState(false);

  function addPunch(){
    setSelectOn(!selectOn);
  }

  const options = [
    { value: 'punchIn', label: 'Punch In' , icon: <i className="fa-solid fa-arrow-right-to-bracket"></i>},
    { value: 'punchOut', label: 'Punch Out' , icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>},
  ]

  const [valueDropdown, setValueDropdown] = useState(null)
  const [punchPopUp, setPunchPopUp] = useState(null)
  function handleSelectChange(x)
  {
    setValueDropdown(x)
    if(x?.value === "punchIn")
    {
      setPunchPopUp("in");
    }
    else
    {
      setPunchPopUp("out");
    }

  }


  const handleOutsideClick = (e) => {
    // Check if the click is outside the calendar and input
    if (
      selectOn  &&
      !e.target.closest(`.select-style__control`) && !e.target.closest(`.btnPun`)
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


  function close(){
    setPunchPopUp(null);
  }

return <>
    
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className={`d-flex justify-content-center align-items-center py-1 ${Style.greenIcon} ${Style.font}`}>
        <i className="pe-2 fa-solid fa-calendar-days"></i>
        <h1 className="h6 m-0">{formattedDate} - {formattedDate2}</h1>
        <i className= {`ps-2 fa-solid fa-angle-down ${Style.grayarrow}`} ></i>
      </div>

      <div>
        <button onClick={addPunch} className={`btnPun btn btn-Of-Leave text-white fw-medium rounded-3 px-5 ${Style.font}`}> Add Punch </button>
      </div>
    </div>

    {selectOn?
        <div className={`${Style.font} d-flex justify-content-end z-3`}>
          <Select
            options={options}
            defaultValue= {valueDropdown}
            onChange={handleSelectChange}
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
      {punchPopUp === "in"? <PopUpPunch close={close}/> : "" }
      {punchPopUp === "out"? <PopUp title="Casual Leave Request"  placeholder="Casual Leave"/>  : "" }


      <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
      <InformationPunch className={Style.myCustomClass2} text="Unassigned Location" attend="OUT" colorCustomize={Style.colorCustomize2}/>
      <InformationPunch className={Style.myCustomClass3} text="Invalid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
  
  </>
  
}
