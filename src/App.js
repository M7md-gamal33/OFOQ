import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import MyData from "./Components/MyData/MyData";
import Leaves from './Components/Leaves/Leaves'
import Reports from './Components/Reports/Reports'
import HomeContextProvider from "./HomeContext/HomeContext";
import PopUp from "./Components/PopUP/PopUP";

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mydata", element: <MyData /> },
      {path:"leaves" , element:<Leaves/>},
      {path:'reports' , element:<Reports/>},
      {path:'PopUp' , element:<PopUp/>}
    ],
  },
]);

function App() {
  return (
    <>
      <HomeContextProvider>
        <RouterProvider router={x}></RouterProvider>
      </HomeContextProvider>
    </>
  );
}

export default App;
