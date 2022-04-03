import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./components/CharacterCard";
import Typography from "@mui/material/Typography";
import "./Liked.css";

function Liked() {

  const likedCharacters = useSelector(
    (state) => state.characterLike.likedCharacters
  );

  return (
    <div className="likepage">
      <header>
        <Typography variant="h3" color="text.primary" className="text heading">
          Characters You Like:
        </Typography>
      </header>

      <div className="characters-list-container">
        {likedCharacters && likedCharacters.length ? (
          likedCharacters.map((character) => (
            <CharacterCard characterData={character} key={character.id} />
          ))
        ) : (
          <div>
            <Typography variant="body1" color="text.secondary">
              No characters liked yet...
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default Liked;
