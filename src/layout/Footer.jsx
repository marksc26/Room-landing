import React from 'react'
import logo from '../assets/images/logogray.svg'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className='footer h-60 flex justify-center items-center'>

            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img className='w-28' src={logo} alt="" />
                </div>
                <div className='flex gap-4 mt-5'>
                    <i className='bx bxl-facebook-circle text-3xl text-gray-400 cursor-pointer'></i>
                    <i className='bx bxl-instagram text-3xl text-gray-400 cursor-pointer'></i>
                    <i className='bx bxl-twitter text-3xl text-gray-400 cursor-pointer'></i>
                </div>
            </div>

        </footer>
    )
}

export default Footer