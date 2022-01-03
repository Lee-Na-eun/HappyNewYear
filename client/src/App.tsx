import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './page/main';
import MyRoom from './page/myRoom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/myRoom'>
            <MyRoom />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
