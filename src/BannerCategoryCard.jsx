import React from 'react'

export default function ({data,addItemToCart}) {
  return (
    <>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image">
                    <img src={data.img} height={'235px'} alt="" />
                </div>
                <div className="card-footer text-center font-weight-bold mb-0 text-capitalize text-truncate">{data.name}</div>
                <div className="card-back d-flex justify-content-center align-items-center">
                    <button className='btn btn-danger' onClick={()=>{addItemToCart(data.img,data.name,data.price)}}>Buy Now</button>
                </div>
            </div>
        </div>
    </>
  )
}
