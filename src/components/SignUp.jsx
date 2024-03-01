import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import './signup.css'

const SignUp = () => {
  return (
    <>
    
     <div className='container_main'>
        <div className='main'>
            <div className='pheader'>
                <div className='header'>
                    SignUp
                </div>
                <div className="underline"></div>
            </div>
            <div className="pinputs">
                <div className='inputs'>
                    <div className='icon'>
                   <IoPersonSharp/>
                    </div>
                    <div className='input'>
                    <input type='text' placeholder='Name'/>
                    </div>
                    </div>
                    <div className='inputs'>
                    <div className='icon'>
                    < CiMail/>
                    </div>
                    <div className='input'>
                    <input type='text' placeholder='Email'/>
                    </div>
                    </div>
                    <div className='inputs'>
                    <div className='icon'>
                    <RiLockPasswordFill/>
                    </div>
                    <div className='input'>
                    <input type='text' placeholder='Password'/>
                    </div>
                </div>
            </div>
            <div className="buttons">
            <div className='btn'>
               <button>SignUp</button>
            </div>
            <div className='btn'>
            <button>Login</button>
            </div>
        </div>
        </div>
        </div> 
        
        
    </>
  );
}

export default SignUp;
