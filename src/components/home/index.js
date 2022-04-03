import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import "./Home.css";

function Home() {
  const charactersData = useSelector(
    (state) => state.charactersChange.characters
  );

  const apiData = useSelector(state => state.charactersChange.apiData)
  console.log(apiData)

  return (
    <div className="homepage">
      <div className="characters-list-container">
        {/* {charactersData && charactersData.length && charactersData.map((character) => (<CharacterCard characterData={character} key={character.id}/>))} */}
        {console.log(charactersData)}
        {charactersData && charactersData.length ? (
          charactersData.map((character) => (
            <CharacterCard characterData={character} key={character.id} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className="navigation-btn-container">
        {/* <Navigation apiData={apiData}/> */}
        {apiData && Object.keys(apiData).length === 0 ? (<div></div>):(
          <Navigation apiData={apiData}/>
        )}
      </div>
    </div>
  );
}

export default Home;
