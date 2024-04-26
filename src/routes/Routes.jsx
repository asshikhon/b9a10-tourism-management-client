import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
    {
    path: "/",
    element: <Home></Home>,
    },
    {
    path: "/contact",
    element: <ContactUs></ContactUs>,
    
    },

    
    ]

    },
  ]);

  export default router;