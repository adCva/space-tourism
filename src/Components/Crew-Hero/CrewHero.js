import React, { useState } from 'react';
import { CrewHeroWrapper, CrewContentContainer, CrewInfoContainer, CrewmanPosition, CrewmanName, CrewmanDescription, CrewNavigationContainer, CrewNavBtn, CrewImageContainer, CrewmanImage } from "./CrewHeroStyle";



function CrewHero() {
    
    // State.
    const [ activeCrewman, setActiveCrewman ] = useState("commander");
    const values = ["commander", "engineer", "pilot", "specialist"];
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)
    const [ crewmanInfo, setCrewmanInfo ] = useState(
        {
            "image": "./assets/crew/image-douglas-hurley.png",
            "position": "Commander", 
            "name": "Douglas Hurley", 
            "description": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        }
    );

    

    // Change the crewmanInfo.
    const changeCrewmanInfo = (crew) => {
        switch (crew) {
            case "commander":
                setCrewmanInfo(
                    {
                        "image": "./assets/crew/image-douglas-hurley.png",
                        "position": "Commander", 
                        "name": "Douglas Hurley", 
                        "description": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                    }
                )
                break;
            case "engineer":
                setCrewmanInfo(
                    {
                        "image": "./assets/crew/image-anousheh-ansari.png",
                        "position": "Flight Engineer", 
                        "name": "Anousheh Ansari", 
                        "description": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
                    }
                )
                break;
            case "pilot":
                setCrewmanInfo(
                    {
                        "image": "./assets/crew/image-victor-glover.png",
                        "position": "Pilot", 
                        "name": "Victor Glover", 
                        "description": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
                    }
                )
                break;
            case "specialist":
                setCrewmanInfo(
                    {
                        "image": "./assets/crew/image-mark-shuttleworth.png",
                        "position": "Mission Specialist", 
                        "name": "Mark Shuttleworth", 
                        "description": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                    }
                )
                break;
        }
    }



    // On click function to change the cremanInfo & activeCrewman.
    const changeCrewman = (crew) => {
        changeCrewmanInfo(crew);
        setActiveCrewman(crew);
        setCurrentSlide(values.indexOf(crew));
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
    
        if (diff < -5) {
            if (currentSlide === 3) {
                changeCrewman("commander");
            } else {
                changeCrewman(values[currentSlide + 1])
            }
        }

    
        if (diff > 5) {
            if (currentSlide === 0) {
                changeCrewman("specialist");
            } else {
                changeCrewman(values[currentSlide - 1])
            }
        }
    
        setTouchPosition(null)
    }


    



    return (
        <CrewHeroWrapper>
            <h4 className="sectionTitle marginSectionTitle"><span className="sectionSpan">02</span> MEET YOUR CREW</h4>
            <CrewContentContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>

                {/* ============= Crew Info ============= */}
                <CrewInfoContainer>
                    {/* ============= Crew Buttons ============= */}
                    <CrewNavigationContainer>
                        <CrewNavBtn onClick={() => changeCrewman("commander")} activeBtn={activeCrewman === "commander" ? true : false}></CrewNavBtn>
                        <CrewNavBtn onClick={() => changeCrewman("specialist")} activeBtn={activeCrewman === "specialist" ? true : false}></CrewNavBtn>
                        <CrewNavBtn onClick={() => changeCrewman("pilot")} activeBtn={activeCrewman === "pilot" ? true : false}></CrewNavBtn>
                        <CrewNavBtn onClick={() => changeCrewman("engineer")} activeBtn={activeCrewman === "engineer" ? true : false}></CrewNavBtn>
                    </CrewNavigationContainer>

                    <CrewmanPosition>{crewmanInfo.position}</CrewmanPosition>
                    <CrewmanName>{crewmanInfo.name}</CrewmanName>
                    <CrewmanDescription>{crewmanInfo.description}</CrewmanDescription>
                </CrewInfoContainer>

                {/* ============= Crew Img ============= */}
                <CrewImageContainer>
                    <CrewmanImage src={crewmanInfo.image} alt="Crew Image" />
                </CrewImageContainer>
            </CrewContentContainer>
        </CrewHeroWrapper>
    )
}

export default CrewHero;