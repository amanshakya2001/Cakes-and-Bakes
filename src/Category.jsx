import React from 'react'
import CategoryCard from './CategoryCard'

export default function Category({category}) {
  return (
    <>
        <section className='category'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className='text-center mt-3'>Find a perfect gift every seconds.</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maiores.</p>
              </div>
              <div className="col-12">
                <div className="card-row">
                   {category.map((element,index)=><CategoryCard key ={index} element = {element} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
