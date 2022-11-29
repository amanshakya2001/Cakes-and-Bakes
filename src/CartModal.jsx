import React from 'react'

export default function ({cartData,proceedToBuy}) {
    let totalPrice=0;
    for(let i = 0;i<cartData.length;i++){
        totalPrice = totalPrice + cartData[i].price;
    }
  return (
    <>
        <div className="modal fade cart-modal" id="CartModal" tabIndex="-1" role="dialog" aria-labelledby="CartModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title m-auto font-weight-bold" id="exampleModalLabel">Cart Items</h5>
            </div>
            <div className="modal-body">
                {cartData.map((cart,index)=>{
                    return(
                        <>
                            <div className="col-12 my-2" key={index}>
                                <div className="card">
                                    <div className="card-image overflow-hidden col-6 text-center">
                                        <img className="" src={cart.img} alt="Card image cap" height={"220px"} />
                                    </div>
                                <div className="card-body">
                                    <div className="card-title font-weight-bold">{cart.title}</div>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">Price: {cart.price}</p>

                                </div>
                                </div>
                            </div>
                        </>
                    );
                })
                }
                
            </div>
            <div className="modal-footer">
                <div className="col-12"><span className='float-right mb-2'>Total Price: {totalPrice}</span></div>
                <div className="col-12 text-right">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary ml-2" onClick={proceedToBuy}>Proceed To Buy</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
