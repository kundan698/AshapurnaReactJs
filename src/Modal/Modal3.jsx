import React from 'react'

export default function Modal3() {
  return (
    <div>
   
  <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
   {/*  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
   { <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
  </div>
  <div class="modal-body">
   <div className='fulls text-center'>
    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg" alt="" className='img-fluid'/>
   <div className="fulls1">
   <h5>Transparent Dealing</h5>
   <p className='text-secondary'>When it comes to property dealings, transparency is the key for us to maintain a good relationship with our customers. By being transparent, we are effectively communicating and managing expectations which can help to avoid potential issues down the line. You can ensure that your property dealings are conducted in a transparent and efficient manner.</p>
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
