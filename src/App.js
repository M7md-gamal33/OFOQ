import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import MyData from "./Components/MyData/MyData";
import Leaves from './Components/Leaves/Leaves'
import Reports from './Components/Reports/Reports'
import HomeContextProvider from "./HomeContext/HomeContext";
import PopUp from "./Components/PopUP/PopUP";
import RequestSuccessfully from "./Components/RequestSuccessfully/RequestSuccessfully";
import { Toaster } from 'react-hot-toast';
import Attendance from "./Components/Attendance/Attendance";
import Myself from "./Components/Myself/Myself";
import Myemployees from "./Components/Myemployees/Myemployees";
import Allemployees from "./Components/Allemployees/Allemployees";

let x = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mydata", element: <MyData /> },
      {path:"leaves" , element:<Leaves/>},
      {path:'reports' , element:<Reports/>},
      {path:'PopUp' , element:<PopUp/>},
      {path:'attendance' , element:<Attendance/> , children: [
        {index: true, element:<Myself/> },
        {path: "myemployees", element:<Myemployees/> },
        {path: "allemployees", element:<Allemployees/> },
      ]},
      {path:'requestSuccessfully' , element:<RequestSuccessfully/>}
    ],
  },
]);

function App() {
  return (
    <>
      <HomeContextProvider>
        <RouterProvider router={x}></RouterProvider>
        <Toaster/>
      </HomeContextProvider>
    </>
  );
}

export default App;
