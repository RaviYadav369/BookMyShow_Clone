import React, { useState, createContext } from 'react'

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [movie, setmovie] = useState({
        id: 0,
        original_title: '',
        overview: '',
        backdrop_path: '',
        poster_path: '',
    });
    const [trailerVideo, settrailerVideo] = useState({
        name: "",
        key: "",
        site: "",
        size: 0,
        type: "",
        published_at: "",
        id: ""
    })

    const [isOpen, setisOpen] = useState(false);
    const [price, setprice] = useState(0);

    const rentMovie = () => {
        setisOpen(true)
        setprice(149)
    }

    const buyMovie = () => {
        setisOpen(true);
        setprice(599)
    }

    return (

        <MovieContext.Provider value={{ movie, setmovie, isOpen, price, setisOpen, setprice, rentMovie, buyMovie, trailerVideo, settrailerVideo }} >
            {children}
        </MovieContext.Provider>);
};
export default MovieProvider;
