import React, { isValidElement } from "react";
import { useState } from "react";
import "./Home.css";
import { FaEnvelopeSquare, FaGithub, FaLinkedin, FaMoon, FaPhone, FaPhoneAlt, FaSearch, FaSpaceShuttle, FaStar, FaVoicemail, IconName } from "react-icons/fa";
import "./ListPlanet.jsx";
import ListPlanet from "./ListPlanet.jsx";
// import ListPlanets from "./ListPlanets.jsx";

export default function Home() {
  const [Planets, setPlanets] = useState([
    {
      name: "Earth",
      funfact: "Did you know earth is 70% water?",
      img: "https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015__340.jpg",
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
  const [ShowImg, setShowImg] = useState(true);




  function changeFunFacts(){
    
    setPlanetFacts("hey")

  }

  function lightSwitch(){
    if(ShowImg === false){
        setShowImg(true)
        
    }
  }


  function displayMarsImg(){
    if(ShowImg === true && ActivePlanet === ('Mars')){
        return(
            <div>
                <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21hcnMtYTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTB9fX0=" alt="" />
                <p></p>
            </div>
        )
    }
  }

  function displayEarthImg(){
    if(ShowImg === true && ActivePlanet === ('Earth')){
        return(
            <div>
                <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
            </div>
        )
    }
  }

  function displayJupiterImg(){
    if(ShowImg === true && ActivePlanet === ('Jupiter')){
        return(
            <div>
                <img src="https://cdn.britannica.com/84/4284-050-16C7E8C2/Photograph-Jupiter-range-Voyager-1-cloud-bands-February-1-1979.jpg" alt="" />
            </div>
        )
    }
  }

  function earthFunFact(){
    if(ActivePlanet === ("Earth") ){
        
        return(
            <div>
                <p>
                    FUN FACT: Earth is 70% water
                </p>
            </div>
        )
    }
  }

  function marsFunFact(){
    if(ActivePlanet === ("Mars") ){
        
        return(
            <div>
                <p>
                    FUN FACT: Mars is cool I guess? Potiental colony?
                </p>
            </div>
        )
    }
  }

  function jupiterFunFact(){
    if(ActivePlanet === ("Jupiter") ){
        
        return(
            <div>
                <p>
                   FUN FACT: Jupiter? Who knows...
                </p>
            </div>
        )
    }
  }


  


  if (ActivePlanet == "")
    return (
      <div className="Home">
        <h1> <FaStar /> ADVENTURES WITH SPACE INVADERS <FaStar />  </h1>
        <h2>Which planet do you want to explore?</h2>
        
        <button onClick={() => setActivePlanet("Earth")} >Earth <FaSpaceShuttle />  </button>
        <button onClick={() => setActivePlanet("Mars")}>Mars <FaSpaceShuttle /></button>
        <button onClick={() => setActivePlanet("Jupiter")}>Jupiter <FaSpaceShuttle />  </button>

        <img src="https://img.freepik.com/free-vector/paper-style-galaxy-background_23-2148985024.jpg" alt="" />

        <div className="Contact" >
            <h1>
                CONTACT 
            </h1>
            <p>
                <a href="https://www.linkedin.com/in/justin-cambria/">LINKEDIN <FaLinkedin /> </a>
            </p>
            <p>
            <a href="mailto: jrcambria92@gmail.com">EMAIL<FaEnvelopeSquare/> </a>
            </p>
            <a href="">CALL<FaPhoneAlt/> </a>

        </div>

        <div>
          <ul>
            {/* {Planets.map((planet) => (
              <ListPlanet singlePlanet={planet} /> */}
            {/* ))} */}
            {/* {Planets.map((planet) => (
              <ListPlanet singlePlanet={planet} /> */}
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
        <p>{displayEarthImg()}
            {displayMarsImg()} 
            {displayJupiterImg()}</p>
            <p>
            {earthFunFact()} {marsFunFact()} {jupiterFunFact()}
            </p>

            {/* {earthFunFact()} {marsFunFact()} {jupiterFunFact()} */}

        <button onClick={() => {lightSwitch()}}>View Photo</button>

        <button onClick={() => setShowImg (false)}>Hide Photo</button>

        <button onClick={() => {changeFunFacts()}}>Fun Fact</button>

        

        {/* <button onClick={() => {setPlanetFacts ("Here is some imformation")}}>See more</button> */}

        <button onClick={() => setActivePlanet("")}>Go back</button>
      </div>

    );
}
