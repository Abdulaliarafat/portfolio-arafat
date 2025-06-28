import {createBrowserRouter,} from "react-router";
import Root from "../Root/Root";
import Error from "../SharedPage/Error";
import Home from "../page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {index:true,Component:Home},
        
    ]
  },
]);
