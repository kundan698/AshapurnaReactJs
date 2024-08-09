import React from 'react'

export default function Modal2() {
  return (
    <div>
       
      <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       {/*  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
       { <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
      </div>
      <div class="modal-body">
       <div className='fulls text-center'>
        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg" alt="" className='img-fluid'/>
       <div className="fulls1">
       <h5>Property Care Service</h5>
       <p className='text-secondary'>There's a lot to think about when it comes to property care services. Do you need regular maintenance for your residence? No matter what your property care needs are, Ashapurna buildcon is there to take the responsibility. The most reputable company that offers the services you need at a price you can afford.</p>
       </div>
       </div>
      </div>
    {/*   <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
    </div>
  </div>
</div>

</div>


   
  )
}

