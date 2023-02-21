import React, { useContext } from 'react'
import { MovieContext } from '../../context/Movie-Context';
import { Link } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
    const { isOpen, setisOpen, price, rentMovie, buyMovie, trailerVideo } = useContext(MovieContext);
    console.log(trailerVideo);

    const genres = movie.genres?.map(({ name }) => name).join(', ');

    const setAttribute = (e) => {
        e.target.setAttribute("data-site", "YouTube")
        const trailer = trailerVideo.filter((e) => e.type === "Trailer")
        console.log(trailer[0]);
        e.target.setAttribute("data-id", `${trailer[0].key}`)
        e.target.setAttribute("data-title", "Play Trailer")
    }

    return (
        <>
            <div className='flex flex-col gap-8'>
                <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
                <div className='text-white flex flex-col gap-2'>
                    <h4>4k rating</h4>
                    <h4>English, Hindi, Tamil, Telgu</h4>
                    <h4>{movie.runtime} min | {genres} </h4>
                </div>
                <div className='flex items-center gap-3 w-full'>
                    <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg' onClick={rentMovie}>
                        Rent ₹149
                    </button>
                    <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg' onClick={buyMovie}>
                        Buy ₹599
                    </button>

                </div>
                <Link to="#" className='bg-red-600 w-full py-3  text-white font-semibold rounded-lg' onClick={setAttribute} >
                    <h4 className='text-center'>Play Trailer</h4>
                </Link>
            </div>


        </>
    )
}

export default MovieInfo