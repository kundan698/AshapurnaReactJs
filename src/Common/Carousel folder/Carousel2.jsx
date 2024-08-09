import React from "react";
import Slider from "react-slick";

export default function Carousel2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayTimeout:100,
  };
  return (
    <Slider {...settings}>
      <div>
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
      </div>
      <div>
      <div>
                        <div className='text-center p-4'>
                       <h5>Ms. Komal Bhati</h5>
                       <p>Ashapurna Anml</p>
                       </div>
                       <div className='round'>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.45.37-1706351771.jpeg" alt="" />
                        <p>I found my dream home with Ashapurna Anmol. When I contacted them, it turned out to be a great decision. My family and I live happily in the home we always wanted. The Ashapurna Buildcon team made it easy and special for us.</p>
                        
                       </div>
                       <div className='comma'>
                            <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                        </div>
                        </div>
      </div>
      <div>
      <div>
                        <div className='text-center p-4'>
                       <h5>Ms. Komal Bhati</h5>
                       <p>Ashapurna Anml</p>
                       </div>
                       <div className='round'>
                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.44.50-1706352837.jpeg" alt="" />
                        <p>I found my dream home with Ashapurna Anmol. When I contacted them, it turned out to be a great decision. My family and I live happily in the home we always wanted. The Ashapurna Buildcon team made it easy and special for us.</p>
                        
                       </div>
                       <div className='comma'>
                            <img src="https://ashapurna.com/images/icons/quotes.png" alt="" />
                        </div>
                        </div>
      </div>
     
      
      
    </Slider>
  );
}