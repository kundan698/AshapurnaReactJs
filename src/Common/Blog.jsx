import React from 'react'
import Header from './Header'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";




export default function Blog() {
  return (
    <div>
        <Header/>
        
        <section className='container-fluid mt-5'>
        
            <div className="container">
                <img src="https://ashapurna.com/blog/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-17.59.29.jpeg" alt="" className='img-fluid'/>
                
                <div className='p-4 even'>
                    <h2>Independent Houses and Apartments in Jodhpur</h2>
                    <p>Independent houses and apartments in Jodhpur stand out as the two most popular choices for homebuyers. Ashapurna Buildcon, a leading real estate developer in Jodhpur, recognizes the importance of understanding the pros and cons of both these housing types to make an informed decision. This comprehensive guide aims to explore the various aspects of independent...</p>

                   <div className='d-flex gap-5 socials'>
                   <p ><FaFacebookF className='face'/>
                    </p>
                    <p><FaTwitter  className='twit'/>
                    </p>
                    <p ><FaLinkedinIn className='linkd'/>
                    </p>
                    <p><FaWhatsapp  className='whats'/>
                    </p>
                   </div>
                </div>
            </div>

        </section>
    </div>
  )
}
