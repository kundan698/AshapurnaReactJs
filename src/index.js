import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Media from './Common/DataFolder/Media';
import AboutUs from './Common/DataFolder/AboutUs';
import Management from './Common/DataFolder/Management';
import Ourteam from './Common/DataFolder/Ourteam';
import SocialResponsbility from './Common/DataFolder/Social-Responsbility';
import Newsletter from './Common/DataFolder/Newsletter';
import NriCorner from './Common/DataFolder/NriCorner';
import Residential from './Commercial Folder/Residential';
import ContactUs from './Common/DataFolder/ContactUs';
import WorldEn from './MediaEventComponent/WorldEn';
import BhumiPujan from './MediaEventComponent/BhumiPujan';
import Blog from './Common/Blog';
import Context from './Contest/Context';

let routing = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
 
  {
    path:'/About-us',
    element:<AboutUs/>
  },
  {
    path:'/management-speaks',
    element:<Management/>
  },
  {
    path:'/our-team',
    element:<Ourteam/>
  },
  {
    path:'/social-responsbility',
    element:<SocialResponsbility/>
  },
  {
    path:'/Newsletter',
    element:<Newsletter/>
  },
  {
    path:'/Nri-corner',
    element:<NriCorner/>
  },
  {
    path:'/Residential',
    element:<Residential/>
  },
  {
    path:'/media & events',
    element:<Media/>
  },
  {
    path:'/contact-us',
    element:<ContactUs/>

  },
  {
    path:'/world-environment',
    element:<WorldEn/>
  },
  {
    path:'/bhumi-pujan',
    element:<BhumiPujan/>
  },
  {
    path:'/Blog',
    element:<Blog/>
  }


  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Context>
 <RouterProvider router={routing}/>
 </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
