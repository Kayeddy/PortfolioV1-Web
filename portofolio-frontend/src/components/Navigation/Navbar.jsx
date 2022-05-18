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
            <HiIcons.HiOutlineMenuAlt2 onClick={() => setToggle(true) } className='app__navbar-icon' />

            {
              toggle && (
                <motion.div 
                  whileInView={{ x: [200, 30] }}
                  initial= {{x: "50%", y: "1%", opacity: 0, scale: 0.5}}
                  animate={{x: 0, y: 0, opacity: 1, scale: 1}}
                  transition={{ duration: 0.5, ease: 'easeInOut'}}>

                  <HiIcons.HiX onClick={ () => setToggle(false) } className='app__navbar-icon'/>

                  <ul>

                    {['home', 'about', 'work', 'skills', 'contact'].map((item) =>
                    (
                      <li key= {item}>
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