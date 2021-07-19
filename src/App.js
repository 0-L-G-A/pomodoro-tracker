import './App.css';
import React from "react";
import {Route, Switch} from 'react-router-dom';
import { Navigation } from './react-router/navigation';
import { HomePage } from './pages/homepage';
import { Settings } from './pages/settings';

function App() {
  return (
    <div className="App">
      <header className="header"> 
        <Navigation/>
      </header>
      
      <main>
        <Switch>
          <Route path="/pomodoro-tracker" exact><HomePage/></Route>
          <Route path="/settings" ><Settings/></Route>
          <Route path="*">404</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
