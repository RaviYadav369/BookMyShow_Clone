import React,{useState} from 'react'

import HeroCarousel from '../components/HeroCarousel/Hero_Carousel'
import DefaultLayout from '../layouts/DefaultLayout'
import CardCarousel from '../components/CardCarousel/Card_Carousel'
import Entertainment from '../components/Entertainment/Entertainment'



const HomePage = () => {

  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [event, setevent] = useState([])
  const [sport, setsport] = useState([])
  const [play, setplay] = useState([])



  return (
    <>
    
        <HeroCarousel />
    
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Recommended Movies' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <Entertainment />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Popular Movies' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full' />
          </div>
          <div className='container mx-auto my-8 md:px-12 p-4'>
            <CardCarousel title='Premiers' posters={recommendedMovies} subtitle='List of recommended movies' isDark={true} />
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Events Happens Near You' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Online Streaming Events' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='The Latest Plays' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Top Games And Sports Events' posters={recommendedMovies} subtitle='List of recommended movies' isDark={false} />
      </div>
    </>
  )
}

export default DefaultLayout(HomePage)