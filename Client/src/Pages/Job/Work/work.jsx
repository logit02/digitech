import './work.css'
import Vacant from './Vacant'
export default function Work (){ 
    return (
    <div id='work'>
        <div id ='sidebar'>
            <div id='main_sidebar'>
                <div id='search-div'>
                    <input placeholder='search' type='text' id='search'></input>
                </div>
                <div id='cat'>
                    <p className='check_title'>Experience level</p>
                    <div><input type='checkbox'  name='QA Engineer'/> Intern</div>
                    <div><input type='checkbox' name='Software Developer'/> Junior</div>
                    <div><input type='checkbox'  name='DevOps'/> Middle</div>
                   <div><input type='checkbox'  name='Backend Developer'/> Senior</div>
                    
                   
                   
                </div>
                <div id='cat'>
                    <p className='check_title'>Job titles</p>
                    <div><input type='checkbox' name='Software Developer'/> Software Developer</div>
                    <div><input type='checkbox'  name='DevOps'/> DevOps</div>
                   <div><input type='checkbox'  name='Backend Developer'/> Backend Developer</div>
                    <div><input type='checkbox'  name='QA Engineer'/> QA Engineer</div>
                   <div><input type='checkbox'  name='Front-end Developer'/> Front-end Developer</div>
                   <div><input type='checkbox'  name='React Developer'/> React Developer</div>
                    <div><input type='checkbox'  name='Java Engineer'/> Java Engineer</div>
                    <div><input type='checkbox' name='UI-UX designer' /> UI-UX designer</div>  
                    <button id='filter'>Filter</button>
                </div>
                
               
            </div>
        </div>
        <div id='main'>
            <div id='main_work'>
                {/* {jobs.map((j) =>(
                <Vacant job ={j} />
            ))}*/}

            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            <Vacant />
            </div>
        </div>
    </div>
    )
}