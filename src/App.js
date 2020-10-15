import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route path='/web-template-react/' exact component={Home} />
          <Route path='/web-template-react/services' component={Services} />
          <Route path='/web-template-react/products' component={Products} />
          <Route path='/web-template-react/sign-up' component={SignUp} />
      </Switch>
    </Router> 
    </>
  );
}

export default App;
