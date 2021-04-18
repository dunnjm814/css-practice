import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Animate from './animate';
import SideBar from "./sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path='/animations'>
            <Animate />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
