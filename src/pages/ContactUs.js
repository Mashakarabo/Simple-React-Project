import React from "react"
import './Contact.css';
import cellphone from '../images/cellphones.png';
import chatbox from '../images/chatbox.png';
import email from '../images/email.png';

const ContactUs = () =>{
    return(
        <>
        
        <div className="Contact-details">
            <div className="Cellphone">
            <img src={cellphone} alt="" class="Contact-cellphone"/>
            <h1>BY Phone</h1>
            <p1>Monday-friday | 9am to 4pm</p1>
            <h6>South African Toll-free</h6>
            <p3>010 1022 222</p3>

            </div>
            <div className="Email">
            <img src={email} alt="" class="email-pic" />
            <h1>Send Queries via mail</h1>
            <p1>SEVENELEVEN@CAPACITI.ORG.ZA</p1>
            <h6>TeamSeven11@Absa.org.za</h6>
            <button id="email-button">OPEN MAIL</button>

            </div>
            <div className="Chat-box">
            <img src={chatbox} alt="" class="Chat-box"/>
            <h1>Live Chat</h1>
            <p2>Chat with a member of  </p2>
            <p3>our in-house-team</p3>
            <button id="chat-button">OPEN CHAT</button>
            </div>
           
        </div>
        
        </>
    )
}

export default ContactUs