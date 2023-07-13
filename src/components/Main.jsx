import React, { useEffect, useState } from 'react'
import './styles/Main.css'
import image1 from '../assets/images/desktop-image-hero-1.jpg'
import image2 from '../assets/images/desktop-image-hero-2.jpg'
import image3 from '../assets/images/desktop-image-hero-3.jpg'
import image1m from '../assets/images/mobile-image-hero-1.jpg'
import image2m from '../assets/images/mobile-image-hero-2.jpg'
import image3m from '../assets/images/mobile-image-hero-3.jpg'
import left from '../assets/images/icon-angle-left.svg'
import rigth from '../assets/images/icon-angle-right.svg'
import arrow from '../assets/images/icon-arrow.svg'




const Main = () => {

    const desktopImg = [
        {
            id: 1,
            image: image1,
            title: "Discover innovative ways to decorate",
            description: `We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.`
        },
        {
            id: 2,
            image: image2,
            title: "We are available all across the globe",
            description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`
        },
        {
            id: 3,
            image: image3,
            title: "Manufactured with the best materials",
            description: `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`
        }
    ]

    const mobileImg = [
        {
            id: 1,
            image: image1m
        },
        {
            id: 2,
            image: image2m

        },
        {
            id: 3,
            image: image3m
        }
    ]


    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    const prevImg = () => {
        setCurrentImgIndex((currentImgIndex - 1 + desktopImg.length) % desktopImg.length)
    }

    const nextImg = () => {
        setCurrentImgIndex((currentImgIndex + 1) % desktopImg.length)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImgIndex((currentImgIndex + 1) % desktopImg.length)
        }, 10000)
        return () => {
            clearTimeout(timer)
        }
    }, [currentImgIndex, desktopImg.length])

    return (
        <section className='mainRoom'>

            <div className='carouselDesktop'>
                <div className='imageGallery'>
                    <img src={desktopImg[currentImgIndex].image} alt="" />
                </div>
                <div className='buttonsm'>
                    <button onClick={prevImg} className='left bg-black cursor-pointer p-5'><img className="" src={left} alt="" /></button>
                    <button onClick={nextImg} className='rigth bg-black cursor-pointer p-5'><img src={rigth} alt="" /></button>
                </div>

            </div>

            <div className='carouselMobile'>
                <div className='imgMobile'>
                    <img src={mobileImg[currentImgIndex].image} alt="" />
                </div>
                <div className='buttonsm'>
                    <button onClick={prevImg} className='left bg-black cursor-pointer p-5'><img className="" src={left} alt="" /></button>
                    <button onClick={nextImg} className='rigth bg-black cursor-pointer p-5'><img src={rigth} alt="" /></button>
                </div>

            </div>

            <div className='info gap-2 2xl:gap-10 '>
                <h3 className='titleMain text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl'>{desktopImg[currentImgIndex].title}</h3>
                <p className='text-gray-400 md:text-sm xl:text-lg 2xl:text-2xl'>{desktopImg[currentImgIndex].description}</p>
                <div className='flex flex-row items-center gap-3'>
                    <div>
                        <h3 className='md:text-base lg:text-xl'>S H O P</h3>
                    </div>
                    <div>
                        <h3 className='md: text-base lg:text-xl'>N O W</h3>
                    </div>
                    <div className=''>
                        <img src={arrow} alt="" />

                    </div>

                </div>


            </div>

            <div className='buttons'>
                <button onClick={prevImg} className='left bg-black cursor-pointer'><img className="leftIcon" src={left} alt="" /></button>
                <button onClick={nextImg} className='rigth bg-black cursor-pointer '><img src={rigth} alt="" className='rigthIcon' /></button>
            </div>

        </section>
    )
}

export default Main