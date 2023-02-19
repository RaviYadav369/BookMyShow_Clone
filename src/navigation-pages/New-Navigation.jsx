import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';

const NewNavigation = () => {
    return (
        <Routes>
            <Route path='/explore' element={<Navigate to="/explore/home" />} />
            <Route path='/explore/:type/*' element={<Home />} />
        </Routes>
    )
}

export default NewNavigation