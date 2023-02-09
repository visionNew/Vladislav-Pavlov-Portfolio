import './skills.css'; // CSS FILE FOR COMPONENT
import { skillData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE

const Skills = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE

  return (
    <section  id="skills">
      {/* ============== Start Skills Section ============== */}
        <h2>{t('skills-h2')}</h2>{/* ============== Skills H2 ============== */}
      {/* ============== Start Skills Cards ============== */}
        <div className="container skills__container">
          { // SKILL DATA MAP
            skillData.map(item =>
              <div key={item.id} className="skill__card">
                 <span className="card__icon">{item.icon}</span>
                 <h5>{item.title}</h5>
                 <small>{t(item.desc)}</small>
              </div>)
          }
        </div>
      {/* ============== End Skills Cards ============== */}
      {/* ============== End Skills Section ============== */}
    </section>
  )
}

export default Skills