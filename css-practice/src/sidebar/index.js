import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import './sidebar.css'

import React, {useState} from "react";

function SideBar() {

  const [toggle, setToggle] = useState(false)
  const active = toggle ? 'sidebar active' : 'sidebar'

  const openSidebar = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <div className="button" onClick={openSidebar}>
        <GiHamburgerMenu />
      </div>
      <div className={active}>
        <div className="close" onClick={openSidebar}>
          <IoMdClose />
        </div>
        <div>
          <NavLink to="/scroll-animations">Scroll Animation</NavLink>
        </div>
        <div>
          <NavLink to="/svg-animations">Svg Animations</NavLink>
        </div>
        <div>
          <NavLink to="/qrcode">QR code</NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar
