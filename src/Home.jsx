import React, { isValidElement } from "react";
import { useState } from "react";
import './Home.css'
import './ListPlanets.jsx'
import ListPlanets from "./ListPlanets.jsx";



export default function Home(){
    const [Planets, setPlanets] = useState([
        {
            name: "Earth",
            funfact: "Did you know earth is 70% water?",
            img: "url",
            id: '0'
            
        },
        {
            name: "Mars",
            funfact: "This is mars, woooww",
            img: "url",
            id: '1' 
            
        },
        {
            name: "jupiter",
            funfact: "This is mars, woooww",
            img: "url",
            id: '2'
            
        },
        {
            name: "Saturn",
            funfact: "This is saturn, woooww",
            img: "url",
            id: '3'

            
        }
    ]);
    // const [description, setDescription] = useState(['something something '])

   
           
    
    

    function changeDescription(){
        // setDescription('something else something else')
    }


    return(
        <div className="Home">
            
            <h1>ADVENTURES WITH SPACE INVADERS</h1>
            {/* <h2>{planetName}</h2> */}
            {/* <p>{description}</p> */}
            <button onClick={(planet)=> {
               

            } } >Click to View Planets</button>


            <button>Mars</button>

             <div>
                 <ul>
                      
             {Planets.map((planet) => 
               <ListPlanets singlePlanet = { planet } />
             
                )}
            </ul>

            <ul>
                
            </ul>
            </div>
        </div>
        

    );
}