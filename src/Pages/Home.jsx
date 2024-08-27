import React from "react";
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from '../components/Qualities'
import Reservation from'../components/Reservation'
import WhoAreWe from '../components/WhoAreWe'
import About from '../components/About'
import Team from '../components/Team'
import Footer from '../components/Footer'

const Home =()=>{
    return(
        <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Reservation/>
        <Footer/>
        </>
    
    )
};
export default Home;