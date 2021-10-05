import './App.css';
//Components
import Navigator from './Pages/Home/Navigator/nav'
import Land from './Pages/Home/Landing_page/land'
import News from './Pages/Home/News/news'
import Question from './Pages/Home/Questions/question'
import Socials from './Pages/Home/Socials/socials'
import Contact from './Pages/Home/Contact/contact'
import Collabs from './Pages/Home/Collabs/collabs'
import Footer from './Pages/Home/Footer/footer'
import Signin from './Pages/Signin/signin'
import Job from './Pages/Job/job'

//= imports from react
import {useState, useContext, useLocation} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//context
//import {Context} from '../src/Components/context/Context'
//import {axiosInstance} from '../../client/src/config.js'

//function main 

function App() {
  /*const {user} = useContext(Context)*/
  const [posts, setPosts] = useState([])
 /* const {search} = useLocation();*/

  

  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <div className="App">
              <Navigator />
              <Land />

              <News />
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
          <   News />
        </Route>
        <Route path='/job'>
              <Navigator />
              <Job />
        </Route>
        <Route path='/signin'>
              <Signin />
        </Route>
       
        <Redirect from ='/' to='/home'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
