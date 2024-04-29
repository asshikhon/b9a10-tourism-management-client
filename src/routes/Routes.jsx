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
import SpotCardDetails from "../pages/Shared/SpotCardDetails/SpotCardDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
    {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/spot')
    },
    {
    path: "/allTourists",
    element: <AllTourist></AllTourist>,
    loader: () => fetch('http://localhost:5000/spot')
    },
    {
    path: "/details/:id",
    element: <SpotCardDetails></SpotCardDetails>,
    loader: () => fetch('http://localhost:5000/spot'),
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
path:"/register",
element: <Register></Register>,
},
{
path: "/login",
element: <Login></Login>,

},
{
  path: "/contact",
  element: <ContactUs></ContactUs>,
  },
    
    ]

    },
  ]);

  export default router;