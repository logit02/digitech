import './signin.css'
import {useRef, useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import {axiosInstance} from '../../config'


export default function Signin(){

    const [error,setError] = useState("");
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context)


    const userfocusHandle =() => {
        setError("")
        usernameRef.current.value= '';
        
    }
    const passfocusHandle = () => {
        setError("")
        passwordRef.current.value= '';
    }
    const handleSignin = async (e) => {
        setError("");
        e.preventDefault(); 
        //login & password validation 
        let regex = new RegExp("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$");
        var passregex = new RegExp("(?=.{8,20})");
        const user = usernameRef.current.value; 
        const pass = passwordRef.current.value;
        if(regex.test(user)) {
            console.log("passed")
            if(passregex.test(pass)){
                console.log("passed pass")
                setError("");
                dispatch({type:"LOGIN_START"});
                try{
                    const res = await axiosInstance.post("/auth/login", {
                        username:user, 
                        password:pass,
                    })
                    dispatch({type:"LOGIN_SUCCESS", payload:res.data})

                }catch(err){
                    dispatch({type:"LOGIN_FAILURE"});
            }
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