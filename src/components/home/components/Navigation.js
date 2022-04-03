import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  changeCharacters,
  changeAPIData,
} from "../../../redux/ducks/charactersChange";

const Navigation = ({ apiData }) => {
  const dispatch = useDispatch();

  console.log(apiData);

  const data = useSelector((state) => state.charactersChange.apiData);

  const handlePrev = async () => {
    data && data.prev === null
      ? window.alert("No previous page")
      : await axios.get(`${data.prev}`).then((res) => {
        console.log(res.data);
        dispatch(changeCharacters(res.data.results));
        dispatch(changeAPIData(res.data.info));
      });
  };

  const handleNext = async () => {
    data && data.next === null
      ? window.alert("No next page")
      : await axios.get(`${data.next}`).then((res) => {
          console.log(res.data);
          dispatch(changeCharacters(res.data.results));
          dispatch(changeAPIData(res.data.info));
        });
  };

  return (
    <Box sx={{ width: "100%" }} className="navigation-box">
      <Button onClick={() => handlePrev()}>Prev</Button>
      <Button onClick={() => handleNext()}>Next</Button>
    </Box>
  );
};

export default Navigation;
