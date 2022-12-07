import React from "react"
import { Link } from 'react-router-dom'

const NavBar = (props) => {  
    return (
        <div className="Sidebar">
            <Link to="./" className="SidebarBox">Home</Link><br />
            <Link to="./Plans" className="SidebarBox">Plans of Action</Link><br />
            <Link to="./Feasibility" className="SidebarBox">Feasibility</Link><br />
            <Link to="./About" className="SidebarBox">About Author</Link><br />
            <Link to="./Bib" className="SidebarBox">Works Cited</Link>
        </div>
)}

export default NavBar