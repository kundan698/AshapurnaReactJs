
import React from "react";
import Slider from "react-slick";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { IoMdArrowDropdown } from "react-icons/io";

export default function Carousel() {
    const notify = () => toast.success("Sent Successfully!...");
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplayTimeout:10,
      };
      return (
        
             
            <>

                <section className="container-fluid mt-1 animate__animated animate__slideInUp" id="connect">
                    <div className="container" id="main">
                        <div className="row">
                            <div className="col-lg-12">
                            <Slider {...settings}>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/27_years_banner-1707801303-min-1709554234.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/nri_web_banner__02_(1)-1707805022_(1)-1709555299.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/awards_banner-min-1714394299.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/anmol_web_banner-1707802057_(1)-1709555545.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/aangan_we_banner_amenities-1707804641_(1)-1709555985.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/mb_web_banner__04-1707802768-min_(1)-1709554927.jpg" alt=""  />
                  </div>
                  <div className="imgs">
                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/basera_web_banner-1707802125_(1)-1709555752.jpg" alt=""  />
                  </div>
                             </Slider>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="container-fluid my-1 animate__animated animate__slideInUp">
                    <div className="container">
                       
                           <div className="row p-4 gy-2" id="box">
                            <div className="col-lg-2 bdr" >
                                <div >
                                    <input type="name"  placeholder="name"/>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <input type="email" placeholder="email"/>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <input type="tel"  placeholder="phone"/>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div>
                               
                                    <select name="" id="" className="" >
                                        
                                        <option value="" className="">Select Property</option>
                                        <option value="" className="">Ashapurna velleyorchard</option>
                                        <option value="" className="">Ashapurna NRI</option>
                                        <option value="" className="">Institute of Ashapurna</option>
                                        <option value="" className="">Park On ground Floor</option>
                                        <option value="" className="">Multiples Games</option>
                                        <option value="" className="">Standarad Facility</option>

                                        <option value="" className="">Visit my Location</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <input type="text" placeholder="Explain your Query"/>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                   <button onClick={notify}>Submit</button>
                                </div>
                            </div>
                           </div>
                       
                    </div>

                </section>
                <ToastContainer />
            </>
           
       
        
      );
    
  }

  /* 
    <div>
                     
                 <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-nri-home-page-image-1676441428.webp" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='brands d-flex gap-3'>
                           <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" alt="" />
                           <h1>Aashapurna NRI</h1>
                        </div>
                        <p>Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture villas in Jodhpur with 5-star luxury amenities like club house full of activities...</p>
                        <div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className='d-flex gap-3 area'>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg" alt="" />
                                        <p><span>AREA</span> <br /> Approved</p>
                                       
                                    </div>
                                   
                                </div>
                                <div className="col-lg-4">
                                <div className='d-flex gap-3 area'>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/15817f06-ef1a-459b-becc-0b68c0b42536-1668412016.svg" alt="" />
                                        <p><span>AREA</span> <br /> 120 Acres</p>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                <div className='d-flex align-content-center gap-3 area'>
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6e5c01b8-441c-432a-b37c-b78eed34e52b-1668412038.svg" alt="" />
                                        <p><span>AVAILABLITY</span>  Residental Plots</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
  
  */


                 /* 
                  <div>
                        <div className='text-center p-4'>
                       <h5>Ms. Komal Bhati</h5>
                       <p>Ashapurna Anml</p>
                       </div>
                       <div className='round'>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.39.54-1706353576.jpeg" alt="" />
                        <p>I found my dream home with Ashapurna Anmol. When I contacted them, it turned out to be a great decision. My family and I live happily in the home we always wanted. The Ashapurna Buildcon team made it easy and special for us.</p>
                        
                       </div>
                       <div className='comma'>
                            <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                        </div>
                        </div>
                 
         
                         */
                        /* 
                        <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p><FaLocationDot />Ashapurana Buildcon</p>
                                <p> <RiTimerFill />20204-04-23</p>
                            </div>
                        </div>
                    </div>
                        
                        
                        
                        
                        */
