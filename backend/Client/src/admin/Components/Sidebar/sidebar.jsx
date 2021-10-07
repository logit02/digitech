import './sidebar.css'
import Home from '../../icons/Home.png'
import Setting from '../../icons/Setting.png'
import Swap from '../../icons/Swap.png'
import Filter from '../../icons/Filter 3.png'
import logo from '../../../Assets/Images/logo.png'
import User from '../../icons/Profile.png'
import Post from '../../icons/Edit.png'
import {Link} from 'react-router-dom'
export default function Sidebar(){
    return(
        <div className='sidebar_wrapper'>
            <div className='topper'>
                <img src = {logo} alt='logo' id='logo_topper'/>
                <p><Link to ='/home' className="Link">Alterrr</Link></p>
            </div>
            <ul id='ul'>
                <div><Link to='/admin/home' className='Link'><li className='list_items'><img src={Home} alt='#' className='icon'/> <p>Home</p></li></Link></div>
                <Link to='/admin/news' className='Link'><li className='list_items'><img src={Filter} alt='#' className='icon'/> <p>News</p></li></Link>
                <Link to='/admin/posts' className='Link'><li className='list_items'><img src={Post} alt='#' className='icon'/> <p>Posts</p></li></Link>
                <Link to='/admin/users' className='Link'><li className='list_items'><img src={User} alt='#' className='icon'/> <p>Users</p></li></Link>
                <Link to='/admin/contacts' className='Link'><li className='list_items'><img src={Swap} alt='#' className='icon'/> <p>Contacts</p></li></Link>
                <Link to='/admin/settings' className='Link'><li className='list_items'><img src={Setting} alt='#' className='icon'/> <p>Settings</p></li></Link>
            </ul>
        </div>
    )
}