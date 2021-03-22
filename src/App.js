import React from 'react';
import Spinner from './utilities/Spinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';


const Game = React.lazy(() =>
  import('./pages/game/Game'));
const Login = React.lazy(() =>
  import('./pages/login/Login'));
const Result = React.lazy(() =>
  import('./pages/result/Result'));


function App() {
  return (
    <div className="fastFingers" >
      <React.Suspense fallback={< Spinner />} >
        <Router>
          <Switch>   
            <Route  path="/game" component={Game}/>
            <Route  path="/result" component={Result}/>
            <Route exact path="/" component={Login}/>
          </Switch>
        </Router>
      </React.Suspense>
    </div>
    );
}

export default App;