import React from 'react';
import * as BsIcons from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div style={{ cursor: 'pointer', textAlign: 'center'}}>
            <a target='_blank' href="https://www.linkedin.com/in/edushed" rel='noreferrer' style={{ display: 'flex', alignItems: 'center'}}>
                <BsIcons.BsLinkedin />
            </a>
        </div>

        <div style={{ cursor: 'pointer'}}>
            <a target='_blank' href="https://www.instagram.com/_.kayeddy._/" rel='noreferrer' style={{ display: 'flex', alignItems: 'center'}}>
                <BsIcons.BsInstagram />
            </a>
        </div>

        <div style={{ cursor: 'pointer'}}>
            <a target='_blank' href="https://github.com/Kayeddy" rel='noreferrer' style={{ display: 'flex', alignItems: 'center'}}>
                <BsIcons.BsGithub />
            </a>    
        </div>
        
    </div>
  )
}

export default SocialMedia