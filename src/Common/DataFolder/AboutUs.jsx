import React from 'react'
import Header from '../Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Footer from '../Footer';

export default function AboutUs() {
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / ABOUT US</h5>
           <h4>ABOUT US</h4>
           </div>
            

        </section>

        <section className='container-fluid mt-5 p-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                          <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ashapurna-buildcon-corporate-office-1707809920.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <h5>About us</h5>
                            <h1>Welcome to Ashapurna</h1>
                            <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 42+ projects and has delivered 40+ projects spanning 75,00,000 square feet, housing more than 27,500 smiling and satisfied faces.</p>
                            <p>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the Top 5 real estate companies tn Rajasthan  In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__slideInUp'>
            <div className="container" id='years'>
                <div className="row d-flex justify-content-around ">
                    <div className="col-lg-2 pt-5">
                        <div className='bg-white mt-5 bd'>
                            <img src=" https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/experience-check.svg" alt="" className=''/>
                           
                        </div>
                       <div className='bd1 text-white'>
                       <h5>27+</h5>
                       <p>Years of Experience</p>
                       </div>
                    </div>
                    <div className="col-lg-2 pt-5">
                    <div className='bg-white mt-5 bd'>
                            <img src=" https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/villas-completed.svg" alt="" className='w-75'/>
                           
                        </div>
                        <div className='bd1 text-white'>
                        <h5>40+</h5>
                        <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-lg-2 pt-5">
                    <div className='bg-white mt-5 bd'>
                            <img src=" https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/happy.svg" alt="" className=''/>
                            
                        </div>
                        <div className='bd1 text-white'>
                        <h5>27500+</h5>
                        <p>Happy Families</p>
                        </div>
                    </div>
                    <div className="col-lg-2 pt-5">
                    <div className='bg-white mt-5 bd'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/units.svg" alt="" className=''/>
                           
                        </div>
                        <div className='text-white bd1'>
                        <h5 className=''>12000+</h5>
                        <p className=''>Units of Target</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
           <div className='mt-5 text-center'>
           <h2>Feature Projects</h2>

           </div>
           <div className="container">
           <div className="row">
                <div className="col-lg-4">
                    <div className='pd'>
                        <div className='color'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/WhatsApp_Image_2022-08-28_at_12.52.52_PM-1703911455.jpeg" alt=""  className='img-fluid'/>
                        <div className="near">
                            <div className='d-flex gap-2 icon'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp" alt="" />
                                <h5>Ashapurna Amol I,II</h5>
                               
                            </div>
                            <div>
                            
                            <p><FaLocationDot /> Near new high cout,jodhpur</p>
                           <div className='d-flex gap-2 justify-content-between' id='opct' >
                             <p className='op'><FaHome /> Few unit left</p>
                             <button className='all op'>see all</button>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className='pd'>
                <div className='colors'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-empire-flats-in-jaipur-1681995100.webp" alt=""  className='img-fluid'/>
                        <div className="near">
                            <div className='d-flex gap-2 icon'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-phase-ii-logo-1677495521.webp" alt="" />
                                <h5>Ashapurna Amol I,II</h5>
                               
                            </div>
                            <div>
                            
                            <p><FaLocationDot /> Near new high cout,jodhpur</p>
                           <div className='d-flex gap-2 justify-content-between' >
                             <p><FaHome /> Few unit left</p>
                             <button className='all'>see all</button>
                           </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-4">
                <div className='pd'>
                        <div className="colors1">
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-heritage-buy-villa-in-jodhpur-1681985498.webp" alt=""  className='img-fluid'/>
                        <div className="near">
                            <div className='d-flex gap-2 icon'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-nanomax-ii-logo-1677494586.webp" alt="" />
                                <h5>Ashapurna Amol I,II</h5>
                               
                            </div>
                            <div>
                            
                            <p><FaLocationDot /> Near new high cout,jodhpur</p>
                           <div className='d-flex gap-2 justify-content-between' >
                             <p><FaHome /> Few unit left</p>
                             <button className='all'>see all</button>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>

        </section>

        <section className='container-fluid clrs animate__animated animate__slideInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='bg-white mt-3'>
                           <div className="row">
                            <div className="col-lg-4">
                              <div className='imgsr p-3'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourvision.png" alt="" className='img-fluid'/>
                              </div>
                            </div>
                            <div className="col-lg-8">
                                <div className='p-3 vision'>
                                    <h5>Our Vision</h5>
                                    <p>To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className='bg-white mt-3'>
                           <div className="row">
                            <div className="col-lg-4">
                              <div className='imgsr p-3'>
                                <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/ourmission.png" alt="" className='img-fluid'/>
                              </div>
                            </div>
                            <div className="col-lg-8">
                                <div className='p-3 vision'>
                                    <h5>Our Vision</h5>
                                    <p>To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 pnds animate__animated animate__slideInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 ">
                        <div className='fldse'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why-invest-in-jodhpur/why-invest--in-jodhpur.jpg" alt="" className='' />
                            <div className="ment">
                                <div>
                                    <h2>Our Achievement</h2>
                                    <p>“Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”</p>
                                    <p>Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director</p>
                                </div>
                            </div>

                        </div>
                       
                    </div>
                   
                </div>
            </div>


        </section> <br />
       <Footer/>
    </div>
  )
}
