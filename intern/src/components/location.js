import React, {  useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Man from '../gallery/man.jpg'
import Typewriter from 'typewriter-effect';
function Location({getlocation,fetchh}) {
 const navigate = useNavigate();
 const navlocation = ()=>{
  navigate('/mylocation')
 }
useCallback(()=>{
getlocation();
},[getlocation])
  return (
    <div className="location">
     <div className="hero-1" style={{"width":"55rem"}}>
    <h1  style={{"fontFamily":"monospace","fontSize":"5rem"}}><Typewriter onInit={(typewriter)=>{
      typewriter.typeString('Welcome To My React Project App!').pauseFor(1000).deleteAll().typeString("I made this app for my Reactjs Internship!").pauseFor(2000).deleteAll().typeString("And my name is Vivek Bhardwaj!😃").start();
    }} /></h1><br /><br /><br />
      <h1 style={{width:"40rem",fontFamily:"sans-serif",fontStyle:"oblique","wordSpacing":"0.7rem","lineHeight":"3rem"}}>
        Hello There, Seems like you are from, <span style={{color:"red"}}>{fetchh.city}</span> and also I can see
        that your ip is <span style={{color:"red"}}>{fetchh.ip}</span>.
      </h1>
     <div>
      <h1>For detailed information,</h1>
      <div style={{"position":"relative","right":"0rem"}}>
    <button style={{"marginTop":"3rem","width":"14rem","height":"4rem","color":"white","backgroundColor":"aqua","border":"1.7px solid white","fontWeight":"600","cursor":"pointer"}}>Submit</button><br />
    <button onClick={navlocation} style={{"position":"absolute","top":"4rem","left":"1.5rem","width":"14rem","height":"4rem","color":"white","backgroundColor":"black","fontWeight":"600","cursor":"pointer","marginBottom":"3rem"}}>Visit Here</button>
    </div>
    </div>
    
    </div>
      <div className="hero-1">

      <div classname="images" style={{"position":"relative","right":"0rem",top:"0rem"}}>
      <img src={Man} alt='img' style={{"width":"35rem","height":"35rem"}}/>
      <div style={{width:"35rem","height":"35rem","backgroundColor":"coral","position":"absolute","top":"-2rem","left":"-2rem","zIndex":"-10"}}></div>
      </div>
      </div>
      </div>
  );
}

export default Location;
