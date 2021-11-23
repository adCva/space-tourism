import styled from "styled-components";




export const CrewHeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(90%, 2000px);
    margin: 1.5rem auto 6rem;
    text-align: center;

    @media screen and (min-width: 540px) {
        margin: 1.5rem auto 7rem;
    }

    @media only screen and (min-width: 768px) {
        margin: 4rem auto 0;
    }

    @media screen and (min-width: 1200px) {
        margin: 4rem auto;
        text-align: left;
    }
`




export const CrewContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        margin-top: 3rem;
        height: 100vh;
        justify-content: space-between;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        margin: 0 0;
        height: auto;
    }
`




export const CrewInfoContainer = styled.div`
    order: 1;

    @media screen and (min-width: 768px) {
        order: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    @media screen and (min-width: 1200px) {
        width: 40%;
        height: 600px;
        order: 0;
        text-align: left;
        align-items: flex-start;
    }
`




export const CrewmanPosition = styled.h4`
    color: #8a8a8a;
    font-family: var(--ff-bellefair);
    font-size: 16px;
    text-transform: uppercase;

    @media screen and (min-width: 540px) {
        font-size: 18px;
    }

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 32px;
    }
`




export const CrewmanName = styled.h1`
    color: var(--white);
    font-family: var(--ff-bellefair);
    font-size: 24px;
    text-transform: uppercase;
    margin: 0.6rem 0 1.7rem;

    @media screen and (min-width: 540px) {
        font-size: 28px;
    }

    @media screen and (min-width: 768px) {
        font-size: 40px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 56px;
    }
`




export const CrewmanDescription = styled.p`
    color: var(--light-blue);
    font-family: var(--ff-barlow);
    font-size: 15px;
    line-height: 1.7;

    @media screen and (min-width: 768px) {
        width: 458px;
        margin: 0 auto;
    }

    @media screen and (min-width: 1200px) {
        margin: 0;
        width: 444px;
        font-size: 18px;
    }
`




export const CrewNavigationContainer = styled.div`
    margin: 0 auto 2rem;

    @media screen and (min-width: 768px) {
        order: 1;
        margin: 2rem auto 0;
    }

    @media screen and (min-width: 1200px) {
        order: 1;
        margin: 4rem 0;
    }
`




export const CrewNavBtn = styled.button`
    height: 12px;
    width: 12px;
    border: none;
    outline: none;
    border-radius: 50%;
    margin-right: 1.5rem;
    background-color: ${({activeBtn}) => (activeBtn ? "#ffffff" : "#646464")};
    cursor: pointer;
    transition: all 250ms ease-in-out;

    :last-of-type {
        margin-right: 0;
    }

    @media screen and (min-width: 540px) {
        height: 14px;
        width: 14px;
    }

    @media screen and (min-width: 1200px) {
        height: 15px;
        width: 15px;
        cursor: pointer;
    }

    :hover {
        background-color: #a5a4a4;
    }
`




export const CrewImageContainer = styled.div`
    width: 250px;
    height: 223px;
    margin: 2rem 0 1.5rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #646464;

    @media screen and (min-width: 320px) {
        width: 280px;
    }

    @media screen and (min-width: 360px) {
        width: 327px;
    }

    @media screen and (min-width: 411px) {
        height: 243px;
        margin: 2.3rem 0 1.5rem;
    }

    @media screen and (min-width: 540px) {
        height: 283px;
        margin: 2.3rem 0 1.8rem;
    }

    @media screen and (min-width: 768px) {
        margin: 0;
        width: 456px;
        height: 650px;
        border-bottom: none;
    }
`




export const CrewmanImage = styled.img`
    height: 100%;

    @media screen and (min-width: 1200px) {
        position: absolute;
        bottom: 0;
        height: 700px;
    }
`