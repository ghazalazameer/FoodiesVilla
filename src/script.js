// react is imported from the node_modules not from the cdn script we have used in html file earlier
import React from "react";
// import ReactDOM from "react-dom"; 
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppLayout />)
