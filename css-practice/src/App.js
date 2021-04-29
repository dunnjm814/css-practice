import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Animate from './animate';
import Svganimate from './animate-svg';
import Morph from './morph';
import MyQRCode from './myqrcode';
import SideBar from "./sidebar";
import "./app.css"
import Home from './home/home';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/scroll-animations'>
            <Animate />
          </Route>
          <Route path='/svg-animations'>
            <Svganimate />
          </Route>
          <Route path='/qrcode'>
            <MyQRCode />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
