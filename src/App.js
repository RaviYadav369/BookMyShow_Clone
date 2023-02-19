import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExplorePage from './navigation-pages/Explore-Page';
import Home from './navigation-pages/Home';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Navigate to="/explore" />} />
        <Route path='/:type/*' element={<ExplorePage />} /> */}
        <Route path='/explore' element={<Navigate to="/explore/home" />} />
        <Route path='/explore/:type' element={<Home />} />
        
        {/* <Route path='/movies:id' element={<MoviesFullPage />} />
    <Route path='/events:id' element={<EventsFullPages />} />
    <Route path='/play:id' element={<PlayFullPage />} />
    <Route path='/sports:id' element={<SportsFullPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
