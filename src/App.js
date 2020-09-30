import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to={'/login'}>
              Logo to Login
            </Link>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/register'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route path='*' component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
