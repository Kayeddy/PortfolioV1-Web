import React from 'react';
import { Images } from '../../constants';

import './Navbar.scss';

const Nav = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src= {Images.logo} alt="Logo" />
      </div>
      <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) =>
          (
            <li key= {`link-${item}`} className='app__flex p-text'>
              <div />
              <a href={`#${item}`}> {item} </a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Nav