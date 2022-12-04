import React from 'react';

function Sidebar(props) {
    const defaultStyle = {
        position: "sticky",
        fontSize: "1.25vw",
        padding: "0.75vw",
        lineHeight: "150%",
    };

    return (
    <div className={props.class} style={defaultStyle}>
        <a href="" className="SidebarBox">Issue</a><br />
        <a href="" className="SidebarBox">Who's Involved</a><br />
        <a href="" className="SidebarBox">Plans of Action</a><br />
        <a href="" className="SidebarBox">Opposition</a><br />
        <a href="" className="SidebarBox">Feasibility</a><br />
        <a href="" className="SidebarBox">About Me</a><br />
        <a href="" className="SidebarBox">Works Cited</a>
    </div>
  );
}

export default Sidebar;