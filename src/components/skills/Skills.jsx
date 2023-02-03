import './skills.css';
import { skillData } from '../../utils/data';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
        <h2 className="tracking-in-expand-fwd" id="bar">{t('skills-h2')}</h2>
        <div className="container skills__container">
          {
            skillData.map(item =>
              <div key={item.id} className="skill__card">
                 <span className="card__icon">{item.icon}</span>
                 <h5>{item.title}</h5>
                 <small>{t(item.desc)}</small>
              </div>)
          }
        </div>
    </section>
  )
}

export default Skills