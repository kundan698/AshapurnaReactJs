import React, { useState } from 'react'
import Header from '../Header'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { questions } from '../../Commercial Folder/Faq';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import 'animate.css';
import Footer from '../Footer';

export default function ContactUs() {
    let [AnsId,setId]=useState(questions[0].id)
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / Contact Us</h5>
           <h4>Contact US</h4>
           </div>
            

        </section>
        <section className='container-fluid mt-5 p-4 animate__animated animate__slideInUp'>
            <div className="container">
                <div className="even text-center">
                    <h2>Get In Touch</h2>
                    <p>To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                </div>
                <div className="row gy-5">
                    <div className="col-lg-4">
                        <div className='d-flex mail gap-2 align-content-center gaps'>
                          <p className='inbox'><MdEmail  /></p>
                          <h5>Email
                          <p className='text-white'>marketing@ashapurna.com</p>
                            </h5> 
                          
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='d-flex mail gap-2 align-content-center gaps'>
                          <p className='inbox'><FaLocationDot /></p>
                          <h5>Address
                          <p className='text-white'>-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD,
                          OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</p>
                            </h5> 
                          
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='d-flex mail gap-2 align-content-center gaps'>
                          <p className='inbox'><FaPhoneAlt /></p>
                          <h5>Support
                          <p className='text-white'>956235126-+180000453 <br />22345-67899</p>
                            </h5> 
                          
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid my-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.486915048!2d73.03463707412364!3d26.278310787068033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f34ed8648e03%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sin!4v1722149085262!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <form class="row g-3" id='fnl'>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
                      </form>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 '>
            <div className='even text-center'>
                 <h2>Frequently Asked Questions</h2>
            </div>
            <div className="container">
                {questions.map((item,index)=>{
                    return(
                        <div className='border m-3'>
                        <h4 onClick={()=>setId(item.id)} className='p-3 text-secondary m-0 position-relative ' id='csr'>
                            {item.question} {item.id==AnsId ? <FaMinusSquare className='position-absolute end-0 '/> : <FaPlusSquare className='position-absolute end-0'/>}
                            </h4>
                        <div className={`ans ${item.id==AnsId ? 'showAns': ''}`}>
                        {item.answer}
                        </div>
                    </div>
                    )
                })}
               

            </div>

        </section><br />
        <Footer/>
    </div>
  )
}
