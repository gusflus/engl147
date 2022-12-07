import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';

import image11 from './graphics/image11.jpg'
import image9 from './graphics/image9.jpg'
import image17 from './graphics/image17.jpg'
import image18 from './graphics/image18.jpg'
import image19 from './graphics/image19.jpg'
import image20 from './graphics/image20.jpg'
import image21 from './graphics/image21.jpg.webp'
import image22 from './graphics/image22.jpg'

const Plans = () => {
return (
  <div className="content">
    <Title class="Plans" image={image11} text="Pursuing Plans of Action" />
      <Subtitle class="Plan1" image={image21} text="Plan 1" />
      <ul style={{gridColumn: "3 / 5", gridRow: "2", color: "black", margin: "0", width: "90%"}}><h4>Encourage International Collaboration on Nuclear Fusion Energy Generation:</h4>
        <li>This plan would entail gathering the researching nations together and structuring a collaborative environment for all to share information.</li>
        <li>This plan would involve all nations interested in researching nuclear fusion energy generation.</li>
        <li>This plan would likely result in nations requesting information from other nations, whilst not sharing information themselves.</li>
      </ul>

      <Subtitle class="Plan2" image={image20} text="Plan 2" />
      <ul style={{gridColumn: "2 / 4", gridRow: "4", color: "black", margin: "0", width: "90%"}}><h4>Enforce International Collaboration on Nuclear Fusion Energy Generation:</h4>
        <li>This plan would entail enforcing researching nations to collaborate by ensuring that nations do not withhold information from each other.</li>
        <li>This plan would involve all nations currently intersted in researching this technology.</li>
        <li>This plan would likely fail as well because it could result in nations seceding from the United Nations if they are capable of research and do not wish to share.</li>
      </ul>

      <Subtitle class="Plan3" image={image19} text="Plan 3" />
      <ul style={{gridColumn: "3 / 5", gridRow: "6", color: "black", margin: "0", width: "90%"}}><h4>Incentivize International Collaboration on Nuclear Fusion Energy Generation:</h4>
        <li>This plan would entail gathering the researching nations together and structuring a collaborative environment for all to share information where all nations share knowledge with each other</li>
        <li>This plan would involve all nations currently researching nuclear fusion energy generation</li>
        <li>This plan would fulfill the primary value of developing this technology quickly and allwoing nations to collaborate in a stimulating and symbiotic manner.</li>
      </ul>
      
      <Subtitle class="Plan4" image={image18} text="The Best Plan of Action" />
      <div style={{gridColumn: "4", gridRow: "9"}}>
        <img src={image9} alt="image9" style={{width: "120%"}} />
        <p style={{textAlign: "center", fontSize: "0.85vw", marginLeft: "5vw"}}>Fig 5 "Paris Climate Agreement", United Nations</p>
      </div>
      <p style={{gridColumn: "2 / 4", gridRow: "9", color: "black", margin: "0", width: "100%"}}><br />The best plan of action requires taking this latest plan, incentives, and getting creative. All countries currently developing this technology individually are doing so for many reasons, but several important ones are to generate profit by selling the technology once it is developed, and to send a message of their country's technological ability to other nations. Expanding upon the idea of incentives, the United Nations could implement a competition within nations interested in developing nuclear fusion technology. If several nations would participate by collaborating at international facilities and sharing information they gather individually for the greater development of this technology, the United Nations could reccomend to its members that the nation that contributed the most could choose the location for the next international nuclear fusion energy generation facility. The United Nations General Assembly has gotten its members together before to create the Paris Climate Accords, so this would not be completely out of reach for this assembly. This would be a tremendous incentive for all nations currently involved in nuclear fusion energy generation research. The Joint European Torus facility in England is very well known for the progress it has made in past and recent years, and a new facility that is more capable would be a great incentive for all nations willing to share their research.</p>

      <Subtitle class="How" image={image17} text="But How?" />
      <ul style={{gridColumn: "3 / 5", gridRow: "12", color: "black", margin: "0", width: "90%"}}>
        <li>The United Nations is an international organization that is currently made up of 193 Member States.</li>
        <li>Under the United Nations Charter, the General Assembly of the United Nations has two relevant powers to this issue:</li>
        <ul style={{listStyle: "square"}}>
          <li>"to investigate any dispute or situation which might lead to international friction"</li>
          <li>"to recommend methods of adjusting such disputes or the terms of settlement"</li>
        </ul>
        <br />
        <li>This means that the United Nations has the power to recognize a possible conflict of interests of several profit-seeking nations and the greater good of the environment.</li>
      </ul>
      <ul style={{gridColumn: "2 / 5", gridRow: "13"}}>
        <li>It is possible for this plan to work beginning any time. The sooner that this plan is implemented, the faster results will occur and the more emissions will be prevented from entering the envoronment.</li>
        <li>This plan would be open to all of the memebers of the United Nations willing to participate.</li>
        <li>The competition would start slowly, allowing the members list to grow in the beginning so that more information can be shared later on in the competition</li>
        <li>Results will begin with the first pieces of shared information, and as more nations join the competition, more information will be shared and developed upon, leading to new discoveries</li>
      </ul>

      <Subtitle class="Opp" image={image22} text="Is this the right Solution?" />
      <ul style={{gridColumn: "2 / 5", gridRow: "16", color: "black", margin: "0", width: "90%"}}>
        <h4 style={{width: "100%"}}>Allowing nations to compete for a research reactor in their nation us not the perfect idea:</h4>
        <li>Competitions often involve cheating, but the United Nations is more than capable of ensureing cheaters receive the effect of their corruption.</li>
        <li>After a winner is announced, members of the competition could argue that the developments they provided were more important than the winner's shared developments. While this could occur in some conflicts, the winner of this competition will be voted on by the United Nations General assembly, so all nations will get a vote in who they believe contributed the most.</li>
        <li>Competitors are often left upset after losing a competition, which could result in secession from the United Nations. This is extremely unlikely because the downsides of leaving the U.N. are numerous enough that nations are unlikely to secede.</li>
        <br /><br /><br /><br /><br /><br /><br />
      </ul>
	</div>
    );
};

export default Plans;
