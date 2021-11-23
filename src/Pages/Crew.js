import React from 'react';
import styled from "styled-components";
import Nav from '../Components/Nav/Nav';
import CrewHero from '../Components/Crew-Hero/CrewHero';


function Crew() {
    return (
        <CrewPage>
            <header>
                <Nav />
            </header>
            <main>
                <CrewHero />
            </main>
        </CrewPage>
    )
}

export default Crew;





const CrewPage = styled.section`
    background: url("./assets/crew/background-crew-desktop.jpg") center/cover no-repeat;
    height: 100vh;

    @media screen and (max-width: 1200px) {
        background: url("./assets/crew/background-crew-tablet.jpg") center/cover no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        overflow-y: scroll;
    }

    @media screen and (max-width: 767px) {
        background: url("./assets/crew/background-crew-mobile.jpg") center/cover no-repeat;
    }
`