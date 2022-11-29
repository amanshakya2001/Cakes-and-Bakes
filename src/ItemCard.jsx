import React from 'react'

export default function ItemCard({element,addItemToCart}) {
  
  return (
    <>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="card">
              <div className="card-image">
                  <img src={element.img} alt="Truck Icon" height={"250px"}/>
              </div>
              <div className="card-footer">
                  <div className='text-capitalize text-truncate'>{element.name}</div>
                  {element.isProduct>0?<p className='text-success font-weight-bold'></p>:<p className='text-danger font-weight-bold'>Out Of Stock</p>}
              </div>
                <div className="card-back d-flex justify-content-center align-items-center">
                    <button className='btn btn-danger' onClick={()=>{addItemToCart(element.img,element.name,element.price)}}>Buy Now</button>
                </div>
          </div>
        </div>
    </>
  )
}