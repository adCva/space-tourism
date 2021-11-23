import styled from "styled-components";
import { Link } from 'react-router-dom';



export const NavWrapper = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 2000px;
    margin: 0 auto;
    padding: 1.5rem 1.2rem;

    @media screen and (min-width: 768px) {
        padding: 0;
    }

    @media screen and (min-width: 1200px) {
        padding: 1rem 0;
    }
`




export const NavLogo = styled.img`
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
        width: 48px;
        height: 48px;
        margin-left: 2rem;
    }

    @media screen and (min-width: 1200px) {
        margin-left: 4rem;
    }
`




export const OpenMobileMenu = styled.img`
    display: ${({showOpenElement}) => (showOpenElement ? "none" : "block")};
    position: absolute;
    right: 20px;
    width: 24px;
    height: 21px;
    z-index: 99;

    @media screen and (min-width: 768px) {
        display: none;
    }
`




export const NavListWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 65%;
    transform: ${({mobileMenu}) => (mobileMenu ? "translateX(0%)": "translateX(200%)")};
    transition: all 250ms ease-in-out;
    background: rgba(0, 0, 0, 0.95);

    @supports (backdrop-filter: blur(60px)) {
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(60px);
    }

    @media screen and (min-width: 768px) {
        position: initial;
        width: 60%;
        transform: translateX(0%);
        padding-left: 2.5rem;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 4rem;
    }

    @media screen and (min-width: 1400px) {
        width: 55%;
    }
`




export const CloseMobileMenu = styled.img`
    display: ${({showCloseElement}) => (showCloseElement ? "block" : "none")};
    position: absolute;
    top: 30px;
    right: 20px;
    width: 20px;
    height: 20px;
    z-index: 99;

    @media screen and (min-width: 768px) {
        display: none;
    }
`




export const NavMenuList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    padding-left: 1.5rem;

    @media screen and (orientation: landscape) {
        margin-top: 6rem;
    }

    @media screen and (min-width: 360px) {
        padding-left: 2rem;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 0;
        padding-left: 0;
    }

    @media screen and (min-width: 1300px) {
        position: relative;

        :before {
            content: "";
            height: 1px;
            width: 500px;
            background-color: rgba(255, 255, 255, 0.5);
            position: absolute;
            top: 50%;
            left: -530px;
            transform: translateY(-50%);
            z-index: -1;
        }
    }
`




export const NavMenuLink = styled(Link)`
    background: transparent;
    color: var(--white);
    font-family: var(--ff-barlow-cond);
    font-size: 18px;
    letter-spacing: 2.7px;
    text-align: left;
    margin-bottom: 2.7rem;
    cursor: pointer;
    border: none;
    border-right: ${({$iscurrentpage}) => ($iscurrentpage ? "5px solid #ffffff" : "5px solid transparent")};
    outline: none;
    transition: all 250ms ease-in-out;

    span {
        color: #d6d6d6;
        margin-right: 0.1rem;
    }

    @media screen and (orientation: landscape) {
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 360px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width:768px) {
        font-size: 1.15rem;
        margin-bottom: 0;
        margin-right: 2.5rem;
        border-right: none;
        border-bottom: ${({$iscurrentpage}) => ($iscurrentpage ? "4px solid #ffffff" : "4px solid transparent")};
        padding: 2rem 0;

        span {
            display: none;
        }
    }

    @media screen and (min-width: 960px) {
        margin-right: 3.5rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.3rem;
        margin-right: 4rem;
        padding: 1.7rem 0;

        span {
            display: inline-block;
        }

        :focus {
            border-bottom: 4px solid #b1afaf;
        }
    }

    :hover {
        border-bottom: 4px solid #b1afaf;
    }
`