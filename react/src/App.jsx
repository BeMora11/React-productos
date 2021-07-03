import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Producto from './pages/Producto';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/producto" component={Producto} />
        <Route exact path="/producto/:productoID" component={Producto} />
      </Switch>
    </Router>
  )
}

export default App
