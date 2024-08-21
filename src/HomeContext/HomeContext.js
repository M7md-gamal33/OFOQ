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

    return <HomeContext.Provider value={{changeShowDialog, ShowDialog, setShowDialog, close}}>
            {props.children}
    </HomeContext.Provider>
}