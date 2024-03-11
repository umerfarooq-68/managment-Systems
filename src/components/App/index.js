import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home';
import CreateUser from '../createuser';
import EditUser from '../edituser';
import Login from '../../components/Login'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
        <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route path='/createuser' component={CreateUser} />
          <Route path='/edituser/:userId' component={EditUser} />
         
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
