import React from "react";
import App1 from "./App1";
import {Collapse, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';

const My=()=>{
const [checked,setChecked] = useState(false);
useEffect(()=>{
  setChecked(true);
},[])

return(
    <Collapse in={checked} {...(checked ? {timeout:1000} :{})} collapsedHeight={50}>
    <div className="containernew1" style={{  height: '60vh', alignItems: 'center',justifyContent: 'center', display: 'flex'}}>
      <h2 className="title" style={{ color:'whitesmoke', fontSize:'4rem', fontFamily: "'Syne Mono', monospace" }}>
          Welcome to <br />
        Job<spam>ForLife</spam>
      </h2>
    </div>
    </Collapse>
)
}

const Hero = ({handleLogout}) => {
    return (
        
        
        <section className="hero">
            
            <nav style={{ backgroundColor: "transparent"}}>
                <h2 >Job<spam>ForLife</spam></h2>
                <button style={{ backgroundColor: "transparent"}} onClick={handleLogout}>LogOut</button>
            </nav>
            
          <My/> 

            <App1 />
        </section>

   
        
      
    );
};

export default Hero;