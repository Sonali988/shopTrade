import React from 'react'
import { AiOutlineDown, AiOutlineShoppingCart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { BsSearch } from 'react-icons/bs'
import logo from "./../asset/logo-s.png";

const Header = () => {
  return (
    <div className="header-outer-wrap">
      <div className="header-inner-wrap">
        <div className="heading-margin">
          <img src={logo} alt="logo" width="32px" />
        </div>
        <div className="nav-links-wrap">
          <div className="topnav" id="myTopnav">
            <div className="dropdown">
              <button className="dropbtn">Shop
              <AiOutlineDown />
              </button>
              <div className="dropdown-content">
                <a href="#link1">Link 1</a>
                <a href="#link2">Link 2</a>
                <a href="#link3">Link 3</a>
              </div>
            </div>
            <a href="#about">About Us</a>
            <a href="#our-store" className="active">Our Stores</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="options-wrap topnav">

          <a href="#search"><div className="">Search <BsSearch /></div></a>
          <div className="icon-padding"><VscAccount /> </div>
          <div className="icon-padding"><AiOutlineShoppingCart /> </div>
        </div>
      </div>
    </div>
  )
}

export default Header;