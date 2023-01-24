import './skills.css';
import data from './data';
import { useTranslation } from 'react-i18next';

// import React, { useState, useEffect } from "react";

const Skills = () => {
  const { t } = useTranslation();



  return (
    <section id="skills">
        <h2 className="tracking-in-expand-fwd" id="bar">{t('skills-h2')}</h2>

        <div className="container skills__container">
          {
            data.map(item =>
              <div key={item.id} className="skill__card">
                 <span className="card__icon">{item.icon}</span>
                 <h5>{item.title}</h5>
                 <small>{t(item.desc)}</small>
              </div>
            )
          }
        </div>
    </section>
  )
}

export default Skills