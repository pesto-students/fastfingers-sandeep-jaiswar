import React from 'react';
import Spinner from './utilities/Spinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';


const Game = React.lazy(() => import('./pages/Game'));
const Login = React.lazy(() => import('./pages/Login'));
const Result = React.lazy(() => import('./pages/Result'));


function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
    <Router> 
      <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
        </Switch>
    </Router>
    </React.Suspense>
  );
}

export default App;
