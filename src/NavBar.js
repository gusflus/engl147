import React from "react"
import { Link } from 'react-router-dom'

const NavBar = (props) => {
        const defaultStyle = {
        position: "sticky",
        fontSize: "1.25vw",
        padding: "0.75vw",
        lineHeight: "150%",
    };

    return (
    <div className={props.class} style={defaultStyle}>
        <Link to="./" className="SidebarBox">Home</Link><br />
        <Link to="./Plans" className="SidebarBox">Plans of Action</Link><br />
        <Link to="./Feasibility" className="SidebarBox">Feasibility</Link><br />
        <Link to="./About" className="SidebarBox">About Author</Link><br />
        <Link to="./Bib" className="SidebarBox">Works Cited</Link>
    </div>
    )
}

export default NavBar