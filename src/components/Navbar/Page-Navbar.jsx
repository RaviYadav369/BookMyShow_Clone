import React from 'react'
import { Link } from 'react-router-dom'

const PageNavbar = () => {
    return (
        <>
        <header className='container bg-darkBackground-800'>
            <nav className='container px-16 bg-darkBackground-800 flex justify-between '>
                <div className='flex justify-between p-2 w-96 '>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/movie'>
                            Movies
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/event'>
                            Events
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/play'>
                            Plays
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/sport'>
                            Sports
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/activity'>
                            Activities
                        </Link>
                    </div>
                </div>
                <div className='flex w-60 justify-between p-2'>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/movie'>
                            Corporates
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/movie'>
                            Offers
                        </Link>
                    </div>
                    <div className='text-gray-100 text-base flex justify-center items-center'>
                        <Link to='/explore/movie'>
                            Gifts Cards
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default PageNavbar