import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useDispatch} from 'react-redux'
import { unlikeCharacter } from "../../../redux/ducks/characterLike";

function CharacterCard({ characterData }) {

    const dispatch = useDispatch()

    const [isFlipped, setIsFlipped] = useState(false);



    const handleUnlike = () => {
        console.log(`Liked character ${characterData.name}`)
        console.log(characterData)
        dispatch(unlikeCharacter(characterData))
    }

  return (
    <Card sx={{ width: 350, height: 400, background: isFlipped? `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("${characterData.image}") no-repeat`:'' , backgroundSize:'cover'}} className='card card-container'>
      {!isFlipped ? (
        <>
          <CardActionArea
            onClick={() => setIsFlipped((prevState) => !prevState)}
            className='card-actionArea'
          >
            <CardMedia
              component="img"
              height="200"
              image={characterData.image}
              alt={characterData.name}
              className='card-image image'
            />
            <CardContent className='card-content-container'>
              <Typography gutterBottom variant="h5" component="div" className='text text-name'>
                {characterData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text text-species'>
                {characterData.species}
                Click on the card to find more about this character
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text text-click'>
                Click on the card to find more about this character
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="card-action btn-container action-container">
            <Button size="small" color="secondary" onClick={() => handleUnlike()} className='btn btn-like'>
              Dislike
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <CardActionArea
            onClick={() => setIsFlipped((prevState) => !prevState)}
            className='card-actionArea'
          >
            <CardContent className='card-content-container'>
              <Typography gutterBottom variant="h5" component="div" className='text text-name'>
                {characterData.name}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-status'>
                Status: {characterData.status}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-species'>
                Species: {characterData.species}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-type'>
                Type: {characterData.type ? characterData.type : "Not known"}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-gender'>
                Gender: {characterData.gender ? characterData.gender : "NA"}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-origin'>
                Origin:{" "}
                {characterData.origin ? characterData.origin.name : "Not known"}
              </Typography>
              <Typography variant="body2" color="text.primary" className='text text-episodes'>
                Number of episodes:{" "}
                {characterData.episode && characterData.episode.length
                  ? characterData.episode.length
                  : "Not known"}
              </Typography>
              <br />
              <Typography variant="h4" color="text.secondary" className='text text-click'>
                Click on the text area to turn back
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="card-action btn-container action-container">
            <Button size="small" onClick={() => handleUnlike()} className='btn btn-like' variant='contained' color='secondary'>
              Dislike
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default CharacterCard;
