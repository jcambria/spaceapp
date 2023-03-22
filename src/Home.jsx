import React from "react";
import { useState } from "react";
import './Home.css'



export default function Home(){
    const [planetName, setPlanetName] = useState([
        {
            name: "Earth",
            funfact: "Did you know earth is 70% water?",
            img: "url"
            
        },
        {
            name: "Mars",
            description: "This is mars, woooww",
            img: "url"
            
        },
        {
            name: "jupiter",
            description: "This is mars, woooww",
            img: "url"
            
        },
        {
            name: "Saturn",
            description: "This is saturn, woooww",
            img: "url"
            
        }
    ]);
    const [description, setDescription] = useState(['something something '])

    function changePlanetName(params) {
        setPlanetName('Earth')
        
    }

    function changeDescription(){
        setDescription('something else something else')
    }


    return(
        <div className="Home">
            <h1>ADVENTURES WITH SPACE INVADERS</h1>
            <h2>{planetName}</h2>
            <p>{description}</p>
            <button onClick={()=> {
                
                changePlanetName()
                changeDescription()
            
            } } >Click to View Planets</button>
        </div>

    );
}