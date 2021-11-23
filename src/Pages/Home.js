import React from 'react';
import styled from "styled-components";
import Nav from "../Components/Nav/Nav";
import HomeHero from '../Components/Home-Hero/HomeHero';




function Home() {
    return (
        <HomePage>
            <header>
                <Nav />
            </header>
            <main>
                <HomeHero />
            </main>
        </HomePage>
    )
}

export default Home;







const HomePage = styled.div`
    background: url("./assets/home/background-home-desktop.jpg") center/cover no-repeat;
    height: 100vh;

    @media screen and (max-width: 1200px) {
        background: url("./assets/home/background-home-tablet.jpg") center/cover no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        overflow-y: scroll;
    }

    @media screen and (max-width: 767px) {
        background: url("./assets/home/background-home-mobile.jpg") center/cover no-repeat;
    }
`