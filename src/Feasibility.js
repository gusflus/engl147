import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';
import NavBar from './NavBar';
import Stakeholder from './Stakeholder';
import { Link } from 'react-router-dom'

import chart1 from './graphics/chart1.png'
import chart2 from './graphics/chart2.png'
import chart3 from './graphics/chart3.png'
import image1 from './graphics/image1.jpg'
import image2 from './graphics/image2.jpg'
import image3 from './graphics/image3.jpg'
import image4 from './graphics/image4.webp'

const Feasibility = () => {
return (
  <div className="content">
    <Title class="Feasibility" image={image1} text="Is it really Feasible?" />
    <ul style={{gridColumn: "2 / 5", gridRow: "2", color: "black"}}>
      <li>To implement this plan, the United Nations only needs to offer this prize to the winner of the competition</li>
      <li>There is no funding necessary, as the competitors will fund their own research in hopes of winning the competition</li>
      <li>Winning the competition means that drastic scientific developments will occur in their nation and attached to their name</li>
      <li>The winner of this competition is really all of the competitors because of the information they will have gained by the end</li>
    </ul>

    <Subtitle class="Worth" image={image2} text="Is it worth the Sacrifice?" />
    <p style={{gridColumn: "2 / 5", gridRow: "4", color: "black"}}>The response to that question: what Sacrifice? The many benefits of hosting such a competition vastly outweigh the potential downsides mentioned in <span style={{fontStyle: "italic"}}>Plans of Action</span>. The
    shared knowledge will help to irradicate use of fossil fuels for energy generation, advancing the world to a reality where it can be saved instead of destroyed for its resources.</p>
  </div>
  );
};

export default Feasibility;
