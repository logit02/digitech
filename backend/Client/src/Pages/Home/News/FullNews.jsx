import Post from './post'
import './FullNews.css'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { axiosInstance } from '../../../config'
export default function FullNews(){
    const [news, setNews] = useState([])
    useEffect(() => {
    const fetchNews = async () => {
        const res = await axiosInstance.get('/news' )
        setNews(res.data.slice(0,50))
        console.log(res.data)
    } 
    fetchNews();
    },[])
    return(
        <div id='news'>
            <div id='right_bar'>
                 
             {news.map((n) =>(
                <Post newss ={n} />
                ))
            }
             </div>
        </div>
)}