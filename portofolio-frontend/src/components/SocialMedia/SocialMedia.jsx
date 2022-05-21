import React from 'react';

import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div style={{ cursor: 'pointer'}}>
            <BsIcons.BsLinkedin />
        </div>
        <div style={{ cursor: 'pointer'}}>
            <BsIcons.BsInstagram />
        </div>
        <div style={{ cursor: 'pointer'}}>
            <BsIcons.BsFacebook />
        </div>
        <div style={{ cursor: 'pointer'}}>
            <BsIcons.BsGithub />
        </div>
        
    </div>
  )
}

export default SocialMedia