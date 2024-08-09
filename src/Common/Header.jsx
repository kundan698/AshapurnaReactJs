import React, { useContext, useState } from 'react'
import Modals from '../Modal/Modals'
import { FaShareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { ContextData } from '../Contest/Context';

export default function Header() {
  const notify = () => toast.success("welcome to our website");
  let [change,setoverlay]=useState(false)
  let func = ()=>{
    setoverlay(!change)
  }
  let {Count,setCount}=useContext(ContextData)
  return (
   
    <>
      {change ?  <Modals change={change} setoverlay={setoverlay}/> : ''}

      <div className='mode' onClick={func}>
       enquire
      </div>
      <div className='share'>
       <a href="#connect">
        <FaShareAlt />
       </a>
      </div>
      <div className='whatsapp'>
        <a href="#connect"><p><FaWhatsapp /></p></a>
      </div>
        <nav class="navbar navbar-expand-lg navbar-light shdw">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp" alt=""  className='wth'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end align-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav mx-5" id='ulData'>
        <li class="nav-item">
          <Link to={'/'} class="nav-link active" aria-current="page" >Home
          <div className="effects"></div>
          
          </Link>
        </li>
        <li class="nav-item">
        <button onClick={()=>setCount(Count+1)}>Visit</button>
          <a class="nav-link" href='#'>About Us <MdOutlineArrowDropDown />
          <div className="effects"></div>
            <div className="menubar">
              <p><Link to={'/About-us'}>About Us({Count})</Link></p>
              <p><a href="">Our Journey</a></p>
              <p><Link to={'/management-speaks'}>Management Speaks</Link></p>
              <p><Link to={'/our-team'}>Our Team</Link></p>
              <p><Link to={'/social-responsbility'}>CSR Social Responsbility</Link></p>
              <p><Link to={'/Newsletter'}>News Letter</Link></p>
              <p> <Link to={'/Nri-corner'}> NRI Corner</Link></p>
              <p><a href="">Why invest in Jodhpur</a></p>
              </div>
            
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Project <MdOutlineArrowDropDown />
          <div className="effects"></div>
          <div className="menubar">
              <p><Link to={'/Residential'}>Residential</Link></p>
              <p><a href="">Commercial</a></p>
              <p><a href="">Rental & Rease</a></p>
              <p><a href="">Hospitallity</a></p>
              <p><a href="">Education</a></p>
              <p><a href="">WindMills</a></p>
              <p><a href="">NRI Township</a></p>
              <p><a href="">Upcoming Projects</a></p>
              </div>
          </a>
        </li>
        <li class="nav-item">
          <Link to={'/media & events'} class="nav-link " href="#" >Media & Events
          <div className="effects"></div>
          </Link>
           
       
        </li>
        <li class="nav-item">
          <Link to={'/Blog'} class="nav-link " onClick={notify}>Blog
          <div className="effects"></div>
         
          </Link>
           
       
        </li>
        <li class="nav-item">
          <Link to={'/contact-us'} class="nav-link "   >
          Contact Us
          <div className="effects"></div>
          </Link>
         
           
       
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" onClick={func} id='bnts'><button id='bnts'>Enquire</button></a>
           
       
        </li>
      </ul>
      <ToastContainer />
    </div>
  </div>
</nav>
    </>
  )
}
