import React from 'react'

export default function Header(props) {
    function typeSearch(event)
    {
        props.setSearch(event.target.value);
    }
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <a className="navbar-brand" href="/CakesandBakes/"><img src={"./assests/images/headerLogo.png"} alt="" width={'200px'} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline bg-white ml-5">
                <input className="form-control mr-sm-2 border-0" type="search" placeholder="Cakes , Flowers , Gifts" aria-label="Search" value={props.search} onChange={typeSearch} />
                <button className="btn my-2 my-sm-0 w-auto" type="submit"><i className='fa fa-search'></i></button>
                </form>
                <div className="form-inline ml-auto" >
                {!props.login?<>
                                <button className="btn btn-danger my-sm-0 font-weight-bold" data-toggle="modal" data-target="#LoginModalCenter"><i className='fa fa-user-tie mr-2'></i><span>Login</span></button>
                                <button className="btn btn-danger my-3 my-sm-0 mx-4 font-weight-bold" data-toggle="modal" data-target="#RegisterModalCenter"><i className='fa fa-user-plus mr-2'></i><span>Register</span></button>
                            </>:
                            <>
                                <button className="btn my-2 my-sm-0 mx-4 font-weight-bold badge-pill profile-btn" type="submit">
                                    <span>A</span>
                                    <ul className='d-none'>
                                        <li>Profile</li>
                                        <li>Settings</li>
                                        <li>About</li>
                                    </ul>
                                </button>
                                <button className="btn btn-danger my-3 my-sm-0 mx-4 font-weight-bold" onClick={()=>props.setLogin(false)}><i className="fa fa-right-from-bracket mr-2"></i><span>Logout</span></button>
                            </>
                    }
                
                <button className="btn my-2 my-sm-0 cart-btn"  data-toggle="modal" data-target="#CartModal"><i className='fa fa-shopping-cart'></i><span>{props.cartItems}</span></button>
                </div>
            </div>
        </nav>
        </header>
        <div className="mini-navbar sticky-top">
            <ul>
                <li onClick={()=>props.setSearch("Cakes")}>cakes</li>
                <li onClick={()=>props.setSearch("Flowers")}>flower</li>
                <li onClick={()=>props.setSearch("Toy")}>toys</li>
            </ul>
        </div>
    </>
  )
}
