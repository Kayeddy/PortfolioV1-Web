import { React, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../Sanity_client';


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

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {

          tooltip: {
            maxWidth: '300px',
            backgroundColor: 'var(--white-color)',
            boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            padding: '1rem',
            color: 'var(--gray-color)',
            textAlign: 'center',
            lineHeight: '1.5',
            opacity: '1',
            fontSize: '0.9rem',
          }

        }
      }
    }
  });
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
                        <ThemeProvider theme={ theme }>
                          <Tooltip title= {works.desc}>
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
                          </Tooltip>
                        </ThemeProvider>
                       
        
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

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);