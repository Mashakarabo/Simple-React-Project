import React from "react"
import aboutpic from '../images/financial-freedom-notes.jpg';
import './About.css';

const About = () =>{
    return(
        <>
        
        <div className="Mother-in-law">
           <div className="Son">
            <h3>What is Financial</h3>
            <h3>Wellness?</h3>
            <h4>it start with knowing where you</h4>
            <h4>Stand</h4>
           </div>
           <div className="Daughther">
            <img src={aboutpic} alt="" id="aboutpic"/>

           </div>
        </div>
        <div className="Paragraph">
            <h5>when we talk about financial wellness, we talking about trading debt and
                worry for security and financial well-being.it's about knowing where you stand
                and having a plan to get where you're going. Less about skipping lattes, more
            </h5>
        </div>
        
        </>
    )
}

export default About