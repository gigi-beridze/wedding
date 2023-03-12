import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../../src/assets/Logo.png"
import "../assets/Styles/navbar.scss"
import navIcon  from '../assets/images/nav_icon.svg'
import navIconX from "../assets/images/x_icon.svg"

export const Navbar = () => {
  const [click, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!click);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="header__icon" onClick={handleClick}>
          {click ? <img src={navIconX} /> : <img src={navIcon} />}
        </div>
        <ul className={click ? "header__ul active" : "header__ul"}>
          <Link to="/get-married">Get Married</Link>
          <Link to="/help-me-mary">Help me Mary</Link>
          <Link to="/wedding-solutions">Wedding Solutions</Link>
          <Link to="/blogs">Blogs</Link>
          <Link className="header__button" to="get-free-consultation">
            <span>get free consultation</span>
          </Link>
        </ul>
     
      </nav>
    </header>
  )
}