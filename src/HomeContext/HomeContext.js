import { createContext, useState } from "react";
import PopUp from "../Components/PopUP/PopUP";
import { useNavigate } from "react-router-dom";

export let HomeContext = createContext();


export default function HomeContextProvider(props){
    
    const [ShowDialog, setShowDialog] = useState(false);

    function changeShowDialog(){
        setShowDialog(!ShowDialog);
    }

    function close(){
        setShowDialog(false)
    }

    //===============================
    const [opendateTime, setOpenDateTime] = useState(false);
    const [opendateTime2, setOpenDateTime2] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
  

    return <HomeContext.Provider value={{selectedDate, setSelectedDate, selectedDate2, setSelectedDate2, changeShowDialog, ShowDialog, setShowDialog, close, opendateTime, opendateTime2, setOpenDateTime, setOpenDateTime2}}>
            {props.children}
    </HomeContext.Provider>
}