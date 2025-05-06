// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ParcourSuivie from './pages/ParcourSuivie';
import EtapeSuivie from './pages/EtapeSuivie';
import Login from './pages/Login';
import SecondSuivie from './pages/SecondSuivie';

const AppRoutes: React.FC = () => {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/parcours-suivie" element={<ParcourSuivie/>} />
                    <Route path="/etape-suivie" element={<EtapeSuivie/>} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/seconde-etape" element={<SecondSuivie/>} />

                    



                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
