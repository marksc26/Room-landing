import React from 'react'
import './styles/About.css'
import img1 from '../assets/images/image-about-dark.jpg'
import img2 from '../assets/images/image-about-light.jpg'


const About = () => {
    return (
        <section className='about'>

            <div className='darkImg'>
                <img src={img1} alt="" />
            </div>
            <div className='aboutInfo lg:p-3 xl:p-10'>
                <h3 className='text-3xl pb-2 2xl:text-5xl'>About our furniture</h3>
                <p className='text-gray-400 2xl:text-2xl'>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className='lightImg'>
                <img src={img2} alt="" />
            </div>

        </section>
    )
}

export default About