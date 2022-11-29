import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md">
                        <ul>
                            <li>About</li>
                            <li>Company</li>
                            <li>Employee</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul>
                            <li>About</li>
                            <li>Company</li>
                            <li>Employee</li>
                        </ul>
                    </div><div className="col-6 col-md">
                        <ul>
                            <li>About</li>
                            <li>Company</li>
                            <li>Employee</li>
                        </ul>
                    </div><div className="col-12 col-md-6 col-lg-4">
                        <ul>
                            <li>About</li>
                            <li>Company</li>
                            <li>Employee</li>
                            <li>
                                <div className='form'>
                                    <input type="text" placeholder='Cakes,Gifts,Flowers' />
                                    <button className='btn'><i className='fa fa-search'></i></button>
                                </div>
                            </li>
                            <li>
                                <div className="icons">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-linkedin"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mini-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <p>&copy;Copyright @2022</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="logos">
                                <a href="http://localhost:3000/" target={"_blank"}>
                                    <img src={'assests/images/headerLogo.png'} height={'35px'} alt="" />
                                </a>
                                <a href="https://www.giftoo.in/" target={'_blank'}>
                                    <img src={'assests/images/giftLogo.png'} height={'35px'} alt="" />
                                </a>
                                <a href="https://www.chanel.com/us/" target="_blank">
                                    <img src={'assests/images/chanelLog.png'} height={'35px'} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
