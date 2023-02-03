import './footer.css';
import { socialData } from '../../utils/data';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/vplogo.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id='footer' className="container">
        <a href="#header" className='footer__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <div className="btn__socials">
          {
            socialData.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>) 
          }
        </div>
        <div>
            <small>&copy; {t('footer-small')}</small>
        </div>
    </footer>
  )
}

export default Footer