import React from 'react'
import Twocard from './Twocard'

export default function TwocardSection({title,offer,data,setSearch}) {
  return (
    <>
    <section className="twocardSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='float-left'>{title}</h2>
                    {offer?
                    <span className='Offer-text'><img src={'./assests/images/offer.png'} height={'50px'} alt="" /></span>:
                    ''
                    }
                    <button className='btn btn-danger float-right' onClick={()=>setSearch(title)}>View all</button>
                </div>
                <div className="col-12">
                    <div className="items-row">
                        {data.map((element,index)=><Twocard key={index} element={element} />)}
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
