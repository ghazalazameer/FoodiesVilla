// react is imported from the node_modules not from the cdn script we have used in html file earlier
import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/ghazala-zameer-055bb2246" target="_blank">
        Ghazala Zameer
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Foodies<span>Villa</span>
      </strong>
    </div>
  );
};

const AppLayout=()=>{
  return(
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
    ],
    errorElement:<Error/>,
  },
  
]);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);