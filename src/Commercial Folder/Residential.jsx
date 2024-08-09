import React, { useState } from 'react'
import Header from '../Common/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Footer from '../Common/Footer';

export default function Residential() {
    let [Content,SetContent]=useState(false)
    let myfunc = ()=>{

    }
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / Residential</h5>
           <h4>Ashapurna projects</h4>
           </div>
            

        </section>
        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className='even p-4 text-center'>
                    <h2>Residential Projects</h2>

                </div>
                <div className='d-flex justify-content-center gap-5 resi'>
                  <p><a href="">Residential</a></p>
                  <p><a href="">Commercial</a></p>
                  <p><a href="">Hospitality</a></p>
                  <p><a href="">Education</a></p>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
           <div className='mt-5 text-center'>
          

           </div>
           <div className="container">
           <div className="row">
                <div className="col-lg-4">
                    <div className='pd'>
                    <div className='colors'>
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
                <div className='color'>
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
                <div className='colors1'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp" alt=""  className='img-fluid'/>
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


                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/aangan-1709040529.jpg" alt=""  className='img-fluid'/>
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

                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-budget-villas-in-jodhpur-1681994380.webp" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='color'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/premium-township-in-pachpadra-1681987454.webp" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors1'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/kundan-villa-3-bhk-villa-in-jodhpur-1681985981.webp" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors'>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='color'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/WhatsApp_Image_2022-08-28_at_12.52.52_PM-1703911455.jpeg" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/Gate_-_4-min-1716280216.jpg" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors1'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/Copy_of_60-90_Unit_cam-02-min-1706710743.JPG" alt=""  className='img-fluid'/>
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
                <div className="col-lg-4 mt-4">
                <div className='pd'>
                <div className='colors'>
                            <p>Few minute let</p>
                        </div>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/orchard-1714653364.jpg" alt=""  className='img-fluid'/>
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

        </section><br />
        <Footer/>
    </div>
  )
}
