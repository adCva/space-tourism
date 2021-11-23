import styled from "styled-components";


export const TechWrapper = styled.section`
    margin: 1.5rem auto 2rem;

    @media only screen and (min-width: 768px) {
        margin: 4rem auto 2rem;
    }
`


export const TechContentContainer = styled.div`
    margin-bottom: 5rem;

    @media only screen and (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`


export const TechInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        margin-left: 8rem;
    }

    @media screen and (min-width: 1400px) {
		margin-left: 14rem;
  }
`



export const TechButtonsContainer = styled.div`
    margin: 2rem 0;

    @media screen and (min-width: 768px) {
        margin: 3rem 0;
    }

    @media only screen and (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`


export const TechButton = styled.button`
    background: ${({activeBtn}) => (activeBtn ? "#ffffff" : "transparent")};
    color: ${({activeBtn}) => (activeBtn ? "#000000" : "#ffffff")};
    width: 40px;
    height: 40px;
    border: ${({activeBtn}) => (activeBtn ? "1px solid transparent" : "1px solid #646464")};
    outline: none;
    border-radius: 50%;
    margin-right: 1.5rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    font-family: var(--ff-bellefair);
    font-size: 16px;

    :last-of-type {
        margin-right: 0; 
        margin-bottom: 0;
    }

    :hover {
        border: 1px solid #ffffff;
    }

    @media screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
        margin-right: 2rem;
        font-size: 24px;
    }

    @media only screen and (min-width: 1200px) {
        width: 80px;
        height: 80px;
        margin-right: 0;
        margin-bottom: 2rem;
        font-size: 32px;
    }
`


export const TechInfoContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;

    @media screen and (min-width: 1200px) {
        text-align: left;
        margin-left: 4rem;
    }
`


export const TechSubtitle = styled.h6`
    color: var(--light-blue);
    font-family: var(--ff-barlow-cond);
    font-size: 14px;
    letter-spacing: 2.36px;
    text-transform: uppercase;

    @media screen and (min-width: 540px) {
        font-size: 15px;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`


export const TechTitle = styled.h1`
    color: var(--white);
    font-family: var(--ff-bellefair);
    font-size: 24px;
    text-transform: uppercase;
    margin: 0.5rem 0 1rem;

    @media screen and (min-width: 411px) {
        font-size: 28px;
    }

    @media screen and (min-width: 540px) {
        font-size: 35px;
    }

    @media screen and (min-width: 768px) {
        font-size: 40px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 56px;
    }
`



export const TechDescription = styled.p`
    color: var(--light-blue);
    font-family: var(--ff-barlow);
    font-size: 15px;
    line-height: 1.7;

    @media screen and (min-width: 540px) {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        width: 458px;
        margin: 0 auto;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 18px;
        margin: 0 0;
    }
`


export const TechImg = styled.img`
    width: 100%;
    height: 170px;
    margin-top: 2rem;

    @media screen and (min-width: 411px) {
        height: 220px;
    }

    @media screen and (min-width: 540px) {
        height: 270px;
        margin-top: 3rem;
    }

    @media screen and (min-width: 768px) {
        height: 330px;
        margin-top: 3rem;
    }

    @media only screen and (min-width: 1200px) {
        order: 1;
        width: 515px;
        height: 527px;
    }
`