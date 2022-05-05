import React from "react";
import logo from "./images/logo6.png";

const Header=()=>{
    return(
        <div className="header">
            <img src={logo} alt="logo" height="80px" width="80px"/>
            <h1>Rishi Notes</h1>
        </div>
    );
};

export default Header;