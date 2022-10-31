import React, { useRef, } from 'react';
import Image from 'next/image';


function signIn() {
    const emailRef= useRef(null);
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        authUser.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
  return (
    <div className='relative  bg-[#070122]/90 h-screen '>
        <div className=' justify-center'>
            
            <div className='absolute flex flex-col top-1/4 left-1/4 ml-40 w-[400px] h-[400px] shadow-lg bg-[#070122]/25 p-5 space-y-8' >
            <h2 className='text-white'>Sign In and proceed</h2>
            <form className='space-y-8 '>
                <input ref={emailRef} className='input' type="email" placeholder='email'/>
                <input ref={passwordRef} className='input' type="password" placeholder='password' />
                <div>
                <button onClick={register} className='inputBatton'>Signin here</button>
                </div>
                
            </form>
            <h5 className='text-white font-semibold'>You dont have an account ? Register</h5>
            </div>
            
        </div>      
    </div>
  )
}

export default signIn;