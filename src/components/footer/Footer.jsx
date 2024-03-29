import './footer.css'; // CSS FILE FOR COMPONENT
import { socialData } from '../../utils/data';// DATA FILE FOR COMPONENT
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE
import Logo from '../../assets/vplogo.png'; // IMAGE LOGO FILE

const Footer = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE

  return (
    <footer id='footer' className="container">
      {/* ============== Start Footer Section ============== */}
      {/* ============== Start Logo ============== */}
        <a href="#hero" className='footer__logo animation-left'>
          <img src={Logo} alt="Logo" />
        </a>
      {/* ============== End Logo ============== */}
      {/* ============== Start Social Buttons ============== */}
        <div className="btn__socials animation-right">
          {// SOCIAL DATA MAP
            socialData.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className='btn__social'><span>{item.icon}</span></a>) 
          }
        </div>
      {/* ============== End Social Buttons ============== */}
      {/* ============== Start Copyright ============== */}
        <div className='animation-center'>
            <small>&copy; {t('footer-small')}</small>
        </div>
      {/* ============== End Copyright ============== */}
      {/* ============== End Footer Section ============== */}
    </footer>
  )
}

export default Footer