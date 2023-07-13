import React, { useState } from 'react'
import hamburgerMenu from '../assets/images/icon-hamburger.svg'
import logo from '../assets/images/logo.svg'
import close from '../assets/images/icon-close.svg'
import './styles/Header.css'

const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleClose = () => {
        setMenu(!menu)
    }

    return (
        <header className='header h-24 w-full flex items-center px-16 gap-10 2xl:px-28 2xl:gap-24'>

            <div className='md:hidden'>
                <img src={hamburgerMenu} className='w-6' alt="" onClick={handleMenu} />
            </div>

            <div className='logo flex justify-center'>
                <img className='w-24 2xl:w-32' src={logo} alt="" />
            </div>

            <div className={!menu ? "navbar" : "show-menu"}>
                <div className='md:hidden'>
                    <img src={close} onClick={handleClose} alt="" />
                </div>
                <div>
                    <ul className='navbar-list flex flex-row gap-7 text-white 2xl:gap-12'>
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>

            </div>


        </header>
    )
}

export default Header