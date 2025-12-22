import React from 'react'
import Headers from "./images/header.svg"
import Logo2 from "./images/logo2.svg"
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about__container'>
                    <ul className='about__list'>
                        <li className='about__item'>
                            <h1 className='about__title'>Prosper with our bespoke solutions</h1>
                            <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                            <span>
                                <button>See our services</button>
                                <a href="#">See All Services </a>
                            </span>
                            <a href="#">Worked with 100+ Companies</a>
                            <img src={Headers} alt="" />
                        </li>
                        <li><img src={Logo2} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default About