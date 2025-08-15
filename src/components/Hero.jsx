import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css"

export default function Hero() {
  return (
    <div className="box-container">
      <h1 className="text-container">
        I am a{" "}
        <ReactTyped
          strings={[  
            "<span class='text-style'>Full Stack Developer</span>",
            "<span class='text-style'>React,Django Expert</span>",
            "<span class='text-style'>REST API Specialist</span>",
            "<span class='text-style'>Creative UI/UX Builder</span>",
            "<span class='text-style'>Problem Solver</span>"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
    </div>
  );
}
