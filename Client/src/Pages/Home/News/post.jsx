import { Link } from "react-router-dom";

import "./post.css";
/*
export default function Post( {post} ) {
    return (
      <div className="post">
        {post.photo && (
        <img
          className="postImg"
          src={post.photo}
          alt=""
         
        />
        )}
        <div className="postInfo">
          <div className="postCats">
            
              {post.categories.map((c) => ( 
                <Link className="post-link-cat" to="/posts?cat=Music">
               <span className="postCat"> {c.name}  </span>
              </Link>
              ))}
              
          
            
          </div>
          <Link to={`/post/${post._id} `} className="post-link">
             <span className="postTitle"> 
           
              {post.title}
              </span>
            </Link>
          
          
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    );
  }

  */


  export default function Post( {post} ) {
    return (
      <div className="post">
        
        <img
          className="postImg"
          src={'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
          alt=""
         
        />
        
        <div className="postInfo">
          <div className="post-link">
             <span className="postTitle"> 
           
             Hey there
              </span>
            </div>
          
          
          <span className="postDate"><p>12.07.2021</p></span>
        </div>
        <p className="postDesc">
        Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!
        </p>
      </div>
    );
  }