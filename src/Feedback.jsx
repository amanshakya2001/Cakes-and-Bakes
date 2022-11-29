import React from 'react'

export default function Feedback({users}) {
    
  return (
    <>
        <section className="feedback">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-capitalize'>Customer Review</h1>
                    </div>
                    <div className="feedbackrow">
                        {users.map((user,index)=>{
                        return(<div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="card">
                                <div className="card-header font-weight-bold text-capitalize d-flex">
                                    <div className="col-6  text-truncate">
                                        {user.Username}
                                    </div>
                                    <span className=' col-6 text-warning text-right  text-truncate'>
                                    {
                                    user.rate.map((index)=><i key={index} className='fa fa-star'></i>)
                                    }
                                    </span>
                                </div>
                                <div className="card-body">
                                        <p className='text-justify'>{user.Feedback}</p>
                                </div>
                            </div>
                        </div>)
                        })} 
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
