import React from "react";
import './Login.css';
import socialmedia from '../images/social-media-icons.png';


const login = () =>{

  
  return(
        <>
     
        
    <div className="main">
      <div className="container a-container" id="-container">
        <form className="form" id="b-form" method="" action="">
          <h2 className="title">Sign in to Website</h2>
          <div className="form__icons">
            
            <img className="form__icon" src={socialmedia} />
            
          </div>
          <span className="form__span">or use your account number</span>
          <input className="form__input" type="text" placeholder="Account Number" />
          <input className="form__input" type="password" placeholder="Password" />
          <a className="form__link">Forgot your password?</a>
          <button  className="button submit">SIGN IN</button>
        </form>
      </div>

      
    </div>
    <div className="containermystyle" id="a-container">
        <form className="form" id="a-form" method="" action="">
          <h2 className="title">Create Account</h2>
          <div className="form__icons">
          <img className="form__icon" src={socialmedia} />
          </div>
          <span className="form__span">Use your Account number for registration</span>
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="text" placeholder="Account Number" />
          <input className="form__input" type="password" placeholder="Password" />
          <button  class="button submit">SIGN UP</button>
        </form>
      </div>
    
        
        </>
    )
}

export default login