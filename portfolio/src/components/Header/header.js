import React from "react";
import "./header.css";
import Navbar from "../Navbar/navbar";
import NavTabs from "../NavTabs/navtabs";

function Header() {
    return (
        <header className="header">
            <NavTabs />
            <Navbar />
        </header>
    )
}

export default Header;