import React from 'react';
import { HomeHeroWrapper, HomeHeroTextContainer, HomeHeroPreHeader, HomeHeroHeader, HomeHeroParagraph, HomeHeroExploreButton } from "./HomeHeroStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { changePage } from '../../Features/activePageSlice';



function HomeHero() {
    const dispatch = useDispatch();
    return (
        <HomeHeroWrapper>
            <HomeHeroTextContainer>
                <HomeHeroPreHeader>SO, YOU WANT TO TRAVEL TO</HomeHeroPreHeader>
                <HomeHeroHeader>SPACE</HomeHeroHeader>
                <HomeHeroParagraph>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</HomeHeroParagraph>
            </HomeHeroTextContainer>
            <HomeHeroExploreButton to="/destination"  onClick={() => dispatch(changePage("destination"))}>EXPLORE</HomeHeroExploreButton>
        </HomeHeroWrapper>
    )
}

export default HomeHero;