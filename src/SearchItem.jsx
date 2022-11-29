import React, { useEffect, useState } from 'react'

export default function SearchItem({data,search,addItemToCart}) {
    const [dataSearched,setDataSearched] = useState([]);
    useEffect(()=>{
    let filterData = data.filter((elem)=>{
        return elem.Category.includes(search);
    });
        setDataSearched(filterData);
    },[search])
    
  return (
    <>
        <section className='searchItem py-4'>
            <div className="container">
                <div className="row">
                    {dataSearched.map((elem,index)=>{
                        return(
                        <div key={index} className="col-12 col-md-6 col-lg-3 py-2">
                        <div className="card">
                            <div className="card-image">
                                <img src={elem.img} alt="" height={"240px"} />
                                
                            </div>
                            <div className="card-footer text-truncate text-center font-weight-bold">
                                {elem.name}
                            </div>
                            <div className="card-back d-flex justify-content-center align-items-center">
                                <button className='btn btn-danger' onClick={()=>{addItemToCart(elem.img,elem.name,elem.price)}}>Buy Now</button>
                            </div>
                        </div>
                    </div>)
                    })}
                    
                </div>
            </div>
        </section>
    </>
  )
}
