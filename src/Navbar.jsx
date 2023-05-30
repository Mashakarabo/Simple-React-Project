import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <head>
            <div className="logo">
                sEVENeLEVEN 711
            </div>
            <div className="display-menu">
                <Link className="menu" to={"/"}>Home</Link>
                <Link className="menu" to={"/About"}>About</Link>
                <Link className="menu" to={"/Contact"}>Contact</Link>
                <Link className="menu" to={"/Login"}>Login</Link>

            </div>

        </head>
    )
}

export default Navbar;