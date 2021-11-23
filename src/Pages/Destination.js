import React from 'react';
import styled from "styled-components";
import Nav from '../Components/Nav/Nav';
import DestinationHero from '../Components/Destination-Hero/DestinationHero';




function Destination() {
    return (
        <DestinationPage>
            <header>
                <Nav />
            </header>
            <main>
                <DestinationHero />
            </main>
        </DestinationPage>
    )
}

export default Destination;






const DestinationPage = styled.section`
    background: url("./assets/destination/background-destination-desktop.jpg") center/cover no-repeat;
    height: 100vh;

    @media screen and (max-width: 1200px) {
        background: url("./assets/destination/background-destination-tablet.jpg") center/cover no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        overflow-y: scroll;
    }

    @media screen and (max-width: 767px) {
        background: url("./assets/destination/background-destination-mobile.jpg") center/cover no-repeat;
    }
`