import React, { isValidElement } from "react";
import { useState } from "react";
import "./Home.css";
import { FaMoon, FaSpaceShuttle, IconName } from "react-icons/fa";
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

  if (ActivePlanet == "")
    return (
      <div className="Home">
        <h1> <FaSpaceShuttle />    ADVENTURES WITH SPACE INVADERS <FaMoon />  </h1>
        <h2>Pick a Planet to Travel</h2>
        {/* <h2>{planetName}</h2> */}
        {/* <p>{description}</p> */}
        {/* <button onClick={(planet) => {}}>Click to View Planets</button> */}

        <button onClick={() => setActivePlanet("Earth")}>Earth</button>
        <button onClick={() => setActivePlanet("Mars")}>Mars</button>
        <button onClick={() => setActivePlanet("Jupiter")}>Jupiter</button>

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

        <button onClick={() => setActivePlanet("")}>Go back</button>
      </div>
    );
}
