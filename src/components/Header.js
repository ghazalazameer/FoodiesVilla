import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let btnName="Login";
    // useState comes with its var name and the function that will update it resp. ["",""]
    const [btnNameReact, setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between h-20 shadow-lg">
            <div className="logo-container">
                <Link to ="/" className="logo-link">
                <img className="w-30 h-20" src={LOGO_URL}  /> </Link>
                    </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="flex p-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="flex p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="flex p-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="flex p-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="flex p-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="flex p-4">Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >
                    {btnNameReact}</button>
                    
                    </ul>
                </div>
                </div>
    );
};

export default Header;