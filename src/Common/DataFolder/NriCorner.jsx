import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function NriCorner() {
  return (
    <div>
        <Header/>
        <section className='container-fluid animate__animated animate__slideInUp' id='abouts'>
           <div className='text-white text-center pt-5'>
           <h5 className='pt-5'>HOME / NRI Cornerk</h5>
           <h4>Our NRI</h4>
           </div>
            

        </section>
        <section className='container-fluid mt-5 animate__animated animate__slideInUp'>
          
              <div className="container">
                <div className='text-center even'>
                    <h2>NRI</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='even'>
                            <b>NRI</b>
                            <h2>NRI Clients Corner</h2>
                            <p>A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.</p>
                            <h2>Investment destination: India</h2>
                            <p>In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 fullbdr">
                        <div className='even ' id='fflx'>
                            <h4>NRI ENQUIRY</h4>
                            <p>Please fill in the form and we would contact you at the <br /> earliest.</p>
                        </div>
                        <form action="" id='inps'>
                            <input type="text" placeholder='Name'/><br />
                            <input type="email" placeholder='Email'/><br />
                            <input type="tel" placeholder='Phone'/><br />
                            <textarea name="" id="" placeholder='Message'>

                            </textarea>
                            <button className='sub'>submit</button>
                        </form>
                    </div>
                </div>
              </div>

        </section><br />
        <Footer/>
    </div>
  )
}
