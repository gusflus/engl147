import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';
import NavBar from './NavBar';
import Stakeholder from './Stakeholder';

import image12 from './graphics/image12.jpg'
import bib1 from "./bib/bib1.pdf";
import bib2 from "./bib/bib2.pdf";
import bib3 from "./bib/bib3.pdf";

const Bib = () => {
    return (
        <div className="content">
            <Title class="BibTitle" image={image12} text="Works Cited" />
            <img className="bib" src={bib1} alt="bib1" style={{gridRow: "2"}} />
            <img className="bib" src={bib2} alt="bib2" style={{gridRow: "8"}} />
            <img className="bib" src={bib3} alt="bib3" style={{gridRow: "10"}} />
        </div>
    );
    };

export default Bib