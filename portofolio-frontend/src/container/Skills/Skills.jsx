import { React, useState, useEffect } from 'react';
import {MDCTooltip} from '@material/tooltip';
import { motion } from 'framer-motion';

import { AppWrap } from '../../Wrapper';
import { urlFor, client } from '../../Sanity_client';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

import './Skills.scss';


const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  
  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    })

  }, [])

  return (
    <>
      <h2 className='head-text'> Skills & Experience </h2>

      <div className='app__skills-container'>

        <motion.div
          className='app__skills-list'
        >

          {
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition= {{ duration: 0.5 }}
                className= 'app__skills-item app__flex'
                key={skill.name}
              >

                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>

                  <img src= { urlFor(skill.icon) } alt= { skill.name } />

                </div>
                <p className='p-text'> { skill.name } </p>

              </motion.div>
            ))
          }

        </motion.div>
        
        <motion.div
          className='app__skills-exp'
        >
          {
           experiences.map((experience) => (
             <motion.div
              className='app__skills-exp-item'
              key={ experience.name }
             >
               <div className='app__skills-exp-year'>
                  <p className='bold-text'> { experience.year } </p>
               </div>

               <motion.div className='app__skills-exp-works'>
                  {
                     experience.works.map((works) => (
                      <>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition= {{ duration: 0.5 }}
                            className= 'app__skills-exp-work app__flex'
                            data-tip
                            data-for= { works.name }
                            key={ works.name }
                        >
                          <h4 className='bold-text'>
                            { works.name }
                          </h4>
        
                          <p className='p-text'> { works.company } </p>
        
                        </motion.div>

                        <div id="tooltip-id" class="mdc-tooltip" role="tooltip" aria-hidden="true">
                          <div class="mdc-tooltip__surface mdc-tooltip__surface-animation">
                            lorem ipsum dolor
                          </div>
                        </div>
                        
                      </>
                    ))
                  }
               </motion.div>

             </motion.div>
           ))
          }

        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');