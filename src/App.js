import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Liked from "./components/liked";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCharacters,
  changeAPIData,
} from "./redux/ducks/charactersChange";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCharatcers = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          console.log(res.data)
          dispatch(changeCharacters(res.data.results));
          dispatch(changeAPIData(res.data.info));
        })
        .catch((err) => console.log(err));
    };
    fetchCharatcers();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="main-content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/liked" element={<Liked />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
