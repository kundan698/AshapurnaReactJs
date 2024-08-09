import React, { useContext } from 'react'
import Carousel from './Carousel'
import Header from './Common/Header'
import SimpleSlider from './Common/Carousel1'

import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Carousel2 from './Common/Carousel folder/Carousel2';
import { RiTimerFill } from "react-icons/ri";
import Carousel3 from './Common/Carousel folder/Carousel3';
import Footer from './Common/Footer';
import 'animate.css';
import Modal1 from './Modal/Modal1';
import Modal2 from './Modal/Modal2';
import Modal3 from './Modal/Modal3';
import Modal4 from './Modal/Modal4';
import Slider from 'react-slick';
import { ContextData } from './Contest/Context';


export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplayTimeout:100,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
      
    
  return (
    <div>
        {/* modal start */}

     
        <Modal1/>
        <Modal2/>
        <Modal3/>
        <Modal4/>



        {/* modal colsed */}
        
        <Header/>
        <Carousel/>

        <section className='container-fluid mt-5' >
          
            <div className="container animate__animated animate__slideInUp" id='connect'>
            <div className='row'>
                <div className="col-lg-10"  id='count'>
                     <div>
                        <div className="row">
                            <div className="col">
                                <div className='text-center p-2'>
                                    <div className='bg-white text-center p-4 m-2 rounded'>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png" alt="" className='img-fluid'/>
                                    </div>
                                    <div className='units'>
                                    <h5>27+</h5>
                                    <p>Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className='text-center p-2'>
                                    <div className='bg-white text-center p-4 m-2 rounded'>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg" alt="" className='w-75'/>
                                    </div>
                                   <div className='units'>
                                   <h5>40+</h5>
                                   <p>Projects</p>
                                   </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className='text-center p-2'>
                                    <div className='bg-white text-center p-4 m-2 rounded'>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/happy.png" alt=""className='img-fluid' />
                                    </div>
                                  <div className='units'>
                                  <h5>50000+</h5>
                                  <p>Happy Familie</p>
                                  </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className='text-center p-2'>
                                    <div className='bg-white text-center p-4 m-2 rounded'>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/measuring-tape.png" alt="" className='img-fluid'/>
                                    </div>
                                  <div className='units'>
                                  <h5>36+</h5>
                                  <p>Lakh Sq.Ft Delivered</p>
                                  </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className='text-center p-2'>
                                    <div className='bg-white text-center p-4 m-2 rounded'>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/units.png" alt="" className='img-fluid'/>
                                    </div>
                                    <div className='units'>
                                    <h5 className=''>12000+</h5>
                                    <p>Units</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
                <div className="row gap-4">
                    <div className="col-lg-5 ">
                        <div>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/aboutus.webp" alt=""  className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className='mt-3'>
                            <h5>About Us</h5>
                            <h2>Welcome to Ashapurna</h2>
                            <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                           <p>In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.</p>
                        </div>

                      

                        
                    </div>
                   
                </div>
            </div>

        </section>
       

        <section className='container-fluid animate__animated animate__slideInUp' id='backimg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 why">
                        <div className=''>
                            <h5>WHY US</h5>
                           <h1>Why Ashapurna Is <br /> The Best Choice?</h1>
                           <p>We are the leading Real Estate Developer in Rajasthan, offering an unparalleled property development experience with a proven track record of excellence and a commitment to customer satisfaction, For those who are seeking quality, affordability, and reliability we are the perfect choice whether you're looking for a Dream Home or a thriving commercial space, Ashapurna Buildcon has the expertise, resources, and dedication to make your dream into a reality.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <div className="row gy-5">
                                <div className="col-lg-5">
                                    <div className='wht'>
                                        <div className="squares"></div>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg" alt="" className=''/>
                                       <h3>Property Care Service
                                        <div className="borders"></div>
                                       </h3>
                                       <p>We take care of your home like a true custodian. Our support team...</p>
                                       <button type="button" class="btn bgmore" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                      Read More
                                       </button>
                                    </div>


                                    <div className='wht'>
                                        <div className="squares"></div>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg" alt="" className=''/>
                                       <h3>Transparent Dealing
                                        <div className="borders"></div>
                                       </h3>
                                       <p>We practice all transparency of the highest order to deal with our...</p>
                                       <button type="button" class="btn bgmore" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                      Read More
                                       </button>
                                    </div>
                                  </div>
                                 <div className="col-lg-5">
                                       <div className='wht'>
                                        <div className="squares"></div>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg      " alt="" className=''/>
                                       <h3>Hospitality
                                        <div className="borders"></div>
                                       </h3>
                                       <p>A warm welcome to our valuable customers is what we take on as</p>
                                       <button type="button" class="btn bgmore" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                      Read More
                                       </button>
                                    </div>


                                    <div className='wht'>
                                        <div className="squares"></div>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg" alt="" className=''/>
                                       <h3>Sustainable Homes

                                        <div className="borders"></div>
                                       </h3>
                                       <p>In the present world, Our Aim is to deliver environmental - friendly</p>
                                       <button type="button" class="btn bgmore" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                                      Read More
                                       </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid feature' >
            <div className="container">
              <div className='p-5'>
              <h5 className=''>OUR WORK </h5>
              <h1>Featured Project</h1>
              </div>
               
              <SimpleSlider/>
                  
                    
               
            </div>
           

        </section>
        <section className='container-fluid my-5 animate__animated animate__slideInUp' id='ready'>
            <div className="container">
             <div className='mt-5'>
                <h5 className='pt-5 animate__animated animate__slideInUp'>PROJECT OVERVIEW</h5>
                <h1 className='animate__animated animate__slideInUp'>Ready & Nearing Completion Projects</h1>
                <p>Meticulously crafted and emotionally designed, Ashapurna villas & flats are the perfect place to be in. A <br /> lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest <br /> achievement.</p>
             </div>

             <div className="row gy-5">
                <div className="col-lg-4">
                    <div className='pd'>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp" alt=""  className='img-fluid'/>
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp" alt=""  className='img-fluid'/>
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
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/nanomax-project-thumbnail-1681986809.webp" alt=""  className='img-fluid'/>
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

        <section className='container-fluid animate__animated animate__slideInUp' id='caro'>
            <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                        <div >
                         <h5 className='orng'>our testimonial</h5>
                        <h1 className='text-white'>What They're <br /> Saying About <br /> Ashapurna?</h1>
                        <p className='text-white'>From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.</p>
                        <button className='seeall'>See All</button>
                        </div>
                    </div>
                    <div className="col-lg-8" id='komal'>
                        <div>
                            <Carousel2/>
                        </div>
                   </div>

                  </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className='d-flex justify-content-between mt-5'>
                    <h2>Media And Event</h2>
                    <button className='seeall mb-5'>See All</button>

                </div>
               <div>
               {/*  <div className="row gy-5 mt-5">
                 
                  <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/fathers_day_event_banner_(1)-1718615796.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/holi_media_event_banner_(1)-min-1712380592.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                    </div>

                 
                
                 
                </div> */}
                <Slider {...settings} id="slides">
                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>
                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/holi_media_event_banner_(1)-min-1712380592.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>
                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/fathers_day_event_banner_(1)-1718615796.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>

                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/27_Years_of_Ashapurna_Buildcon-1703489618.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>
                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/mb-bhoomi-pujan_(1)-1702901251.webp" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>
                   <div>
                   <div className=' bdr mx-4'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/NRI-Bhumi-pujan-event-banner_(1)-1702545583-1709558420.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p> <FaLocationDot />Ashapurana Buildcon</p>
                                <p><RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                   </div>
                </Slider>
               </div>
            </div>

        </section>
       
        <Footer/>
    </div>
  )
}
