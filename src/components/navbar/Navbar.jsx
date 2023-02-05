import './navbar.css';
import { navData } from '../../utils/data';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';
import Logo from '../../assets/vplogo.png';
import BGN from '../../assets/bulgaria.png';
import USA from '../../assets/usa.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { i18n } = useTranslation();

  function handleClick(lang){ i18n.changeLanguage(lang); }
  
  useEffect(() => {
    const handleScroll = () => {
      const H2Tags = document.querySelectorAll('h2');
      H2Tags.forEach((h2Tag) => {
        const rect = h2Tag.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          h2Tag.classList.add('tracking-in-expand-fwd');
        } else {
          h2Tag.classList.remove('tracking-in-expand-fwd');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.classList.add('bounce-in-top');
  }, []);

  return (
    <nav ref={elementRef} id="navbar">
      <div className="container nav__container">
        <a href="#header" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {
            navData.map(item => <li key={item.id}>
                                <a href={item.link} className="btn">{t(item.title)}</a>
                             </li>)
          }
        </ul>
        
        <Dropdown selected={selected} setSelected={setSelected} />

        <div className="translate">
          <button id='item__icon' className="btn" onClick={(e) => setIsActive(!isActive)}><FaLanguage /></button>
          {
            isActive && (
              <div className="translate__options">
                  <button className="translate__item" setSelected={setSelected} onClick={(e) => { setIsActive(false); handleClick('en');}}><img src={USA} alt="Flag USA" />EN</button>
                  <button className="translate__item" setSelected={setSelected} onClick={(e) => { setIsActive(false); handleClick('bg');}}><img src={BGN} alt="Flag BG" />BG</button>
              </div>)
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar