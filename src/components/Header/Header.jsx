import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu.jsx";
import logo from '/src/assets/logo.png'
import styles from './Header.module.scss'

const Header = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowBurgerMenu(false);
    }, [location]);

    const pages = [
        {label: 'Characters', url: '/'},
        {label: 'Locations', url: '/locations'},
        {label: 'Episodes', url: '/episodes'},
    ]

    return (
        <header className={styles.header}>
            <div className={`${styles.header__row} container`}>
                <Link to="/" className={styles.header__logo}>
                    <img src={logo} alt=""/>
                </Link>
                <div className={`${styles.header__nav} ${showBurgerMenu ? styles.header__nav__open : ''}`}>
                    <ul className={styles.header__nav__list}>
                        {pages.map(({label, url}) => (
                            <li className={styles.header__nav__item} key={label}>
                                <Link to={url}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <BurgerMenu status={showBurgerMenu} onClick={() => setShowBurgerMenu((prev) => !prev)}/>
            </div>
        </header>
    );
};

export default Header;