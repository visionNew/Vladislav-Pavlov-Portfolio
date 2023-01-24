import './about.css';
import React,{useState} from 'react'
import IMGAbout from '../../assets/vp-person-about.png'
import IMGCert from '../../assets/certificate.png'
import CV from '../../assets/CV-VZP.pdf'
import {FaDownload, FaRegWindowClose} from 'react-icons/fa'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const About = () => {
      const { t } = useTranslation();

      const [isOpen, setIsOpen] = useState(false);
      const togglePopup = () => { setIsOpen(!isOpen); }
      const closePopup =() => { setIsOpen(false)}

  
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
              <div className="about__portrait">
                <img src={IMGAbout} alt="About Persona" />
              </div>
            </div>
            <div className="about__right">
              <h2 className="tracking-in-expand-fwd">{t('about-h2')}</h2>
                <p>
                  {t('about-p.1')}
                </p>
                <p>
                  {t('about-p.2')}
                </p>
                <div className="about__btns">
                  <a href={CV} download className='btn'>{t('about-btn.1')} <FaDownload /></a>
               
                  <butto onClick={togglePopup} className='btn'>{t('about-btn.2')} <AiOutlineSafetyCertificate className='btn-icon' /></butto>  
                </div>
                
                <div>
                  {
                    isOpen && <div className="popup__container">
                                  <div className="popup__body scale-in-center">
                                      <img src={IMGCert} alt="Certificate" />
                                      <button onClick={closePopup}><FaRegWindowClose /></button>
                                  </div>
                              </div>
                  }
                </div>
             </div>
          </div>
    </section>

  )
}

export default About