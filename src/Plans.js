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

const Plans = () => {
return (
  <div className="content">
    <Title class="Plans" image={image1} text="Pursuing Plans of Action" />
      <Subtitle class="Plan1" image={image2} text="Plan 1" />
      <ul style={{gridColumn: "3 / 5", gridRow: "2", color: "black", margin: "0"}}><h4>Encourage International Collaboration:</h4>
        <li>Would entail gathering the researching nations together and structuring a collaborative environment for all to share information in</li>
        <li>Would involve all nations currently researching nuclear fusion energy generation</li>
        <li>Would fulfill the primary value of developing this technology quickly and allow desiring nations to profit by supplying reactors to other nations</li>
      </ul>

      <Subtitle class="Plan2" image={image2} text="Plan 2" />
      <ul style={{gridColumn: "2 / 4", gridRow: "3", color: "black", margin: "0"}}><h4>Demand International Collaboration:</h4>
        <li>Would entail enforcing researching nations to collaborate by ensuring that nations do not withhold information from each other</li>
        <li>Would involve all nations currently researching nuclear fusion energy generation</li>
        <li>Would fulfill the primary value of developing this technology quickly and allow desiring nations to profit by supplying reactors to other nations</li>
      </ul>

      <Subtitle class="Plan3" image={image2} text="Plan 3" />
      <ul style={{gridColumn: "2 / 5", gridRow: "5", color: "black", margin: "0"}}><h4>Incentivize International Collaboration:</h4>
        <li>This would entail gathering the researching nations together and structuring a collaborative environment for all to share information in where those that share knowledge would gain something in return</li>
        <li>This would involve all nations currently researching nuclear fusion energy generation</li>
        <li>Would fulfill the primary value of developing this technology quickly and allow desiring nations to profit by supplying reactors to other nations</li>
      </ul>

      <Subtitle class="How" image={image2} text="But How?" />
      <ul style={{gridColumn: "3 / 5", gridRow: "6", color: "black", margin: "0"}}>
        <li>This plan can work starting anytime, and the sooner that this plan is implemented, the faster results will occur</li>
        <li>This plan would involve all of the nations in the United Nations willing to participate</li>
        <li>The competition would start slowly, allowing the members list to grow in the beginning so that more information can be shared later on in the competition</li>
        <li>Results will begin with the first pieces of shared information, and as more nations join the competition, more information will be shared and developed upon, leading to new discoveries</li>
      </ul>

      <Subtitle class="Opp" image={image2} text="Is this the right Solution?" />
      <ul style={{gridColumn: "2 / 5", gridRow: "8", color: "black", margin: "0"}}>
        <p>Allowing nations to compete for a research reactor in their nation does have downsides:</p>
        <li>Competitions often involve cheating, but the United Nations is more than capable of ensureing that nobody cheats</li>
        <li>Competitors are often left upset after they lose a competition, which could result in secession from the United Nations, but the downsides of leaving the U.N. are numerous enough that nations are unlikely to secedd</li>
      </ul>
	</div>
    );
};

export default Plans;
