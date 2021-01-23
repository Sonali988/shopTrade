import React from 'react'
import { AiOutlineDown, AiOutlineShoppingCart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { BsSearch } from 'react-icons/bs'
import logo from "./../asset/logo-s.png";
import { ABOUT_US, CONTACT_US, OUR_STORES, SHOP, LINK_1, LINK_2, LINK_3, SEARCH } from '../utilities/Constants';

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
              <button className="dropbtn">{SHOP}
                <AiOutlineDown />
              </button>
              <div className="dropdown-content">
                <a href="#link1">{LINK_1} </a>
                <a href="#link2">{LINK_2} </a>
                <a href="#link3">{LINK_3}</a>
              </div>
            </div>
            <a href="#about">{ABOUT_US} </a>
            <a href="#our-store" className="active">{OUR_STORES}</a>
            <a href="#contact">{CONTACT_US} </a>
          </div>
        </div>
        <div className="options-wrap topnav">
          <a href="#search"><div className="">{SEARCH} <BsSearch /></div></a>
          <div className="icon-padding"><VscAccount /> </div>
          <div className="icon-padding"><AiOutlineShoppingCart /> </div>
        </div>
      </div>
    </div>
  )
}

export default Header;