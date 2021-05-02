import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Animate from './animate';
import Svganimate from './animate-svg';
import MyQRCode from './myqrcode';
import SideBar from "./sidebar";
import "./app.css"
import Home from './home/home';
import Door from './keyframe';


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
          <Route path='/door'>
            <Door />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
