import React from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import VouturePage from '../pages/Vouture-Page';
import OfferPage from '../pages/Offer-Page';
import GiftCardPage from '../pages/Gift-Card-Page';


const ExplorePage = () => {
    const { type } = useParams();
    return (
        <>
            <div>
                {type === 'explore' &&
                    <Routes>  
                        <Route path='/explore' element={<Navigate to="/explore/home" />} />
                        <Route path='/:type' element={<Home />} /> 
                    </Routes>
                }
                {type === 'vouture' && <VouturePage />}
                {type === 'offer' && <OfferPage />}
                {type === 'giftcard' && <GiftCardPage />}
            </div>
        </>
    )
}

export default ExplorePage