import './App.css';
import React from 'react';
import axios from 'axios';
import { Navigate, Route, Routes } from 'react-router-dom'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExplorePage from './navigation-pages/Explore-Page';
import Home from './navigation-pages/Home';
import FullMoviePage from './pages/Full-Movie-Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate to="/explore" />} />
        <Route path='/:type/*' element={<ExplorePage />} /> */}
        <Route path='/explore' element={<Navigate to="/explore/home" />} />
        <Route path='/explore/:type' element={<Home />} />

        <Route path='/movie/:id' element={<FullMoviePage />} />

        {/* <Route path='/events:id' element={<EventsFullPages />} />
        <Route path='/play:id' element={<PlayFullPage />} />
        <Route path='/sports:id' element={<SportsFullPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
