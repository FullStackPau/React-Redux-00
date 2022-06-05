import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

import { useDispatch, useSelector} from 'react-redux';
import {isLogged} from './actions/protectActions';


import Auth from './components/Auth';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Friends from './components/Friends';
import ProtectedRoutes from './components/ProtectedRoutes';


import { Provider } from 'react-redux';
import store from './store';

import './App.css';


function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Router>

        <Switch>
            <Route exact path="/" element={<Auth/>}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="*" element={<Login />} />
            </Route>


          <Route exact path="/" element={<Layout/>}>
            <Route path="dashboard" element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }/>
            <Route path="amigos" element={
              <ProtectedRoutes>
                  <Friends />
              </ProtectedRoutes>}/>
          </Route>
        </Switch>
      

      </Router>
    </div>
    </Provider>
  );
}

export default App;
