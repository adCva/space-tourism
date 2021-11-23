import styled from "styled-components";




export const DestinationHeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(90%, 2000px);
    margin: 1.5rem auto 2rem;

    @media only screen and (min-width: 768px) {
        margin: 4rem auto 2rem;
    }
`




export const DestinationHeroContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        width: 1400px;
        margin: 6rem auto;
    }
`




export const DestinationHeroImg = styled.img`
    width: 170px;
    height: 170px;
    margin: 3rem 0;

    @media only screen and (min-width: 411px) {
        width: 200px;
        height: 200px;
    }

    @media only screen and (min-width: 540px) {
        width: 220px;
        height: 220px;
    }

    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
        margin: 5rem 0 4rem;
    }

    @media screen and (min-width: 1200px) {
        width: 445px;
        height: 445px;
        margin: 0;
    }
`




export const DestinationHeroInfoWrapper = styled.div`
    text-align: center;

    @media only screen and (min-width: 768px) {
        width: 573px;
        margin: 0 auto;
    }

    @media screen and (min-width: 1200px) {
        width: 445px;
        height: 450px;
        text-align: left;
    }
`




export const DestinationHeroButtonsContainer = styled.div``




export const DestinationButton = styled.button`
    background: transparent;
    color: ${({activeBorder}) => (activeBorder ? "#ffffff" : "var(--light-blue)")};
    font-family: var(--ff-barlow-cond);
    font-size: 14px;
    letter-spacing: 2.36px;
    margin: 0 1rem 0 0;
    padding-bottom: 0.5rem;
    border: none;
    outline: none;
    border-bottom: ${({activeBorder}) => (activeBorder ? "2px solid #ffffff" : "3px solid transparent")};
    cursor: pointer;
    transition: all 250ms ease-in-out;

    :last-of-type {
        margin: 0;
    }

    @media only screen and (min-width: 540px) {
        font-size: 17px;
    }

    @media only screen and (min-width: 768px) {
        margin: 0 1.3rem 0 0;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;

        :hover {
            color: #646464;
            border-bottom: 2px solid #646464;
        }

        :focus {
            color: #646464;
            border-bottom: 2px solid #646464;
        }
    }
`




export const DestinationHeroDetailsContainer = styled.div`

`




export const DestinationName = styled.h1`
    color: var(--white);
    font-family: var(--ff-bellefair);
    font-size: 56px;
    text-transform: uppercase;
    margin: 1.8rem 0 0.7rem;

    @media only screen and (min-width: 540px) {
        font-size: 70px;
    }

    @media only screen and (min-width: 768px) {
        font-size: 80px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 100px;
        margin: 2.3rem 0 1rem;
    }
`




export const DestinationDescription = styled.p`
    color: var(--light-blue);
    font-family: var(--ff-barlow);
    font-size: 15px;
    line-height: 1.8;

    @media only screen and (min-width: 540px) {
        font-size: 18px;
    }
`




export const DestinationHeroDetailsExtra = styled.div`
    margin-top: 2rem;
    padding: 2rem 0 0;
    border-top: 1px solid var(--light-blue);

    @media only screen and (min-width: 540px) {
        margin-top: 3rem;
        padding: 3rem 0 0;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 4rem 0 2rem;
        padding: 4rem 0 0;
    }

    @media screen and (min-width: 1200px) {
        justify-content: flex-start;
        padding: 3rem 0 0;
    }
`




export const ExtraDetailContainer = styled.div`
    margin-bottom: 2.5rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }

    @media screen and (min-width: 1200px) {
        margin-right: 5rem;

        :last-of-type {
            margin-right: 0;
        }
    }
`




export const ExtraDetailTitle = styled.p`
    color: var(--light-blue);
    font-family: var(--ff-barlow-cond);
    font-size: 14px;
    letter-spacing: 2.36px;

    @media only screen and (min-width: 540px) {
        font-size: 15px;
    }
`




export const ExtraDetailInfo = styled.h6`
    color: var(--white);
    font-family: var(--ff-bellefair);
    font-size: 28px;
    text-transform: uppercase;
    margin-top: 0.8rem;

    @media only screen and (min-width: 540px) {
        font-size: 29px;
    }
`