import React, { useState } from 'react';
import { DestinationHeroWrapper, DestinationHeroContentWrapper, DestinationHeroImg, DestinationHeroInfoWrapper, DestinationHeroButtonsContainer, DestinationButton, DestinationHeroDetailsContainer, DestinationName, DestinationDescription, DestinationHeroDetailsExtra, ExtraDetailContainer, ExtraDetailTitle, ExtraDetailInfo } from "./DestinationHeroStyle";



function DestinationHero() {

    // State.
    const [ displayedDestination, setDisplayedDestination ] = useState("moon");
    const [ currentDestinationIndex, setCurrentDestinationIndex ] = useState(0);
    const destinationValues = ["moon", "mars", "europa", "titan"];
    const [touchPosition, setTouchPosition] = useState(null);
    const [ showAnimation, setShowAnimation] = useState(false);
    const [ pageLoadDestination, setPageLoadDestination ] = useState(
        {
            "image": "./assets/destination/image-moon.png",
            "alt": "Moon Image",
            "name": "moon", 
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help  regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", 
            "distance": "384,400 km", 
            "travelTime": "3 days" 
        }
    );



    // Change the pageLoadDestination info.
    const changeDestinationInfo = (destination) => {
        switch (destination) {
            case "mars":
                setPageLoadDestination(
                    {
                        "image": "./assets/destination/image-mars.png",
                        "alt": "Mars Image",
                        "name": "Mars", 
                        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", 
                        "distance": "225 mil. km", 
                        "travelTime": "9 months" 
                    }
                )
                break;
            case "europa":
                setPageLoadDestination(
                    {
                        "image": "./assets/destination/image-europa.png",
                        "alt": "Europa Image",
                        "name": "Europa", 
                        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 
                        "distance": "628 mil. km", 
                        "travelTime": "3 years" 
                    }
                )
                break;
            case "titan":
                setPageLoadDestination(
                    {
                        "image": "./assets/destination/image-titan.png",
                        "alt": "Titan Image",
                        "name": "Titan", 
                        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", 
                        "distance": "1.6 bil. km", 
                        "travelTime": "7 years" 
                    }
                )
                break;
            default:
                setPageLoadDestination(
                    {
                        "image": "./assets/destination/image-moon.png",
                        "alt": "Moon Image",
                        "name": "moon", 
                        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help  regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", 
                        "distance": "384,400 km", 
                        "travelTime": "3 days" 
                    }
                )
                break;
        }
    };



    // On click function to change the displayedDestination & pageLoadDestination.
    const changeDestination = (destination) => {
        setShowAnimation(true);
        changeDestinationInfo(destination);
        setDisplayedDestination(destination);
        setCurrentDestinationIndex(destinationValues.indexOf(destination));
    }



    // Swipe functionality.
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            if (currentDestinationIndex === 3) {
                changeDestination("moon");
            } else {
                changeDestination(destinationValues[currentDestinationIndex + 1])
            }
        }

    
        if (diff < -5) {
            if (currentDestinationIndex === 0) {
                changeDestination("titan");
            } else {
                changeDestination(destinationValues[currentDestinationIndex - 1])
            }
        }
    
        setTouchPosition(null)
    }





    return (
        <DestinationHeroWrapper>
            <h4 className="sectionTitle"><span className="sectionSpan">01</span> PICK YOUR DESTINATION</h4>
            <DestinationHeroContentWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <DestinationHeroImg src={pageLoadDestination.image} alt={pageLoadDestination.alt} animate={showAnimation} />
                <DestinationHeroInfoWrapper>

                    {/* ============= Destination Buttons ============= */}
                    <DestinationHeroButtonsContainer>
                        <DestinationButton onClick={() => changeDestination("moon")} activeBorder={displayedDestination === "moon" ? true : false}>MOON</DestinationButton>
                        <DestinationButton onClick={() => changeDestination("mars")} activeBorder={displayedDestination === "mars" ? true : false}>MARS</DestinationButton>
                        <DestinationButton onClick={() => changeDestination("europa")} activeBorder={displayedDestination === "europa" ? true : false}>EUROPA</DestinationButton>
                        <DestinationButton onClick={() => changeDestination("titan")} activeBorder={displayedDestination === "titan" ? true : false}>TITAN</DestinationButton>
                    </DestinationHeroButtonsContainer>

                    {/* ============= Destination Details ============= */}
                    <DestinationHeroDetailsContainer>
                        <DestinationName>{pageLoadDestination.name}</DestinationName>
                        <DestinationDescription>{pageLoadDestination.description}</DestinationDescription>

                        {/* ============= Extra Details ============= */}
                        <DestinationHeroDetailsExtra>
                            <ExtraDetailContainer>
                                <ExtraDetailTitle>AVG. DISTANCE</ExtraDetailTitle>
                                <ExtraDetailInfo>{pageLoadDestination.distance}</ExtraDetailInfo>
                            </ExtraDetailContainer>
                            <ExtraDetailContainer>
                                <ExtraDetailTitle>EST. TRAVEL TIME</ExtraDetailTitle>
                                <ExtraDetailInfo>{pageLoadDestination.travelTime}</ExtraDetailInfo>
                            </ExtraDetailContainer>
                        </DestinationHeroDetailsExtra>


                    </DestinationHeroDetailsContainer>

                </DestinationHeroInfoWrapper>
            </DestinationHeroContentWrapper>
        </DestinationHeroWrapper>
    )
}

export default DestinationHero;