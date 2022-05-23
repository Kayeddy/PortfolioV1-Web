import { React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../Sanity_client';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';


import './Work.scss';


const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, changeAnimateCard] = useState( { y: 0, opacity: 1 } );
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    changeAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {

      changeAnimateCard([{ y: 0, opacity: 1 }]);
      item === 'All' ? setFilterWorks(works) : setFilterWorks( works.filter( (work) => work.tags.includes(item) ));
      
    }, 400);
  }

  return (
    <>
      <h2 className="head-text"> My creative <span> portfolio </span><br /> section </h2>

      <div className='app__work-filter'>
        {
          ['UI/UX', 'web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
            <div
              key={index}
              onClick= {() => handleWorkFilter(item)}
              className= {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active': ''}`}
            >
              {item}
            </div>
          ))
        }
      </div>
    
      <motion.div
        animate= {animateCard}
        transition={ { duration: 0.5, delayChildren: 0.5 } }
        className= 'app__work-portfolio'
      >
        {
          filterWorks.map((work, index) => (
            <div key= {index} className='app__work-item app__flex'>
              <div className= 'app__work-img app__flex'>
                <img src= {urlFor(work.imgUrl)} alt= {work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition= {{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className= 'app__work-hover app__flex'
                >

                  <a href= {work.projectLink} target= '_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition= {{ duration: 0.25, ease: 'easeIn' }}
                      className= 'app__flex'
                    >
                        <AiIcons.AiFillEye />

                    </motion.div>
                  </a>

                  <a href= {work.projectLink} target= '_blank' rel='norefferer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition= {{ duration: 0.25, ease: 'easeIn' }}
                      className= 'app__flex'
                    >
                        <BsIcons.BsGithub />

                    </motion.div>
                  </a>

                </motion.div>

              </div>

              <div className='app__work-content app__flex'>
                <h1 className='bold-text'>
                  {work.title}
                </h1>
                <p className='p-text' style={{marginTop: 10}}>
                  {work.description}
                </p>

                <div className='app__work-tag app_flex'>
                    <p className='p-text'>
                      {work.tags[0]}
                    </p>
                </div>

              </div>

            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);