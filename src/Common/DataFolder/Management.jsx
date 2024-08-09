import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Management() {
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / Management speak</h5>
           <h4>Our Management</h4>
           </div>
            

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className='container'>
                <h2 className='text-center'>Board Of Directors</h2>
                <p className='pt-3'>Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.</p>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='cmd'>
                            <b>CMD</b>
                            <h5>Shri Karan Singh Uchiyarda</h5>
                            <p>Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for</p>
                           
                            <button>Read More</button>
                           
                        </div>
                       
                    </div>
                    <div className="col-lg-4">
                        <div className='honor'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/management_speak/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </section>

       <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                       <div className='honor'>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/management_speak/c28d2e5b-7f72-4378-9421-ad2cb6099f77-1669299122.jpg" alt="" />
                        </div>

                </div>
                
                <div className="col-lg-7">
                        <div className='cmd'>
                            <b>DIRECTOR</b>
                            <h5>Mr Harshvardhan Singh Uchiyarda</h5>
                            <p>Regarding their surging success, the Director asserts, “I believe that achievements are what make us and define us and no achievement can be attained without the seed of a dream. Ashapurna Group is a perfect example of this vary philosophy. “Apart from this, he accredits the company’s commendable success to the blessings of their ‘Kuldevi’- Maa Ashapurna. She has been the prime motivation to name the organization as- ‘Ashapurna Buildcon’. As a sign of their utmost gratitude towards their adored goddess-</p>
                           
                            <button>Read More</button>
                           
                        </div>
                       
                    </div>
            </div>
        </div>

       </section><br />

       <Footer/>

    </div>
  )
}
