import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./DataProvider";
import LandingPage from "./LandingPage";
import RegistrationScreen from "./Components-Registration/RegistrationScreen";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";


const router = createBrowserRouter([
{
  path: '/PRP',
  element: <LandingPage/>,
},
{
  path:'/PRP/UserRegistration',
  element:<RegistrationScreen/>
},
{
  path:'/PRP/Login',
  element:<CommonLoginScreen/>
}


])

function App() {
  return (
   <DataProvider>
    <RouterProvider router={router}/>
   </DataProvider>
  )
}

export default App