import './App.css';
//Components
import Navigator from './Pages/Home/Navigator/nav'
import Land from './Pages/Home/Landing_page/land'
import News from "./Pages/Home/News/news"
import Question from './Pages/Home/Questions/question'
import Socials from './Pages/Home/Socials/socials'
import Contact from './Pages/Home/Contact/contact'
import Collabs from './Pages/Home/Collabs/collabs'
import Footer from './Pages/Home/Footer/footer'
import Signin from './Pages/Signin/signin'
import Job from './Pages/Job/job'
import FullNews from './Pages/Home/News/FullNews'
import Single from './Pages/Home/News/single'

//= imports from react
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import axios from 'axios';


//context
//import {Context} from '../src/Components/context/Context'
//import {axiosInstance} from '../../client/src/config.js'

//function main 

function App() {
  
  const [news, setNews] = useState([])
  

 useEffect(() => {
  const fetchNews = async () => {
      const res = await axios.get('http://localhost:5000/news/' )
      setNews(res.data.slice(0,3))
      console.log(res.data)
  } 
  fetchNews();
},[])


  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <div className="App">
              <Navigator />
              <Land />

              <News news={news}/>
              <Question />
              <Socials />
              <Contact />
              <Collabs />
              <Footer />
          </div>
        </Route>
        <Route path='/about'>
              <Navigator />
        </Route>
        <Route path='/news'>
              <Navigator />
              <FullNews news={news} />
        </Route>
        <Route path='/news:id'>
              <Navigator />
              <Single />
        </Route>
        <Route path='/job'>
              <Navigator />
              <Job />
        </Route>
        å
        <Route path='/signin'>
              <Signin />
        </Route>
        
       
       
        <Redirect from ='/' to='/home'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
