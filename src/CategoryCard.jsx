import React from 'react'

export default function ({element}) {
  return (
    <>
        <div className="card-wrapper col-lg col-md-3 col-12">
          <div className="card">
              <div className="card-image">
                  <img src={element.img} alt="Truck Icon"height={"100px"}/>
              </div>
              <div className="card-footer">
                  <span className='text-capitalize'>{element.category}</span>
              </div>
          </div>
        </div>
    </>
  )
}
