import React from 'react'
import { useParams } from 'react-router-dom';
import VouturePage from '../pages/Vouture-Page';
import OfferPage from '../pages/Offer-Page';
import GiftCardPage from '../pages/Gift-Card-Page';
import NewNavigation from './New-Navigation';


const ExplorePage = () => {
    const { type } = useParams();
    return (
        <>
            <div>
                {type === 'explore' && <NewNavigation /> }
                {type === 'vouture' && <VouturePage />}
                {type === 'offer' && <OfferPage />}
                {type === 'giftcard' && <GiftCardPage />}
            </div>
        </>
    )
}

export default ExplorePage