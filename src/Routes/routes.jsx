import {createBrowserRouter,} from "react-router";
import Root from "../Root/Root";
import Error from "../SharedPage/Error";
import Home from "../page/Home/Home";
import FeaturedDetails from "../page/Home/FeaturedDetails";
import ProjectDetails from "../page/Projects/ProjectDetails";
import DetailsContact from "../page/DetailsContact/DetailsContact";
import Loading from "../SharedPage/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    HydrateFallback:Loading,
    children:[
        {index:true,Component:Home},
        {
          path:'/featuredetails/:id',
          loader:()=>fetch('/project.json'),
          Component:FeaturedDetails,
          HydrateFallback:Loading
        },
        {
          path:'/projectDetails',
          loader:()=>fetch('/project.json'),
          Component:ProjectDetails,
          HydrateFallback:Loading
        },
        {
          path:'detailsContact',
          Component:DetailsContact
        }
    ]
  },
]);
