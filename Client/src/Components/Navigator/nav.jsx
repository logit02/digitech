import './nav.css'
import logo from '../../Assets/Images/logo.png'
import {Link} from 'react-router-dom'

export default function Navigator(){

    const signin = () => {
        window.location='/signin'
    }
    return(
    <div className='nav-all'>
        <div className='nav-left'>
            <div className='nav-logo'>
                <img src = {logo} alt='logo'/>
                <p>Alter</p>  
            </div>
            <div className='nav-items'>
                <Link  to='/home'className='link'>Home</Link>
                <Link to='/about' className='link'>About us</Link>
                <Link to='/news' className='link'>News</Link>
                <Link to='/job' className='link'>Job Market</Link>
            </div>

        </div>
        <div className='nav-left'>
            <button onClick = {signin} className='sign-in'>Sign in</button>
            <button className='sign-up'>Sign up</button>
            
        </div>

    </div>)
}