import React, { useState } from 'react';
import user from './Json/user.json';
import $ from 'jquery';

export default function () {
    // Variables
    const [currentRegister,setCurrentRegister] = useState({username:'',Email:'',password:'',confirmPassword:''});

    // Functions
    function typeRegister(event){
        let value = event.target.value;
        let name = event.target.name;
        setCurrentRegister((prevElem)=>{
            return {...prevElem,[name]:value };
        });
    }

    function formSubmit(){
        
        let exist = user.filter((Elem)=>{
            return Elem.Username === currentRegister.username
        })
        if(currentRegister.username === "" || currentRegister.password === "" || currentRegister.Email === "" || currentRegister.confirmPassword === ""){
            alert("Login Form not valid");
        }
        else if(exist.length > 0){
            alert("Username already exist");
        }
        else if(currentRegister.password === currentRegister.password){
            alert("from submitted")
            user.push(currentRegister);
            console.log(user,exist);
            $('#RegisterModalCenter').css("display","none");
            $('.modal-backdrop').css("display","none");
            $('body').removeClass('modal-open');
            setCurrentRegister({username:'',Email:'',password:'',confirmPassword:''});
        }
    }
  return (
    <>
        <div className="modal fade" id="RegisterModalCenter" tabIndex="-1" role="dialog" aria-labelledby="RegisterModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Register</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form text-center">
                    <label className='font-weight-bold' htmlFor="username" name="username">Username </label>
                    <input type="text" className='ml-2' name='username' placeholder={'Type Your Username'} autoComplete={"off"} value={currentRegister.username} onChange={typeRegister} /><br />
                    <label className='font-weight-bold' htmlFor="Email" name="Email">Email </label>
                    <input type="text" className='ml-2 mt-3' name='Email' placeholder={'Type Your Email'} autoComplete={"off"} value={currentRegister.Email} onChange={typeRegister}  /><br />
                    <label className='font-weight-bold' htmlFor="password" name="password">Password </label>
                    <input type="password" className='ml-2 mt-3' name='password'  placeholder={'Type Your Password'} autoComplete={"off"} value={currentRegister.password} onChange={typeRegister}  /><br />
                    <label className='font-weight-bold' htmlFor="confirm-password" name="confirm-password">Confirm Password </label>
                    <input type="password" className='ml-2 mt-3' name='confirmPassword'  placeholder={'Type Your Password Again'} autoComplete={"off"} value={currentRegister.confirmPassword} onChange={typeRegister}  />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary m-auto" onClick={formSubmit}>Register</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
