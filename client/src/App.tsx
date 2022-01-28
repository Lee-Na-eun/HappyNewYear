import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './page/main';
import MyRoom from './page/myRoom';
import Nav from './component/nav';
import MakePlan from './page/makePlan';
import AllPlan from './page/allPlan';
import DayPlan from './page/dayPlan';
import WeekPlan from './page/weekPlan';

function App() {
  // const userInfo = useSelector(userInfoStatus);

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
          <Route path='/myRoom'>
            <MyRoom />
          </Route>
          <Route path='/makePlan'>
            <MakePlan />
          </Route>
          <Route path='/allPlan'>
            <AllPlan />
          </Route>
          <Route path='/weekPlan'>
            <WeekPlan />
          </Route>
          <Route path='/dayPlan'>
            <DayPlan />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
