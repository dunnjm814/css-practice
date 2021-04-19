import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Animate from './animate';
import Morph from './morph';
import SideBar from "./sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path='/scroll-animations'>
            <Animate />
          </Route>
          <Route path='/morph'>
            <Morph />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
