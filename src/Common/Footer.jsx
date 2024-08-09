import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



export default function Footer() {
  return (
    <div>
        <footer className='container-fluid mt-5 animate__animated animate__slideInUp' id='foot'>
            <div className="container">
                <div className="row fulls" >
                    <div className="col-lg-4 bl" >
                        <div>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg" alt="" className='w-25'/>
                        </div>
                        <div className='text-white fa-icon '>
                           <p><span><FaPhone /></span>98567345 456789224 </p>
                           <p><span><MdEmail /></span> marketing@gmail.com</p>
                           <div className=' '>
                           <p><span><FaLocationDot /></span>-,4A East Patel nagar  <br /></p>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-8" id='line'>
                        <div className='text-white bdrline'>
                            <h5>Useful Links
                                <div className="half"></div>
                            </h5>
                            <p>Residential Project | Commercial Project  |  Investor club  | NRI Corner  | Career | Became a Partner | Our Testimonial | Privacy Policy | Terms $ Conditions</p>
                            <h5>Important Links
                            <div className="half"></div>
                            </h5>
                            <p>Social Responsbility | Corporate Profile | why invest in Jodhpur ? | RERA Desclaimer  | EMI Calculator  | Refferal Scheme</p>
                        </div>
                    </div>
                </div>
                <div className=' text-center text-white mt-3'>
                    <h5>Follow us On</h5>
                    <div className='d-flex justify-content-center gap-4 Social-icon'>
                    <p><FaFacebookF /></p>
                    <p><FaInstagram /></p>
                    <p><FaTwitter /></p>
                    <p><FaYoutube /></p>
                    <p><FaLinkedinIn /></p>
                    </div>





                </div>
            </div>
            

        </footer>
        <section className='container-fluid my-5'>
            <div className="container">
                <div className="row">
                    <div className="col btnborder">
                       <div className='d-flex justify-content-center gap-4 finals'>
                       <p>Real Estate Developer in Jodhpur</p>
                       <p>|</p>
                       <p>Top Builders in Jodhpur</p>
                       <p>|</p>
                       <p>Top Residential Project in Jodhpur</p>
                       <p>|</p>
                       <p>Commercial Property in Jodhpur</p>
                       </div>

                       <div className='d-flex justify-content-center gap-4 finals'>
                       <p>Houses in Rajsthan</p>
                       <p>|</p>
                       <p>Flats in Jodhpur</p>
                       <p>|</p>
                       <p>Top Residential Project in Jodhpur</p>
                       <p>|</p>
                       <p>Villas in Jodhpur</p>
                       <p>|</p>
                       <p>Plots in Jodhpur</p>
                       </div>
                       <div className='d-flex justify-content-center gap-4 finals'>
                       <p>2BHK Flats in Jodhpur</p>
                       <p>|</p>
                       <p>JDA Property in Jodhpur</p>
                       <p>|</p>
                       <p>Property type</p>
                       <p>|</p>
                       <p>Commercial Property in Jodhpur</p>
                       </div>
                    </div>

                    
                </div>
            </div>

        </section>

        <section className='container-fluid my-2'>
            <div className='text-center text-secondary'>
                <p>The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute <br /> a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, <br /> if so warranted.</p>
            </div>
           

        </section>
        <section className='bg-primary p-0'>
        <div className='text-white text-center pt-3 fs-9 p-2'>
                <p>Copyright © 2023 Ashapurna Buildcon Limited</p>
            </div>

        </section>
    </div>
  )
}
