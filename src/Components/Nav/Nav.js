import React, { useState } from 'react';
import { NavWrapper, NavLogo, OpenMobileMenu, NavListWrapper, CloseMobileMenu, NavMenuList, NavMenuLink } from "./NavStyle";

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../Features/activePageSlice';


function Nav() {

    // State.
    const [ mobileMenu, setMobileMenu ] = useState(false);

    // Redux state & dispatch.
    const currentPage = useSelector(state => state.currentPage.page);
    const dispatch = useDispatch();



    // Toggle mobile menu.
    const openMobileMenu = () => {
        setMobileMenu(true);
    };

    const closeMobileMenu = () => {
        setMobileMenu(false);
    };
    



    

    return (
        <NavWrapper>
            <NavLogo src="./assets/shared/logo.svg" alt="Logo" />
            <OpenMobileMenu onClick={openMobileMenu} showOpenElement={mobileMenu} src="./assets/shared/icon-hamburger.svg" alt="Open Mobile Menu" />
            <NavListWrapper mobileMenu={mobileMenu}>
                <CloseMobileMenu onClick={closeMobileMenu} showCloseElement={mobileMenu} src="./assets/shared/icon-close.svg" alt="Close Mobile Menu" />
                <NavMenuList>
                    <NavMenuLink to="/" onClick={() => dispatch(changePage("home"))} $iscurrentpage={currentPage === "home" ? true : false}><span>00</span> HOME</NavMenuLink>
                    <NavMenuLink to="/destination" onClick={() => dispatch(changePage("destination"))} $iscurrentpage={currentPage === "destination" ? true : false}><span>01</span> DESTINATION</NavMenuLink>
                    <NavMenuLink to="/crew" onClick={() => dispatch(changePage("crew"))} $iscurrentpage={currentPage === "crew" ? true : false}><span>02</span> CREW</NavMenuLink>
                    <NavMenuLink to="/technology" onClick={() => dispatch(changePage("technology"))} $iscurrentpage={currentPage === "technology" ? true : false}><span>03</span> TECHNOLOGY</NavMenuLink>
                </NavMenuList>
            </NavListWrapper>
        </NavWrapper>
    )
}

export default Nav;