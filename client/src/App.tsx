import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './page/main';
import MyRoom from './page/myRoom';
import Nav from './component/nav';
import { useSelector } from 'react-redux';
import { userInfoStatus } from './redux/user/user';

function App() {
  const userInfo = useSelector(userInfoStatus);

  const userUrl = (): string => {
    if (userInfo.userId === '') {
      return '/myRoom';
    } else {
      return `/myRoom/${userInfo.userId}`;
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Nav />
        </Switch>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path={userUrl()}>
            <MyRoom />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
