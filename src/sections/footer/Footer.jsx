import Logo from '../../assets/vplogo.png';
import './footer.css';
import data from './data';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id='footer' className="container">
        <a href="#header" className='footer__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <div className="btn__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>) 
          } 
        </div>
        <div>
            <small>&copy; {t('footer-small')}</small>
        </div>
    </footer>
  )
}

export default Footer