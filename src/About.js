import React from 'react';
import Title from './Title';
import './App.css';

import image13 from './graphics/image13.jpeg'

const About = () => {
return (
	<div className="content">
		<Title class="AboutTitle" image={image13} text="About the Author" />
		<p style={{gridColumn: "2 / 5", gridRow: "2", width: "90%", paddingLeft: "5%",}}><br /><br />My name is Gus Flusser. I am an Electrical Engineering major, Computer Science minor at California Polytechnic University, San Luis Obispo. I am scheduled to graduate in 2026.<br />
		This is "How International Collaboration on Nuclear Fusion Energy Generation Development Expedites Technological Advancement" for ENGL-147 by Dr. Bates.</p>
	</div>
);
};

export default About;
