import { React, useState } from 'react';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { Images } from '../../constants';
import emailjs from '@emailjs/browser';

import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_vacoyo4', 'template_o39zons', e.target, '-cOckQz1uUaGbQH3F')
      .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
   
  }

  return (
    <>

    {
        !isFormSubmitted  &&    
        <h2 className='head-text'> ¿Does a coffee & a chat with me sound good? 😊 </h2>
    }
   
      <div className='app__footer-cards'>

        <div className='app__footer-card'>
          <img src= {Images.email} alt="Email" />
          <a href="mailto:djeddyedwards@gmail.com" target="_blank" className='p-text'> Mail me </a>
        </div>

        <div className='app__footer-card'>
          <img src= {Images.mobile} alt="Mobile" />
          <a href="tel: +57 3224025355" target="_blank" className='p-text'> Call me </a>
        </div>

      </div>

      {
        !isFormSubmitted ?  
        
          <form onSubmit={handleSubmit} div className='app__footer-form app__flex'>
            
              <div className='app__flex'>
                <input type="text" className='p-text' placeholder='Your name' name= 'name' value={name} onChange= {handleInputChange}/>
              </div>

              <div className='app__flex'>
                <input type="text" className='p-text' placeholder='Your email address' name= 'email' value={email} onChange= {handleInputChange}/>
              </div>

              <div className='app__flex'>
                <textarea name= 'message' value= {message} cols="40" rows="8" placeholder='Your message' className='p-text' onChange={handleInputChange}></textarea>
              </div>

              <button type='submit' value='send message' className='p-text'>
                { loading ? 'sending your message': 'Send message' }
              </button>
       
          </form>
          
    

      : <div>
          <h3 className='head-text'>
            Thank you for getting in touch. Expect your reply soon.
          </h3>
        </div>
    }
   
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);