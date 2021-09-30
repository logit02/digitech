import './contact.css'
import logo from '../../Assets/Images/logo.png'
export default function Contact(){
    return(
        <div className='contact-all'>
            <div className='text-part-contact'>
                <p className='title-contact'>
                    Get in touch with us
                </p>
                <p className='desc-contact'>
                    Please submit your information and our team will get in touch with you
                </p>
                <div className='buttons-part'>
                    <div className='buttons-contact'>
                        <input className='button-contact' type='text' placeholder='Your name'/>
                        <input className='button-contact' type='text' placeholder='Your email'></input>
                    </div>
                    <div className='buttons-contact'>
                        <input className='button-contact' type='text' placeholder=' Your phone number'/>
                    </div>
                        <textarea className='button-contact-message' type='text' placeholder=' Write your message here'/>
                </div>
                <button id='submit-contact'>Submit</button>
            </div>
           {/* <img src = {logo} alt='logo' className='big-logo'/> */}
           <div className='logo-parts'>
          
           </div>
        </div>
    )
}