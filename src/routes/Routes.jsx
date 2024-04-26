import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllTourist from "../pages/AllTourist/AllTourist";
import AddTourist from "../pages/AddTourist/AddTourist";
import MyList from "../pages/MyList/MyList";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
    {
    path: "/",
    element: <Home></Home>,
    },
    {
    path: "/allTourists",
    element: <AllTourist></AllTourist>,
    },
    {
    path: "/addTourist",
    element: <AddTourist></AddTourist>,
    },
    {
    path: "/myList",
    element: <MyList></MyList>,
    },
    {
    path: "/contact",
    element: <ContactUs></ContactUs>,
    },
{
path:"/register",
element: <Register></Register>,
},
{
path: "/login",
element: <Login></Login>,

}
    
    ]

    },
  ]);

  export default router;