import React from 'react'
import { useParams } from 'react-router-dom';
import EventPage from '../pages/Event-Page';
import MoviePage from '../pages/Movie-Page';
import PlayPage from '../pages/Play-Page';
import SportPage from '../pages/Sport-Page';
import HomePage from '../pages/Home-Page'


const Home = () => {
    const {type} = useParams();
    return (
      <>
      <div>
        {type === 'home' && <HomePage />}
        {type === 'movie' && <MoviePage />}
        {type === 'event' && <EventPage />}
        {type === 'play' && <PlayPage />}
        {type === 'sport' && <SportPage />}
      </div>
    </>
    )
  }


export default Home