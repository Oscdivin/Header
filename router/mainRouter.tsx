import { createBrowserRouter } from "react-router-dom";
import { Outlet} from "react-router-dom"

import Layout from "../components/Block/Layout";
import HomeScreen from "../pages/HomeScreen";
export const  mainRouter=   createBrowserRouter([{
           path:"/",
           element: <Layout />,
           children:[{
                     //  path: "/header",
                      index: true,
                      element:<HomeScreen/> ,
           },
           
           ]

           
}])