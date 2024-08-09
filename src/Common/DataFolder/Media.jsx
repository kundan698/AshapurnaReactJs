import React from 'react'
import Header from '../Header'
import { FaLocationDot } from "react-icons/fa6";
import { RiTimerFill } from "react-icons/ri";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function Media() {
  return (
    <div>
      <Header/>
      <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / Medi & Events</h5>
           <h4>Media & Events</h4>
           </div>
            

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className='d-flex justify-content-between mt-5'>
                    <h2 className='text-center'>Utsav & Campus</h2>
                    <button className='seeall'>See All</button>

                </div>
               <div>
                <div className="row gy-5 mt-5">
                 
                  <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <Link to={'/world-environment'}  className='sub'>Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/basera_event_banner-1698994780.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                 <Link to={'/bhumi-pujan'}  className='sub'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/EVENT_TB_FOR_HERITAGE_-1700635451-1709558596.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/NRI-Bhumi-pujan-event-banner_(1)-1702545583-1709558420.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/mb-bhoomi-pujan_(1)-1702901251.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/27_Years_of_Ashapurna_Buildcon-1703489618.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/broker_event_banner-1705322081.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/broker_event_banner-1705322081.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/event_banner-1707809211-1709556516.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/award_event_banner-1714548695.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>

                     <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/fathers_day_event_banner_(1)-1718615796.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                                <button className='sub'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/holi_media_event_banner_(1)-min-1712380592.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot className='text-dark m-2'/>Ashapurana Buildcon</p>
                                <p><RiTimerFill  className='text-dark m-2'/>20204-04-23</p>
                                <p className='text-secondary'>We recently celebrated the vibrant monsoon season with a lively and</p>
                            </div>
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
