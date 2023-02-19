import React,{useState,useEffect} from 'react'
import axios from 'axios'

import HeroCarousel from '../components/HeroCarousel/Hero_Carousel'
import DefaultLayout from '../layouts/DefaultLayout'
import CardCarousel from '../components/CardCarousel/Card_Carousel'
import Entertainment from '../components/Entertainment/Entertainment'



const HomePage = () => {

  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [nowPlaying, setnowPlaying] = useState([])
  const [upcomming, setupcomming] = useState([])
const [recommendedShows, setrecommendedShows] = useState([]);
const [topRatedShow, settopRatedShow] = useState([]);
const [upComingShow, setupComingShow] = useState([])

  useEffect(() => {
    const requestTopPopularMovies = async () =>{
      const getTopPopularMovies = await axios.get("/movie/popular");
      setrecommendedMovies(getTopPopularMovies.data.results);
    }
  
    requestTopPopularMovies()
  }, [])
  useEffect(() => {
    const requestNowPlayingMovies = async()=>{
      const getNowPlayingMovies = await axios.get("/movie/now_playing");
      setnowPlaying(getNowPlayingMovies.data.results);
    }
  requestNowPlayingMovies()
 
  }, [])
  
  
  useEffect(() => {
    const requestTopRatedMovies = async()=>{
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setpremierMovies(getTopRatedMovies.data.results);
    }
  requestTopRatedMovies()
   
  }, [])
  
  useEffect(() => {
    const upcommingMovies = async()=>{
      const getUpcommingMovies = await axios.get("/movie/upcoming");
      setupcomming(getUpcommingMovies.data.results);
    }
  upcommingMovies()
  }, [])
  
useEffect(() => {
  const requestPopularShows = async()=>{
    const getPopularShow = await axios.get("/tv/airing_today");
    setrecommendedShows(getPopularShow.data.results);
  }
  requestPopularShows()
}, [])
useEffect(() => {
  const requestTopRatedShows = async()=>{
    const getTopRatedShow = await axios.get("/tv/top_rated");
    settopRatedShow(getTopRatedShow.data.results);
  }
  requestTopRatedShows()
}, [])

useEffect(() => {
  const requestOnTvShow = async ()=>{
    const getOnTvShow = await axios.get("/tv/on_the_air");
    setupComingShow(getOnTvShow.data.results);
  }

  requestOnTvShow()

}, [])




  return (
    <>
    
        <HeroCarousel />
    
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Up Coming Movies' posters={upcomming} subtitle='List of Upcoming movies' isDark={false} />
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
      <div className='bg-premier-800 py-8'>
        <div className='container mx-auto px-4 md:px-6  flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full' />
          </div>
          <div className='container mx-auto my-8 md:px-6'>
            <CardCarousel title='Premiers' posters={premierMovies} subtitle='List of Premier movies' isDark={true} />
          </div>
        </div>
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Recommended Movies' posters={nowPlaying} subtitle='List of recommended movies' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Recommended Tv Show' posters={recommendedShows} subtitle='List of recommended Tv Show' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Top Rated Show' posters={topRatedShow} subtitle='List of Top Rated Show' isDark={false} />
      </div>
      <div className='container mx-auto my-8 md:px-12 p-4'>
        <CardCarousel title='Up Comming Shows' posters={upComingShow} subtitle='List of Upcoming Shows' isDark={false} />
      </div>
     
    </>
  )
}

export default DefaultLayout(HomePage)