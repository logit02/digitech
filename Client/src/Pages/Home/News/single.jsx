import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import './single.css'
import {Link} from 'react-router-dom'
export default function Single(){

    const location = useLocation()
    const [post,setfullnews] = useState({})
    console.log(location)
    const path = location.pathname.split("/")[2]
    
    useEffect(()=> {
        const getNews = async () => {
            const res = axios.get('/news/'+path)
            setfullnews(res.data)
        }
        getNews();
    },[path])
    return( <div className="singlePost">
    <div className="singlePostWrapper">
      {post.photo && (
      <img
        className="singlePostImg"
        src={post.photo}
        alt=""
      /> )}
      <h1 className="singlePostTitle">
        {post.title}
       
      </h1>
      
      <div className="singlePostInfo">
        <div>
          Author:
          <b className="singlePostAuthor">
            <Link className="singlePostAuthor" to={`/blog/?user=${post.username}`}>
              {post.username}
            </Link>
          </b>
        </div>
        <div className='singlePostAuthor'>{new Date(post.createdAt).toDateString()}</div>
      </div>
      <p className="singlePostDesc">
        {post.desc}
      </p>
    </div>
    <p className='title-comments'>Comments</p>
      
  </div>)
}