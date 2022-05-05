import React from "react";

const Footer=()=>{
    const year = new Date().getFullYear();
    return(
        <footer>
            <h3>Copyright © {year}</h3>
        </footer>
    );
};

export default Footer;