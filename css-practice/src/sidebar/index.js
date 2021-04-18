import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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
        <div>section one</div>
        <div>section two</div>
        <div>section three</div>
      </div>
    </>
  );
}

export default SideBar
