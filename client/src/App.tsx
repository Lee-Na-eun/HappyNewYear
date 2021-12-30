import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './page/main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/'>
          <Main />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
