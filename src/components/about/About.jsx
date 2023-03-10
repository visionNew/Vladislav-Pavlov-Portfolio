import './about.css'; // CSS FILE FOR COMPONENT
import { useState } from 'react'; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE
import { FaDownload } from 'react-icons/fa'; // IMPORT ICON FILE
import { AiOutlineSafetyCertificate } from 'react-icons/ai'; // IMPORT ICON FILE
import CV from '../../assets/CV-VZP.pdf';// PDF CV FILE
import IMGAbout from '../../assets/vp-person-about.png';// IMAGE PERSONA FILE
import IMGCert from '../../assets/certificate.png'; // IMAGE CERTIFICATE FILE

const About = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
// START FUNCTION FOR POPUP
  const [ isOpen, setIsOpen ] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen); 
  const closePopup =() => setIsOpen(false); 
// END FUNCTION FOR POPUP
  return (
    <section id="about">
      {/* ============== Start About Section ============== */}
        <div className="container about__container">
          {/* ============== Start About Left Info ============== */}
            <div className="about__left slide-in-left">
            {/* ============== Start About Image ============== */}
              <div className="about__portrait">
                <img src={IMGAbout} alt="About Persona" />
              </div>
            {/* ============== End About Image ============== */}
            </div>
          {/* ============== End About Left Info ============== */}
          {/* ============== Start About Right Info ============== */}
            <div className="about__right slide-in-right">
              <h2>{t('about-h2')}</h2> {/* ============== About H2 ============== */}
                <p>
                  {t('about-p.1')}{/* ============== About Paragraph Info ============== */}
                </p>
                <p>
                  {t('about-p.2')} {/* ============== About Paragraph Info ============== */}
                </p>
              {/* ============== Start About Buttons ============== */}
                <div className="about__btns blur">
                {/* ============== Start About Buttons Download ============== */}
                  <a href={CV} download className='btn'><span>{t('about-btn.1')} <FaDownload /></span></a>
                {/* ============== End About Buttons Download ============== */}
                {/* ============== Start About Buttons Popup Certificate ============== */}
                  <button onClick={togglePopup} className='btn'><span>{t('about-btn.2')} <AiOutlineSafetyCertificate className='btn-icon' /></span></button>  
                {/* ============== End About Buttons Popup Certificate ============== */}
                </div>
              {/* ============== End About Buttons ============== */}
            </div>
            {/* ============== Start About Popup Certificate ============== */}
              <div>
                {
                  isOpen && <div onClick = {closePopup} className="popup__container">
                                <div className= "popup__body scale-in-center" >
                                    <img src={IMGCert} alt="Certificate" />
                                </div>
                            </div>
                }
              </div>
            {/* ============== End About Popup Certificate ============== */}
          {/* ============== End About Right Info ============== */}  
          </div>
      {/* ============== End About Section ============== */}
    </section>

  )
}

export default About