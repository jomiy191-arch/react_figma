import React from 'react'
import Image from "../Servisec/images/images.svg"
import "./Services.css";

const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='services__container'>
             <ul>
              <li>
                <h1>We serve clients with ground breaking solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                <button>Work With Us</button>
              </li>
              <li><img src={Image} alt="" /></li>
             </ul>
        </div>
      </div>
    </div>
  )
}

export default Services