import React from 'react';
import { useState } from 'react';
import { Images } from '../../constants';
import * as HiIcons from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Nav = () => {

  const [toggle, setToggle] = useState(false);

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

        <div className="app__navbar-menu">
            <HiIcons.HiOutlineMenuAlt2 onClick={() => setToggle(true)} />
            {
              toggle && (
                <motion.div 
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.8, ease: 'easeInOut'}}
                >

                  <HiIcons.HiX onClick={() => setToggle(false)}/>

                  <ul>

                    {['home', 'about', 'work', 'skills', 'contact'].map((item) =>
                    (
                      <li key= {item}>
                        <div />
                        <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>
                      </li>
                    ))}

                  </ul>
                  
                </motion.div>
              )
            }
        </div>
    </nav>
  )
}

export default Nav