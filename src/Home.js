import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import './App.css';
import NavBar from './NavBar';
import Stakeholder from './Stakeholder';

import chart1 from './graphics/chart1.png'
import image1 from './graphics/image1.jpg'
import image2 from './graphics/image2.jpg'
import image4 from './graphics/image4.webp'
import image8 from './graphics/image8.png'
import image15 from './graphics/image15.jpeg'
import image16 from './graphics/image16.png'

const Home = () => {
const problem = "The main issue is that a lack of international collaboration on this technology is delaying scientific developments. This problem affects the nations developing this technology as well as energy consumers, and therefore the environment. The European Union, many nations including the United States, and energy consumers play a role in this problem. The United States does not want to collaborate with other nations and the European Union on all of their individual research because they wish to make profit off of that knowledge in the future. The United States would lose some if they were to share their knowledge with the European Union. The sooner this problem is addressed, the sooner nuclear fusion energy generation will become available to energy consumers, and the sooner the world’s reliance on climate-warming fossil fuels will end."
const actNow = "Due to the billions of people that this issue affects as well as our rising climate, the sooner action is taken and nuclear fusion energy generation becomes availible for energy consumers, the sooner the reliance on fossil fuels dissappears. Acting on this issue now will also set a precedent for future important technological technological development, as international collaboration allows these developments to come at a much faster pace.";
return (
    <div className="content">
        <Title class="IssueTitle" image={image1} text="Collaborative Nuclear Fusion" />
        <Subtitle class="Subtitle1" image={image2} text="What is Nuclear Fusion?" />
        <div style={{gridColumn: "2 / 4", gridRow: "3", color: "black", lineHeight: "2vw", margin: "0"}}>
            <ul style={{listStyle: "none"}}>
                <li>Nuclear fusion is a nuclear reaction in which two atoms combine to form a larger atom.</li>
                <li>During this process energy is reelased as light and heat.</li>
                <li>This is the most efficient and sustainable source of energy known.</li>
                <li>Many countries are working to develop this technology on their own, but with very little international collaboration.</li>
                <li>Countries that collaborate on development of nuclear fusion energy generation will develop their technologies further and faster than countries that do not.</li>
            </ul>
        </div>

        <div style={{gridColumn: "4", gridRow: "3"}}>
            <img style={{objectFit: "cover", width: "100%"}} src={image4} alt="image4" />
            <p style={{textAlign: "center", fontSize: "0.85vw"}}>Fig. 1 “Nuclear fusion releases energy.”, Harvard.edu</p>
        </div>

        <div style={{gridColumn: "2", gridRow: "4", paddingTop: "8vw"}}>
        <ul style={{listStyle: "none"}}>
                <li>This image shows many of the nuclear fusion research facilities.</li>
                <li>A dot that is further right and further up is a more successful reactor.</li>
                <li>The blue zone in the top right is the breakeven zone.</li>
                <li>This chart shows that international reactors are more successful than domestic ones.</li>
            </ul>
        </div>

        <div style={{gridColumn: "3 / 5", gridRow: "4"}}>
            <img src={image8} alt="image8" />
            <p style={{textAlign: "center", fontSize: "0.85vw"}}>Fig 2 “Plot of the Increasing Maximum…”, Fusion Energy Base</p>
        </div>
        <ul style={{listStyle: "none", gridColumn: "2 / 5", gridRow: "12", width: "90%"}}>
            <br /><br /><br />
            <li>These are the relevant nuclear fusion research reactors because of their past (and future) success. There are three research reactors open for international collaboration, and two that are not.</li>
            <li>The most successful research reactors are the facilities that are open for internatioal collaboration.</li>
            <li>This figure depicts both the race to get into nuclear fusion energy generation research in the 1980s, and the fight to use these facilities to push the technology further, eventually into the blue zone in Fig 2.</li>
        </ul>

        <Stakeholder class="Stake1" color="red" stake="United States" text={<ul>
            <li>Researched nuclear fusion since 1950s</li>
            <li>First reactor was Tokamak Fusion Test Reactor</li>
            <li>U.S. values domestic research due to potnetial profits from selling this technology to others</li>
        </ul>} />
        <Stakeholder class="Stake2" color="gray" stake="European Union" text={<ul>
            <li>Developing this technology for 90+ years</li>
            <li>Provided location for scientists around the world to work together to make scientific discoveries</li>
            <li>Values making this technology available quickly</li>
        </ul>} />
        <Stakeholder class="Stake3" color="blue" stake="Energy Consumers" text={<ul>
            <li>Average energy consumers make decisions on how they use electricity based on usage cost</li>
            <li>Cheaper fossil fuel harms the environment</li>
            <li>Value paying less for energy</li>
        </ul>} />
            <div style={{gridColumn: "2 / 5", gridRow: " 9"}}>
                <img style={{objectFit: "cover", width: "100%"}} src={chart1} alt="chart1" />
                <p style={{textAlign: "center", fontSize: "0.85vw"}}>Fig 3 "Timeline of Relevant Nuclear Fusion Reactors", Gus Flusser</p>
            </div>
            
        <Subtitle class="Subtitle2" image={image15} text="What is the Problem?" />
        <p style={{gridColumn: "2 / 5", gridRow: "15"}}>{problem}</p>
        <Subtitle class="Subtitle3" image={image16} text="Why Act Now?" />
        <p style={{gridColumn: "2 / 5", gridRow: "18"}}>{actNow}</p>
    </div>
    );
};

export default Home;
