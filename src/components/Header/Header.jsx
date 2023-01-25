import React from 'react'

import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-menu.svg'
import iconMenuClose from '../../assets/images/icon-menu-close.svg'
import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="Logo"/>
            </div>

            <div className='header-nav'>
                <input type='checkbox' id='header-nav__input'/>
                
                <nav className='header-nav__pc'>
                    <ul className='header-nav__pc-list'>
                        <li className="header-nav__pc-item">Home</li>
                        <li className="header-nav__pc-item">New</li>
                        <li className="header-nav__pc-item">Popular</li>
                        <li className="header-nav__pc-item">Trending</li>
                        <li className="header-nav__pc-item">Categories</li>
                    </ul>
                </nav>

                <label for='header-nav__input' className='header-nav__menu-btn'>
                    <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
                </label>

                <label for='header-nav__input' className='header-nav__overlay'></label>

                <nav className='header-nav__mobile'>
                    <label for='header-nav__input' className='header-nav__close-btn'>
                        <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
                    </label>
                    <ul className='header-nav__mobile-list'>
                        <li className="header-nav__mobile-item">Home</li>
                        <li className="header-nav__mobile-item">New</li>
                        <li className="header-nav__mobile-item">Popular</li>
                        <li className="header-nav__mobile-item">Trending</li>
                        <li className="header-nav__mobile-item">Categories</li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header