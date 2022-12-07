import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';

import chart3 from './graphics/chart3.png'
import image14 from './graphics/image14.jpg.webp'
import image23 from './graphics/image23.jpg'
import image24 from './graphics/image24.jpg'
import image25 from './graphics/image25.png'

const Feasibility = () => {
return (
  <div className="content">
    <Title class="Feasibility" image={image14} text="Is it really Feasible?" />
    <Subtitle class="Imp" image={image23} text="How is it Feasible?" />
      <p style={{gridColumn: "2 / 5", gridRow: "3", color: "black", width: "95%", paddingLeft: "0.4vw"}}>
      To implement this plan, the United Nations would need to decide if they wish to implement such a policy. Next the General Assembly would have to vote on whether what is needed to offer this prize to the winner of the competition.
      Because all of the nations involved in the competition are part of the United Nations, and conduct their research with their own funding, there is no organizational funding necessary. The competitors will fund their own research in hopes of winning the competition.
      Winning the competition means that drastic scientific developments will occur in their nation, increasing its noted ability as well as its power to partner with other nations on technology developments in the future.
      While the true winner would get a collaborative facility on its nation's soil, the true winner of this competition, however cliche it may sound, is all of the competitors. The vast amount of knowledge that all nations will share by the end of this event would almost certainly push humanity towards a fossil-fuel free future.
      <br />This would not be the first time that the United Nations implemented a policty to help advance the world toward a world with less emissions. The 2016 Paris Climate Accord was similar to this proposed competition, and it proves that the United Nations has, can, and should implement this policy to make out world a healthier place.
    </p>

    <Subtitle class="Pub" image={image25} text="What about the Public?"/>
    <p style={{gridColumn: "2", gridRow: "6"}}><br />Smart Grid Consumer Collaborative recently surveyed more than 1,500 energy consumers. Everyone was surveyed on their thoughts on “smart grid benefits” that include, but are not limited to saving money by using energy efficiently, preventing and reducing outage length and reducing harmful emissions.<br />When surveyed:<ul><li>98% of participants agreed that smart home benefits are important</li><li>Only 26% of participants were willing to pay just $3 or $4 per month for these benefits</li></ul>This data proves that energy consumers, while always demanding lower prices, are not opposed to new and sustainable energy sources. The public will be in support of changes made to energy generation because they changes line directly up with the vasy majority of consumers' desire: nuclear fusion energy generation is cheaper and better for the environment.</p>


    <div style={{gridColumn: "3 / 5", gridRow: "6"}}>
      <img style={{height: "150%", objectFit: "cover", display: "block", height: "200%"}} src={chart3} alt="chart" />
      <p style={{textAlign: "center", fontSize: "0.85vw"}}>Fig 5 “Population Willingness to Pay for Smart Grid Benefits”, Gus Flusser</p>
    </div>

    <Subtitle class="Worth" image={image24} text="Is it worth the Sacrifice?" />
    <p style={{gridColumn: "2 / 5", gridRow: "10", color: "black", width: "95%"}}>The response to that question seems to be: What Sacrifice? The many benefits of hosting such a competition vastly outweigh the potential downsides mentioned in <span style={{fontStyle: "italic"}}>Plans of Action</span>. The shared knowledge will help to irradicate use of fossil fuels for energy generation, advancing the world to a reality where it can be saved instead of destroyed for its resources. The United Nations will gain support of the public for pursuing such a policy, and the European Union will be contributing to a cooperative and collaborative environment. Countries like the United States will have a place to dedicate their nuclear fusion energy generation research while giving and receiving information that helps every nation develop better technologies. Energy consumers will be thrilled, as they will be paying less for energy, and every bit they use does not mean more pollution in the air.</p>
  </div>
  );
};

export default Feasibility;
