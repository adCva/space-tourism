import styled from "styled-components";
import { Link } from 'react-router-dom';




export const HomeHeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(90%, 2000px);
    margin: 2rem auto;

    @media screen and (min-width: 411px) {
        margin: 3rem auto;
    }

    @media screen and (min-width: 768px) {
        margin: 7rem auto;
    }

    @media screen and (min-width: 834px) {
        margin: 10rem auto 5rem;
    }

    @media screen and (min-width: 1200px) {
        margin: 15rem auto 2rem;
        flex-direction: row;
        justify-content: space-around;
    }
`




export const HomeHeroTextContainer = styled.div`
    color: var(--light-blue);
    margin-bottom: 4rem;
    text-align: center;

    @media screen and (min-width: 411px) {
        margin-bottom: 6rem;
    }

    @media screen and (min-width: 540px) {
        margin-bottom: 5rem;
    }

    @media screen and (min-width: 768px) {
        width: 450px;
        height: 334px;
        margin-bottom: 8rem;
    }

    @media screen and (min-width: 1200px) {
        text-align: left;
        height: 382px;
    }
`




export const HomeHeroPreHeader = styled.h3`
    font-family: var(--ff-barlow-cond);
    font-size: 16px;
    letter-spacing: 2.7px; 

    @media screen and (min-width: 360px) {
        font-size: 18px;
    }

    @media screen and (min-width: 540px) {
        font-size: 20px;
    }

    @media screen and (min-width: 768px) {
        font-size: 22px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 28px;
    }
`




export const HomeHeroHeader = styled.h1`
    color: var(--white);
    font-family: var(--ff-bellefair);
    font-size: 65px;
    margin: 1rem 0;

    @media screen and (min-width: 360px) {
        font-size: 80px;
    }

    @media screen and (min-width: 540px) {
        font-size: 90px;
    }

    @media screen and (min-width: 768px) {
        font-size: 150px;
    }
`




export const HomeHeroParagraph = styled.p`
    font-family: var(--ff-barlow);
    font-size: 15px;
    line-height: 1.5;

    @media screen and (min-width: 360px) {
        font-size: 16px;
    }

    @media screen and (min-width: 540px) {
        font-size: 17px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`




export const HomeHeroExploreButton = styled(Link)`
    background-color: #ffffff;
    color: var(--dark-blue);
    font-family: var(--ff-bellefair);
    font-size: 20px;
    letter-spacing: 1.25px;
    border: none;
    outline: none;
    border-radius: 50%;
    width: 140px;
    height: 140px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 360px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width: 768px) {
        font-size: 32px;
        width: 242px;
        height: 242px;
    }

    @media screen and (min-width: 1200px) {
        width: 272px;
        height: 272px;

        :hover {
            box-shadow: 0 0 0 100px rgba(135, 135, 135, 0.3);
        }

        :focus {
            box-shadow: 0 0 0 100px rgba(135, 135, 135, 0.3);
        }
    }
`