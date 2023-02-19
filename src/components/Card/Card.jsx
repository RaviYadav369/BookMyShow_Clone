import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  return (
    <Link to={`/movie/${props.id}`} >
      <div className='w-full flex flex-col items-start gap-2 px-2 md:px-3'>
        <div className='w-full h-40 md:h-80'>
          <img src={`https://images.tmdb.org/t/p/original${props.poster_path}`} alt='poster' className='w-full h-full rounded-md' />

        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? 'text-white' : 'text-black'}`}>{props.title}</h3>
      </div>
    </Link>
  );
}

const EventCard = (props) => {
  return (
    <a
      href="https://in.bookmyshow.com/events/so-rude-of-me-by-swati-sachdeva/ET00331405"
      target="_blank"
      rel="noreferrer"
    >
      <div className='w-full flex flex-col items-start gap-2 px-2 md:px-3'>
        <div className='w-full h-40 md:h-80'>
          <img src={props.Playsrc} alt='poster' className='w-full h-full rounded-md object-cover object-center' />

        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? 'text-white' : 'text-black'}`}>{props.title}</h3>
      </div>
    </a>
  );
}

const Card = (props) => {
  if (props.isPlay) {
    return <EventCard {...props} />
  }
  return <MovieCard {...props} />
}



export default Card