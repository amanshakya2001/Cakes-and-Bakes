import React from 'react'
import ItemCard2 from './ItemCard2'

export default function Itemsection2({title,offer,data,addItemToCart,setSearch}) {
  return (
    <>
    <section className="items2">
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
                        {data.map((element,index)=><ItemCard2 key={index} element={element} addItemToCart={addItemToCart} />)}
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
