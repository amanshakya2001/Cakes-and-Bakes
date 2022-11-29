import React, { useState } from 'react'
import user from './Json/user.json';
import $ from 'jquery';

export default function LoginModal({setLogin,setLoginUser}) {
    // Variables
    const [currentLogin,setCurrentLogin] = useState({username:'',password:''});

    // Functions
    function typelogin(event){
        let value = event.target.value;
        let name = event.target.name;
        setCurrentLogin((prevElem)=>{
            return {...prevElem,[name]:value };
        });
    }
    function formSubmit(){
        
        let exist = user.filter((Elem)=>{
            return Elem.Username === currentLogin.username
        })
        if(currentLogin.username === "" || currentLogin.password === ""){
            alert("Login Form not valid");
        }
        else if(exist.length === 0){
            alert("Account not found with this username");
        }
        else if(exist[0].password === currentLogin.password){
            setLogin(true);
            setLoginUser(currentLogin);
            $('#LoginModalCenter').css("display","none");
            $('.modal-backdrop').css("display","none");
            $('body').removeClass('modal-open');
            setCurrentLogin({username:'',password:''});
        }
        else{
            alert("Password not matched");
        }
    }

  return (
    <>
        <div className="modal fade" id="LoginModalCenter" tabIndex="-1" role="dialog" aria-labelledby="LoginModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form text-center">
                    <label className='font-weight-bold' htmlFor="username" name="username">Username </label>
                    <input type="text" className='ml-2' name='username' value={currentLogin.username} placeholder={'Type Your Username'} onChange={typelogin} autoComplete={"off"} /><br />
                    <label className='font-weight-bold' htmlFor="password" name="password">Password </label>
                    <input type="password" className='ml-2 mt-3' name='password' value={currentLogin.password} placeholder={'Type Your Password'} onChange={typelogin} autoComplete={"off"} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary m-auto" onClick={formSubmit}>Login</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
