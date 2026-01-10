import React from 'react'
import  { useState } from "react";
import {Bookmark} from 'lucide-react'

export default function Card(props) {
    const [isSaved, setIsSaved] = useState(false);
    // console.log(props.company);
    
  return (
    <div className="parent">
       <div className="card">
        <div className="top">
            <img src={props.logo} alt="" />
            <button 
            onClick={() => setIsSaved(prev => !prev)}
            className={`save-btn ${isSaved ? "saved" : ""}`}
          >
            {isSaved ? "Saved" : "Save"}
            <Bookmark size={17} className='bookmark-icon' />
          </button>
        </div>
        <div className="middle">
            <p><h3>{props.company}</h3><span>{props.posted}</span></p>
            <h2>{props.role}</h2>
            <div className='tags'>
                <h5>Part-time</h5>
                <h5>{props.level}</h5>
            </div>
            <hr id='line' />
        </div>
        
        <div className="bottom">
           
           <div className='bottom-div'>
            <h3>{props.pay}</h3>
            <h6>{props.location}</h6>
            </div>
            <button>Apply now</button>
        </div>
       </div>
    </div>
  )
  
}
