import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import About from "../pages/About";
import ContactInfo from "../pages/ContactInfo";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/skills",
                element:<Skills></Skills>
            },
            {
                path:"/project",
                element:<Project></Project>
            },{
                path:"/contact",
                element:<ContactInfo></ContactInfo>
            }
        ]
    }
])