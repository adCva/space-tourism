import React, { useState, useEffect } from 'react';
import { TechWrapper, TechContentContainer, TechInfoWrapper, TechButtonsContainer, TechButton, TechInfoContainer, TechSubtitle, TechTitle, TechDescription, TechImg } from "./TechHeroStyle";

function TechHero() {

    // State.
    const [ activeTech, setActiveTech ] = useState("vehicle");
    const [ portraitImage, setPortraitImage ] = useState(true);
    const values = ["vehicle", "spaceport", "capsule"];
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)
    const [ techInfo, setTechInfo ] = useState(
        {
            "imageLandscape": "./assets/technology/image-launch-vehicle-landscape.jpg",
            "imagePortrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "subtitle": "The terminology...", 
            "title": "Launch vehicle", 
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        }
    );



    // Change the techInfo.
    const changeTechInfo = (tech) => {
        switch (tech) {
            case "vehicle":
                setTechInfo(
                    {
                        "imageLandscape": "./assets/technology/image-launch-vehicle-landscape.jpg",
                        "imagePortrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
                        "subtitle": "The terminology...", 
                        "title": "Launch vehicle", 
                        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                    }
                )
                break;
            case "spaceport":
                setTechInfo(
                    {
                        "imageLandscape": "./assets/technology/image-spaceport-landscape.jpg",
                        "imagePortrait": "./assets/technology/image-spaceport-portrait.jpg",
                        "subtitle": "The terminology...", 
                        "title": "Spaceport", 
                        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                    }
                )
                break;
            case "capsule":
                setTechInfo(
                    {
                        "imageLandscape": "./assets/technology/image-space-capsule-landscape.jpg",
                        "imagePortrait": "./assets/technology/image-space-capsule-portrait.jpg",
                        "subtitle": "The terminology...", 
                        "title": "Space capsule", 
                        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                    }
                )
                break;
        }
    }



    // On click function to change the activeTech & techInfo.
    const changeTech = (tech) => {
        changeTechInfo(tech);
        setActiveTech(tech);
        setCurrentSlide(values.indexOf(tech));
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
            if (currentSlide === 2) {
                changeTech("vehicle");
            } else {
                changeTech(values[currentSlide + 1])
            }
        }

    
        if (diff < -5) {
            if (currentSlide === 0) {
                changeTech("capsule");
            } else {
                changeTech(values[currentSlide - 1])
            }
        }
    
        setTouchPosition(null)
    }





    // Load the proper image depending on the screen width.
    useEffect(() => {
        let properImage = () => {
            if (window.innerWidth > 1200) {
                setPortraitImage(true);
            } else {
                setPortraitImage(false);
            }
        }
    
        window.addEventListener("load", properImage);
        window.addEventListener("resize", properImage);
    
        return () => {
            window.removeEventListener("load", properImage);
            window.removeEventListener("resize", properImage);
        }
    })



    


    
    return (
        <TechWrapper>
            <h4 className="sectionTitle marginSectionTitleTech"><span className="sectionSpan">03</span> SEE SPACE LAUNCH 1</h4>
            <TechContentContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <TechImg src={portraitImage ? techInfo.imagePortrait : techInfo.imageLandscape} alt="Tech Image" />
                <TechInfoWrapper>
                    <TechButtonsContainer>
                        <TechButton onClick={() => changeTech("vehicle")} activeBtn={activeTech === "vehicle" ? true : false}>1</TechButton>
                        <TechButton onClick={() => changeTech("spaceport")} activeBtn={activeTech === "spaceport" ? true : false}>2</TechButton>
                        <TechButton onClick={() => changeTech("capsule")} activeBtn={activeTech === "capsule" ? true : false}>3</TechButton>
                    </TechButtonsContainer>

                    <TechInfoContainer>
                        <TechSubtitle>{techInfo.subtitle}</TechSubtitle>
                        <TechTitle>{techInfo.title}</TechTitle>
                        <TechDescription>{techInfo.description}</TechDescription>
                    </TechInfoContainer>
                </TechInfoWrapper>
            </TechContentContainer>
        </TechWrapper>
    )
}

export default TechHero;