import './signin.css'
import {useRef, useState} from 'react'
export default function Signin(){
    const [error,setError] = useState("");
    const usernameRef = useRef();
    const passwordRef = useRef();
    const userfocusHandle =() => {
        setError("")
        usernameRef.current.value= '';
        
    }
    const passfocusHandle = () => {
        setError("")
        passwordRef.current.value= '';
    }
    const handleSignin = (e) => {
        setError("");
        e.preventDefault(); 
       
        let regex = new RegExp("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$");
        var passregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const user = usernameRef.current.value; 
        const pass = passwordRef.current.value;
        if(regex.test(user)) {
            if(passregex.test(pass)){
                setError("")
            }
        }else{
           setError("The inputs do not match the conditions");
        }
    }

    return(
        <div className='signin'>
            <div className='text-area'>
                <p id='title'>Join the largest hiring community</p>
                <p id='desc'>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
                <button id='learn-more'>Learn More</button>
            </div>
            <div className='form-area'>
                <div className='wh-area'>
                    <div className='top'>
                        <p id='wh-title'>Sign In </p>
                        <p className='error'>{error}</p>
                    </div>
                    <div className='buttons'>
                        
                        <input className='sign-buttons' placeholder='Your email' type='email' ref = {usernameRef} onFocus={userfocusHandle} />
                        <input className='sign-buttons' placeholder='Your password' type='password' ref = {passwordRef}  onFocus={passfocusHandle}/>
                    </div>
                    <div className='logs'>
                        <button id='signup' onClick = {handleSignin}>Sign In </button>
                        <button className='signup-fb'>Login via Facebook </button>
                    </div>
                    <div className='haveacc'>
                        <p id='haveaccount'>Don't have an accout?</p>
                        <p id='signin'>Sign up</p>
                    </div>
                    
                </div>
                
            </div>  
        </div>
    )
}