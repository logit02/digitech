import { useEffect ,useState} from 'react'
import Land from './Landing/land-job'
import Work from './Work/work'
import { useLocation } from 'react-router';
import axios from 'axios';

export default function Job () { 

    const [jobs,setJobs] = useState([])
    const {search} = useLocation();
    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.get('http://localhost:5000/jobs' + search)
            setJobs(res.data)
            console.log(res.data)
        } 
        fetchJobs();
    }, [search])
    
    return(
        <div>
            <Land />
            <Work jobs={jobs} />
        </div>
    )
}