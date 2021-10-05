import './Vacant.css'
import logo  from '../../../Assets/Images/logo2.png'
import calendar from '../../../Assets/Icons/calendar.png'
import location from '../../../Assets/Icons/placeholder.png'
export default function Vacant(){
    return(
        <div id='vacant'>
            <div id='image_part'>
                <img src={logo} alt='logo' id='logo'/>
            </div>
            <div id='text_part'>
                <p id='job_name'>Backend Developer</p>
                <p id='company_name'>Alterrr Armenia</p>
            </div>
            <div id='detail_part'>
                <div>
                    <img src={calendar} alt='calendar' id='calendar'/>
                    <p>14.10.2021</p>
                </div>
                <div>
                    <img src={location} alt='location' id='location'/>
                    <p>Yerevan, Armenia</p>
                </div>
            </div>
            <div id='button_part'>
                <button>Read More</button>
            </div>
        </div>
    )
}