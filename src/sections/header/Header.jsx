import './header.css';
import data from './data';
import { useTranslation } from 'react-i18next';
import ImgPerson from '../../assets/vp-person.png'

const Header = () => {
  const { t } = useTranslation();
  return (
    <section id="header">
        <div className="container header__container">
          <div className="header__profile">
            <h5><span>-------</span> {t('header-span')}</h5>
            <h1>{t('header-h1.1')} <span>{t('header-h1.2')}</span> {t('header-h1.3')}</h1>
            <p>{t('header-p')}</p>
            <div className="header__btn">
              <a href="#contacts" className="btn">{t('header-btn.1')}</a>
              <a href="#portfolio" className="btn">{t('header-btn.2')}</a>
            </div>
            <div className="btn__socials">
              {
                data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>) 
              } 
            </div>
          </div>
          <img src={ImgPerson} alt="Header Person" />
        </div>
    </section>
  )
}

export default Header