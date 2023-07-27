import React from 'react';
import Burger from "../../../assets/burger.svg"
import BurgerOpened from "../../../assets/burger_opened.svg"
import '../styles/uiStyles.scss'

const BurgerMenu = ({status, onClick}) => {
    return (
        <a className="ui__burger" onClick={onClick}>
            {status ? <BurgerOpened/> : <Burger/> }
        </a>
    );
};

export default BurgerMenu;