'use client';
import React, { BaseSyntheticEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { NavBarParams } from "@/app/utils/interfaces/interfaces";
import { SolidIcons } from "@/app/components/icons/icons";


export default function NavBar(params: NavBarParams) {
  // const activeTap = params.activeTap;
  const [activeTap, setActiveTap] = useState("home");
  const toggleNavBar = (event: BaseSyntheticEvent) => {
    const navMenu = document.getElementById('navBarMenu');
    const showMenuIcon = document.getElementById('showMenuIcon');
    const hideMenuIcon = document.getElementById('hideMenuIcon');
    if (navMenu && showMenuIcon && hideMenuIcon) {
      if (navMenu.classList.contains('navMenu-show')) {
        navMenu.classList.remove('navMenu-show');
        navMenu.classList.add('navMenu-hide');
        showMenuIcon.classList.remove('hide-nav-icon');
        hideMenuIcon.classList.add('hide-nav-icon');
      } else {
        navMenu.classList.remove('navMenu-hide');
        navMenu.classList.add('navMenu-show');
        showMenuIcon.classList.add('hide-nav-icon');
        hideMenuIcon.classList.remove('hide-nav-icon');
      }
    }

  }


  return (
    <div className='container-fluid nav-bar-container'>
      <div className='container-fluid nav-bar d-flex flex-nowrap'>
        <div className='row align-items-center position-relative p-0'>
          <div className='col-4 col-md-2 navlogo'>
            <Link href='/' className='nav-brand'>
              <Image src='/images/navbar_logo.png' alt='OASD Logo' width={80} height={30} />
            </Link>
          </div>
          {/* navbar menu collapse button */}
          <div className="nav-collapse-btn col-2">
            <button className="navbar-toggler" type="button" data-target="#navBarMenu" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavBar}>
              <span className="navbar-toggler-icon hide-nav-icon" id='showMenuIcon'>
                <SolidIcons icon='menu' className="" />
              </span>
              <span className="navbar-toggler-icon" id='hideMenuIcon'>
                <SolidIcons icon='close' className="" />
              </span>
            </button>
          </div>

          {/* navbar menu list */}
          <div className="col-lg-8 navMenu navMenu-show" id='navBarMenu'>
            <ul className="menuItems">
              <li className={`nav-item ${activeTap == "home" && "nav-item-active"}`}>
                <Link href='/' className='nav-link' onClick={() => setActiveTap("home")}>Home</Link>
              </li>
              <li className={`nav-item ${activeTap == "causes" && "nav-item-active"}`}>
                <Link href='/posts' className='nav-link' onClick={() => setActiveTap("causes")}>Causes</Link>
              </li>
              <li className={`nav-item ${activeTap == "join" && "nav-item-active"}`}>
                <Link href='/jobs' className='nav-link' onClick={() => setActiveTap("join")}>Join Us</Link>
              </li>
              <li className={`nav-item ${activeTap == "about" && "nav-item-active"}`}>
                <Link href='/about' className='nav-link' onClick={() => setActiveTap("about")}>About</Link>
              </li>
              <li className={`nav-item ${activeTap == "contact" && "nav-item-active"}`}>
                <Link href='/contact' className='nav-link' onClick={() => setActiveTap("contact")}>Contact US</Link>
              </li>
            </ul>
          </div>

          {/* search field */}

          {/* search btn */}
          <div className="col-lg-2 nav-collapse-md search-nav" id="search-bar">
            <button className="search" id="search-icon">
              {/* <i className="fa-solid fa-magnifying-glass fa-lg"></i> */}
              <SolidIcons icon='search' className="search-icon" />
            </button>
          </div>
          {/* search form */}
          <div className="container-fluid search-form dnone" id="search-form">
            <div className="close-search" id="close-search">
              <i className="fa-solid fa-x fa-2xl"></i>
            </div>
            <div className="form-group" id="form-group">
              <input type="text" className="form-control" name="text" id="search-text" aria-describedby="helpId"
                placeholder="Search" />
              <input type="submit" value="Search" className="donate" id="search" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}