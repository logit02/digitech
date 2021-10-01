import './App.css';
//Components
import Navigator from './Components/Navigator/nav'
import Land from './Components/Landing_page/land'
import News from './Components/News/news'
import Question from './Components/Questions/question'
import Socials from './Components/Socials/socials'
import Contact from './Components/Contact/contact'
import Collabs from './Components/Collabs/collabs'
import Footer from './Components/Footer/footer'
import Signin from './Components/Signin/signin'

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
