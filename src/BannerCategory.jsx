import React from 'react'
import BannerCategoryCard from './BannerCategoryCard'

export default function BannerCategory({bannerimg,title,data,offer=false,addItemToCart,setSearch}) {
    data = data.filter((elem)=>{
        return elem.Category.includes(title);
    })
  return (
    <>
        <section className='banner-category'>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-0">
                        <h2 className='float-left text-capitalize'>{title}</h2>
                        {offer?
                        <span className='Offer-text'><img src={'./assests/images/offer.png'} height={'50px'} alt="" /></span>:
                        ''
                        }
                        <button className='btn btn-danger float-right'onClick={()=>setSearch(title)}>View all</button>
                    </div>
                    <div className="col-12 col-lg-4 cakesbanner" style={{backgroundImage:`url(${bannerimg})`}}>
                        <h2 className='text-uppercase'>
                            {title}
                        </h2>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            {data.map((element,index)=> <BannerCategoryCard key={index} data={element} addItemToCart={addItemToCart} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
