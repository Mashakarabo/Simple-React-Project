import React from "react";
import './home.css';
import backimg from '../images/unsplash.jpg';
import logo from '../images/logo.png';



const Home = () =>{
    return(
        <>
        <div style={{height:'400px',width:'100%', backgroundImage:`url(${backimg})`,backgroundSize:'cover',backgroundPosition:'center'}} className="Mother">
            <div className="Cover-content">
                <div className="Layer-One">
                    <p>Shine A Light On Your Education By</p>
                    <p>Applying For A Study Loan</p>
                    <button>Apply!</button>
                </div>
                <div className="Layer-three">
                    <img src={logo} alt="" id="logo" />

                </div>
                <div className="Layer-two">
                    <p>Unlock Your Financial Freedom</p>
                    <p>Open Your Account Today</p>
                    
                </div>
                <div className="Layer-three">
                    
                </div>
            </div>
            
            
            
        </div>
        
               
                
           
        
        </>
    )
}

export default Home