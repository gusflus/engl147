import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';
import NavBar from './NavBar';
import Stakeholder from './Stakeholder';

import chart1 from './graphics/chart1.png'
import chart2 from './graphics/chart2.png'
import chart3 from './graphics/chart3.png'
import image1 from './graphics/image1.jpg'
import image2 from './graphics/image2.jpg'
import image3 from './graphics/image3.jpg'
import image4 from './graphics/image4.webp'

const About = () => {
return (
	<div className="content">
		<Title class="AboutTitle" image={image1} text="About the Author" />
		<p style={{gridColumn: "2 / 5", gridRow: "2"}}>My name is Gus Flusser. I am an Electrical Engineering major, Computer Science minor at California Polytechnic University, San Luis Obispo. I am scheduled to graduate in 2026.<br />
		This is "How International Collaboration on Nuclear Fusion Energy Generation Development Expedites Technological Advancement" for ENGL-147 by Dr. Bates.</p>
	</div>
);
};

export default About;
