import React from "react";
import App1 from "./App1";

const Hero = ({handleLogout}) => {
    return (
     
        <section className="hero">
            
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>LogOut</button>
            </nav>

            <App1 />
        </section>
        
      
    );
};

export default Hero;