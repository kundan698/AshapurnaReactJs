import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Ourteam() {
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / OUR TEAM</h5>
           <h4>Our Team</h4>
           </div>
            

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className='container'>
                <h2 className='text-center '>Ashapurna Team</h2>
                <p className='pt-3'>Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.</p>
                <p>On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.</p>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className="container">
              <div className="col-lg-12">
                 
               <div>
                <img src="https://ashapurna.com/images/banner/organisation-chart-4-march.jpg" alt="" className='img-fluid'/>
               </div>
              </div>
            </div>

        </section><br />
        <Footer/>
    </div>
  )
}

