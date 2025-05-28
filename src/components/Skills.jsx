import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', level: '20%', icon: 'bx bxl-python' },
    { name: 'C/C++', level: '5%', icon: 'bx bxl-c-plus-plus' },
    { name: 'JavaScript', level: '2%', icon: 'bx bxl-javascript' },
    { name: 'HTML', level: '20%', icon: 'bx bxl-html5' },
    { name: 'UX/UI', level: '0%', icon: 'bx bxs-paint' }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h3 className="skills__subtitle">Kỹ năng chuyên môn</h3>
          <p className="skills__text">##################</p>
          
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skills__data"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="skills__names">
                <i className={`${skill.icon} skills__icon`}></i>
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className="skills__bar" style={{ width: skill.level }}></div>
              <div>
                <span className="skills__percentage">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="skills__img">
          <img src="assets/img/skills1.jpg" alt="Skills" />
        </div>
      </div>
    </section>
  );
};

export default Skills;