import React from 'react'

export default function Banner() {
  return (
    <>
        <section className='banner'>
            <div className="container-fluid">
                <div className="row banner-image">
                    <div className="col-6">
                        <h1 className='text-white text-uppercase mb-0'>Birthday Cakes</h1>
                        <p className='text-white mb-2'>If you are Worry about <span className='font-weight-bold text-uppercase'>good Taste</span></p>
                        <button className='btn btn-danger'>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
