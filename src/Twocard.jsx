import React from 'react'

export default function Twocard({element}) {
  return (
    <>
        <div className="col-lg-6 col-12 p-0 p-lg-2">
          <div className='bannerimage overflow-hidden' style={{backgroundImage:`url(${element.img})`}}>
            <div className="col-lg-6 col-12">
                {element.title?<><p>{element.desc}</p>
                <h1>{element.title}</h1></>:""}
            </div>
          </div>
        </div>
    </>
  )
}