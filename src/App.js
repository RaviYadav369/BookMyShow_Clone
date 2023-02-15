import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'

import ExplorePage from './navigation-pages/Explore-Page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/explore" />} />
        <Route path='/:type' element={<ExplorePage />} />
        
        {/* <Route path='/movies:id' element={<MoviesFullPage />} />
    <Route path='/events:id' element={<EventsFullPages />} />
    <Route path='/play:id' element={<PlayFullPage />} />
    <Route path='/sports:id' element={<SportsFullPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
