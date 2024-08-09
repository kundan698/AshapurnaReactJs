import React from 'react'

export default function Modal4() {
  return (
    <div>
   
    <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
     {/*  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
     { <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
    </div>
    <div class="modal-body">
     <div className='fulls text-center'>
      <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg" alt="" className='img-fluid'/>
     <div className="fulls1">
     <h5>Sustainable Homes</h5>
     <p className='text-secondary'>Ashapurna Buildcon Ltd. offers many ways to make your home more sustainable, from choosing energy-efficient appliances to using sustainable building materials. We don’t compromise in our quality construction to give expected living experiences in the townships of Ashapurna. We are making the sustainable homes also to contribute in the protection of environment.</p>
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
