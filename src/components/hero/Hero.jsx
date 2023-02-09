import './hero.css'; // CSS FILE FOR COMPONENT
import { socialData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE
import ImgPerson from '../../assets/vp-person.png'; // IMAGE PERSONA FILE

const Hero = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
  
  return (
    <section id="hero">
      {/* ============== Start Hero Section ============== */}
        <div className="container hero__container">
        {/* ============== Start Hero Left Info ============== */}
          <div className="hero__profile">
            <h5><span>-------</span> {t('hero-span')}</h5>
            <h1>{t('hero-h1.1')} <span>{t('hero-h1.2')}</span> {t('hero-h1.3')}</h1> {/* ============== Hero H1 Name ============== */}
            <p>{t('hero-p')}</p> {/* ============== Hero Paragraph Info ============== */}
          {/* ============== Start Hero Buttons  ============== */}
            <div className="hero__btn">
              <a href="#contacts" className="btn">{t('hero-btn.1')}</a>
              <a href="#portfolio" className="btn">{t('hero-btn.2')}</a>
            </div>
          {/* ============== End Hero Buttons ============== */}
          {/* ============== Start Social Buttons ============== */}
            <div className="btn__socials">
              { // SOCIAL DATA MAP
                socialData.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>) 
              } 
            </div>
          {/* ============== End Social Buttons ============== */}
          </div>
        {/* ============== End Hero Left Info ============== */}
        {/* ============== Start Hero Right Info ============== */}
          <img src={ImgPerson} alt="hero Person" />
        {/* ============== End Hero Right Info ============== */}
        </div>
      {/* ============== End Hero Section ============== */}
    </section>
  )
}

export default Hero