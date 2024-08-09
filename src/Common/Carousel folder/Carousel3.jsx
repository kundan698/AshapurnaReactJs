import React from "react";
import Slider from "react-slick";

function Carousel3() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div>
          <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p>Ashapurana Buildcon</p>
                                <p> 20204-04-23</p>
                            </div>
                        </div>
                    </div>
          </div>
        <div/>
        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt=""  className="img-fluid"/>
        </div>
        <div>
          <div>
          <div className="col-lg-4 rounds">
                        <div className=' bdr'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg" alt="" className='img-fluid'/>
                            <div className='shadow-lg p-4  icon1'>
                                <h5>World Environment 2024</h5>
                                <p>Ashapurana Buildcon</p>
                                <p> 20204-04-23</p>
                            </div>
                        </div>
                    </div>
          </div>
        <div/>
        
        </div>
       
       
        
       
        
       
       
      </Slider>
    </div>
  );
}

export default Carousel3;
