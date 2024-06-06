import { createContext, useState } from "react";
import PopUp from "../Components/PopUP/PopUP";

export let HomeContext = createContext();


export default function HomeContextProvider(props){
    const [ShowDialog, setShowDialog] = useState(false);

    function changeShowDialog(){
        setShowDialog(!ShowDialog);
    }

    return <HomeContext.Provider value={{changeShowDialog , ShowDialog ,setShowDialog}}>
            {props.children}
            {ShowDialog? <PopUp/>:""}
    </HomeContext.Provider>
}