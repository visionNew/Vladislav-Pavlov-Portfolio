import './hero.css';
import { socialData } from '../../utils/data';
import { useTranslation } from 'react-i18next';
import ImgPerson from '../../assets/vp-person.png'

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="hero">
        <div className="container hero__container">
          <div className="hero__profile">
            <h5><span>-------</span> {t('hero-span')}</h5>
            <h1>{t('hero-h1.1')} <span>{t('hero-h1.2')}</span> {t('hero-h1.3')}</h1>
            <p>{t('hero-p')}</p>
            <div className="hero__btn">
              <a href="#contacts" className="btn">{t('hero-btn.1')}</a>
              <a href="#portfolio" className="btn">{t('hero-btn.2')}</a>
            </div>
            <div className="btn__socials">
              {
                socialData.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>) 
              } 
            </div>
          </div>
          <img src={ImgPerson} alt="hero Person" />
        </div>
    </section>
  )
}

export default Hero