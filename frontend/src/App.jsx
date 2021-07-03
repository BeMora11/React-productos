import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Producto from './pages/Producto';
import RegistroUsuarios from './pages/RegistroUsuarios';
import PrivateRoute from './routers/PrivateRoute';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/producto" component={Producto} />
        <PrivateRoute exact path="/producto/:productoID" component={Producto} />
        <PrivateRoute exact path="/registrar" component={RegistroUsuarios} />
      </Switch>
    </Router>
  )
}

export default App
