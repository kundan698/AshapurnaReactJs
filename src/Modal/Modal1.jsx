import React from 'react'

export default function Modal1() {
  return (
    <div>
      {/*   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 
      </button> */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       {/*  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
       { <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
      </div>
      <div class="modal-body">
       <div className='fulls text-center'>
        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg" alt="" className='img-fluid'/>
       <div className="fulls1">
       <h5>Hospitality</h5>
       <p className='text-secondary'>When it comes to hospitality, our company is second to none. We pride ourselves on providing outstanding service to our guests, and our teams of skilled professionals are always on hand to ensure that your experience with us is nothing short of perfect. We know that the little things make all the difference, and we go above and beyond to ensure that our customers feel right at home.</p>
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
