import './news.css'
import Post from './post'

export default function News(){
    return(
        <div className='news-all'>
            <div className='news-text'>
                <p className='news-title'> World wide IT news </p>
                <p className='news-desc'>We prepared some high-quality web-pages, that you can use in your projects. When you have to create your website you can use these templates.</p>
            </div>
           {/* <div className='news-items'>
                {posts.map((p) =>(
                    <Post post ={p} />
                ))}
            </div>
                */}
                <div className='news-items'>
                    <Post />
                    <Post />
                    <Post />
                    
                    
            </div>
            <button className='read-more-button'>Read More</button>
        </div>

    )
}