import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Homepage from './Homepage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// User https://reactrouter.com/web/example/url-params to figure out front end routing
// Used Bulma example components throughout
const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Homepage/>
        </Route>
        <Route path = '/signup'>
          <Signup />
        </Route>  
        <Route path = '/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
