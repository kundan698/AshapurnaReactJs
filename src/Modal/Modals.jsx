import React from 'react'
import Form from './Form'

export default function Modals({change,setoverlay}) {
    let func1=()=>{
        setoverlay(!change)
    }

  return (
    <div>
        <div className="overlay animate__animated "  onClick={func1}>

        </div>
        <div className="popup animate__animated animate__slideInUp">
          <section className='container-fluid p-0'>
            <div className="container">
              <div className="row p-0">
                <div className="col-lg-6">
                 
                    <img src="https://ashapurna.com/images/sections/commonbrochure.jpg" alt="" className='flds'/>
                 
                </div>
                <div className="col-lg-6">
                  <div className='now'>
                    <h2>ENQUIRE NOW</h2>
                    <p>Feel free to connect with us. We will contact with you shortly</p>

                  </div>

                   <Form/>
                </div>
              </div>
            </div>

          </section>
        </div>
    </div>
  )
}
