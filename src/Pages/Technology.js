import React from 'react';
import styled from "styled-components";
import Nav from '../Components/Nav/Nav';
import TechHero from '../Components/Tech-Hero/TechHero';




function Technology() {
    return (
        <TechnologyPage>
             <header>
                <Nav />
            </header>
            <main>
                <TechHero />
            </main>
        </TechnologyPage>
    )
}

export default Technology;






const TechnologyPage = styled.section`
    background: url("./assets/technology/background-technology-desktop.jpg") center/cover no-repeat;
    height: 100vh;

    @media screen and (max-width: 1200px) {
        background: url("./assets/technology/background-technology-tablet.jpg") center/cover no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        overflow-y: scroll;
    }

    @media screen and (max-width: 767px) {
        background: url("./assets/technology/background-technology-desktop.jpg") center/cover no-repeat;
    }
`