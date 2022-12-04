import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';
import NavBar from './NavBar';
import Stakeholder from './Stakeholder';

import image1 from './graphics/image1.jpg'
import bib1 from "./bib/bib1.pdf";
import bib2 from "./bib/bib2.pdf";
import bib3 from "./bib/bib3.pdf";

const Bib = () => {
    return (
        <div className="content">
            <Title class="BibTitle" image={image1} text="Works Cited" />
            <img src={bib1} alt="bib1" style={{gridColumn: "2", gridRow: "2"}} />
            <img src={bib2} alt="bib2" style={{gridColumn: "2", gridRow: "6"}} />
            <img src={bib3} alt="bib3" style={{gridColumn: "2", gridRow: "10"}} />
        </div>
    );
    };

export default Bib