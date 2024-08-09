import React from 'react'
import Header from '../Common/Header'
import { FaLocationDot } from "react-icons/fa6";
import { RiTimerFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import Footer from '../Common/Footer';

export default function BhumiPujan() {
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / Medi & Events</h5>
           <h4>Media & Events</h4>
           </div>
            

        </section>

        <section className='container-fluid mt-5'>
            <div className='even text-center'>
                <h2>Ashapurna Events</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div>
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera_event_banner-1698994780.webp" alt="" className='img-fluid'/>
                          <div className='even p-2'>
                            <h2>Mandir's Bhoomi Poojan At Ashapurna Basera</h2>
                            <div className='d-flex gap-3'>
                               <p><RiTimerFill  className='text-dark m-2 fs-6'/>2024-07-16</p>
                               <p><FaLocationDot className='text-dark m-2 fs-6'/>Jodhpur</p> <br />
                            
                            </div>
                            <p>We recently celebrated the vibrant monsoon season with a lively and engaging event. Our Monsoon Activity brought us together for a day filled with fun, camaraderie, and a true sense of community. Highlights included games, and delicious refreshments, all set against lush green surroundings and the refreshing monsoon drizzle. The event was a perfect blend of enjoyment and connection, leaving everyone with cherished memories and a renewed appreciation for the beauty of the rainy season.</p>
                            <h4>Highlights</h4>
                           
                           <div className="row">
                            <div className="col-lg-4">
                            <div className='d-flex gap-2' id='showse'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera-post-02-1698994780.webp" alt="" />
                                <div className="alls">
                                    <button id='views'>View</button>
                                </div>
                               
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className='d-flex gap-2' id='showse'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera_post_05-1698994780.webp" alt="" />
                                <div className="alls">
                                    <button id='views'>View</button>
                                </div>
                               
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className='d-flex gap-2' id='showse'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera_post_04-1698994781.webp" alt="" />
                                <div className="alls">
                                    <button id='views'>View</button>
                                </div>
                               
                            </div>
                            </div>
                           </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='evens'>
                            <h4>Recent Events</h4>
                            <p><FaArrowRight className='tt'/>Monsoon Magic with Ashapurna Buildcon</p>
                            <p><FaArrowRight  className='tt'/>Father's Day Celebration</p>
                            <p><FaArrowRight  className='tt'/>World Environment Day 2024</p>
                            <p><FaArrowRight  className='tt'/>Best Realty Brand of 2024 | Ashapurna </p>
                            <p><FaArrowRight  className='tt'/>Holi Celebration at Ashapurna</p>
                            <p><FaArrowRight  className='tt'/>Happy Republic Day from the Ashapurna</p>
                            <p><FaArrowRight  className='tt'/>Exciting moments at the Ashapurna  </p>
                            <p><FaArrowRight  className='tt'/>27 Years of Trust, Commitment and Success</p>
                            <p><FaArrowRight  className='tt'/>Ashapurna MohanBagh Bhoomi Poojan</p>
                            <p><FaArrowRight  className='tt'/>Bhumi Poojan Of Club House At Ashapurna </p>

                            <div className='evens'>
                                <h4>Upcoming Projects</h4>
                                <p><FaArrowRight  className='tt'/>Ashapurna Anmol</p>


                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

        </section><br />
       <Footer/>
    </div>
  )
}
