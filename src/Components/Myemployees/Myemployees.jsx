import React, { useEffect, useState } from 'react'
import Style from './Myemployees.module.css'
import moment from 'moment/moment';
import axios from 'axios';
import { useQuery } from 'react-query';
import InformationPunch from '../InformationPunch/InformationPunch';

export default function Myemployees() {
  
  const formattedDate = moment().format('DD MMM YYYY');
  const formattedDate2 = moment().add(3 , "days").format('DD MMM YYYY');
  const [employees, setEmployees] = useState(null);
  const [filterEmployees, setFilterEmployees] = useState(null);

  async function getData()
  {
    return await axios.get("https://randomuser.me/api/?results=10")
  }

  let {data , isLoading} = useQuery("getDataOfPersons" , getData ,{
    staleTime: 60000 * 5, 
    enabled: !employees
  });
  console.log(data?.data.results);


  useEffect(() => {
    if(data && !employees)
    {
      setEmployees(data.data.results);
      setFilterEmployees(data.data.results);
      localStorage.setItem("persons" , JSON.stringify(data.data.results));
    }
  }, [data])

  useEffect(() => {
    const dataInLocalstorage = localStorage.getItem("persons");
    if(dataInLocalstorage)
    {
      setEmployees(JSON.parse(dataInLocalstorage));
      setFilterEmployees(JSON.parse(dataInLocalstorage));
    }
  }, [])
  
  function filterData(e){
    setFilterEmployees(employees.filter((x) => `${x.name.first.toLowerCase()} ${x.name.last.toLowerCase()}`.includes(e.target.value.toLowerCase())))
  }
  

  return <>
    
    <div className= {`d-flex justify-content-between align-items-center ${Style.font} ${Style.myMargin}`}>
      
      <div className= {`d-flex justify-content-start align-items-center ${Style.inputSearch}`}>
        <i className= {`fa-solid fa-magnifying-glass ps-3  ${Style.magnifier}`}></i>
        <input onInput={filterData} className= {`h-100 ${Style.input}`} type="text" placeholder="Search for an Employee by Name or Code"  />
      </div>


      <div className={`d-flex justify-content-center align-items-center py-1 ${Style.greenIcon}`}>
        <i className="pe-2 fa-solid fa-calendar-days"></i>
        <h1 className="h6 m-0">{formattedDate} - {formattedDate2}</h1>
        <i className= {`ps-2 fa-solid fa-angle-down ${Style.grayarrow}`} ></i>
      </div>
    
    </div>


    <div className="row mb-2 gx-5">
      <div className= {`col-md-4 ${Style.emptyClass}`}>

        {filterEmployees?.map((person , idx) => (<div key={idx} className={`bg-white py-3 px-4 d-flex justify-content-between align-items-center ${Style.mt4} ${Style.font}`}>
          
            <div>
              <h1 className={`h5 ${Style.colorOfh}`}>{person.name.first} {person.name.last}</h1>
              <span className={Style.detailsOfSpan}>#{person.location.street.number}</span>
            </div>
            <div><i className={`fa-solid fa-angle-right ${Style.arrow} ${Style.greenIcon}`}></i></div>
        
          </div>
        ))}

      </div>



      <div className="col-md-8">
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
              <InformationPunch className={Style.myCustomClass1} text="Valid Location" attend="IN" colorCustomize={Style.colorCustomize1}/>
      </div>

    </div>

  </>
  
}
