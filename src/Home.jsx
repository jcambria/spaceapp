import React, { isValidElement } from "react";
import { useState } from "react";
import "./Home.css";
import { FaMoon, FaSpaceShuttle, FaStar, IconName } from "react-icons/fa";
import "./ListPlanets.jsx";
// import ListPlanets from "./ListPlanets.jsx";

export default function Home() {
  const [Planets, setPlanets] = useState([
    {
      name: "Earth",
      funfact: "Did you know earth is 70% water?",
      img: "url",
      id: "0",
    },
    {
      name: "Mars",
      funfact: "This is mars, woooww",
      img: "url",
      id: "1",
    },
    {
      name: "Jupiter",
      funfact: "This is mars, woooww",
      img: "url",
      id: "2",
    },
    {
      name: "Saturn",
      funfact: "This is saturn, woooww",
      img: "url",
      id: "3",
    },
  ]);

  const [ActivePlanet, setActivePlanet] = useState("");
  const [PlanetFacts, setPlanetFacts] = useState("");
  


  if (ActivePlanet == "")
    return (
      <div className="Home">
        <h1> <FaStar /> ADVENTURES WITH SPACE INVADERS <FaStar />  </h1>
        <h2>Which planet do you want to explore?</h2>
        
        <button onClick={() => setActivePlanet("Earth")} >Earth <FaSpaceShuttle />  </button>
        <button onClick={() => setActivePlanet("Mars")}>Mars <FaSpaceShuttle /></button>
        <button onClick={() => setActivePlanet("Jupiter")}>Jupiter <FaSpaceShuttle />  </button>

        <img src="https://img.freepik.com/free-vector/paper-style-galaxy-background_23-2148985024.jpg" alt="" />

        <div>
          <ul>
            {/* {Planets.map((planet) => (
              <ListPlanets singlePlanet={planet} /> */}
            {/* ))} */}
          </ul>

          <ul></ul>
        </div>
      </div>
    );
  else
    return (
      <div>
        <h1>{ActivePlanet}</h1>
        <p>{PlanetFacts}</p>
        <img src="" alt="" />

        <button onClick={() => setPlanetFacts("Here is the photo of the planet")}>View Photo</button>
        <button onClick={() => setPlanetFacts("Here is some imformation")}>See more</button>
        <button onClick={() => setActivePlanet("")}>Go back</button>
      </div>
    );
}
