import { React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../Sanity_client';

import './Testimonial.scss';

import * as HiIcons from 'react-icons/hi';


const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    })

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    })

  }, [])

  const handleClickEvent = (index) => {
    setCurrentIndex(index);
  }

  const testShortcut = testimonials[currentIndex];

  return (
    <>
      {
        testimonials.length && (
          <>
            <div className='app__testimonial-item app__flex'>

              <img src= {urlFor(testShortcut.imgurl)} alt="Testimonial" />

              <div className='app__testimonial-content'>

                <p className='p-text'>
                  {
                    testShortcut.feedback
                  }
                </p>

                <div>
                  <h4 className='bold-text'>
                    { 
                      testShortcut.name
                    }
                  </h4>

                  <h5 className='p-text'>
                    {
                      testShortcut.company
                    }
                  </h5>

                </div>
              </div>

            </div>

            <div className='app__testimonial-btns app__flex'>
                  <div className='app__flex' onClick={() => handleClickEvent( currentIndex === 0 ? testimonials.lenght -1 : currentIndex - 1)}>
                    <HiIcons.HiChevronLeft />
                  </div>

                  <div className='app__flex' onClick={() => handleClickEvent( currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiIcons.HiChevronRight />
                  </div>
            </div>
          </>
        )
      }

      <div className='app__testimonial-brands app__flex'>
        {
          brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition= {{ duration: 0.5, type: 'tween' }}
              key={ brand.id }
            >
              <img src= { urlFor(brand.imgUrl) } alt={ brand.name } />
            </motion.div>
          )) 
        }
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);