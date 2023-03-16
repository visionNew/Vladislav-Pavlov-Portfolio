import './header.css'; // CSS FILE FOR COMPONENT
import { navData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import Dropdown from './Dropdown'; // DROPDOWN FILE FOR COMPONENT
import { useState, useEffect, useRef } from "react"; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE
import { FaLanguage } from 'react-icons/fa'; // IMPORT ICON FILE
import Logo from '../../assets/vplogo.png'; // IMAGE PERSONA FILE
import BGN from '../../assets/bulgaria.png'; // IMAGE BG FLAG FILE
import USA from '../../assets/usa.png'; // IMAGE USA FLAG FILE

const Header = () => {
  const [selected, setSelected] = useState(""); // FUNCTION FOR SELECTED
  const [isActive, setIsActive] = useState(false); // FUNCTION FOR ACTIVE
  const [scroll, setScroll] = useState(false); // FUNCTION FOR SCROLL
// START FUNCTION TRANSLATION PAGE
  const { t } = useTranslation(); 
  const { i18n } = useTranslation();
  function handleClick(lang){ i18n.changeLanguage(lang); }
// END FUNCTION TRANSLATION PAGE
// START FUNCTION ANIMATION LOAD
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScroll(isScrolling);
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
          entry.target.classList.add('show');
        } 
      })
    })

    const hiddenBlur = document.querySelectorAll('.blur');
    hiddenBlur.forEach((el) => observer.observe(el));
    
    const slideRight = document.querySelectorAll('.slide-in-right');
    slideRight.forEach((el) => observer.observe(el));
    
    const slideRight2 = document.querySelectorAll('.slide-in-right-2');
    slideRight2.forEach((el) => observer.observe(el));

    const slideLeft = document.querySelectorAll('.slide-in-left');
    slideLeft.forEach((el) => observer.observe(el));
  }, []);
// END FUNCTION ANIMATION LOAD
// START FUNCTION NAVBAR ANIMATION
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.classList.add('bounce-in-top');
  }, []);
// END FUNCTION NAVBAR ANIMATION
  return (
    <section id="header">
    {/* ============== Start Header ============== */}
      <nav ref={elementRef} id="navbar" className={scroll ? 'scrolled' : 'bg-yellow'}>
      {/* ============== Start NavBar ============== */}
        <div className="container nav__container">
        {/* ============== Start NavBar logo ============== */}
          <a href="#hero" className='nav__logo'>
            <img src={Logo} alt="Logo" />
          </a>
        {/* ============== End NavBar Logo============== */}
        {/* ============== Start NavBar Menu ============== */}
          <ul className="nav__menu">
            {// NAVBAR DATA MAP
              navData.map(item => <li key={item.id}>
                                  <a href={item.link} className="btn">{t(item.title)}</a>
                              </li>)
            }
          </ul>
        {/* ============== End NavBar Menu ============== */}
        {/* ============== Start Dropdown Menu File ============== */}
          <Dropdown selected={selected} setSelected={setSelected} />
        {/* ============== End Dropdown Menu File ============== */}
        {/* ============== Start Translation Buttons ============== */}
          <div className="translate ">
            <button id='item__icon' className="btn" onClick={(e) => setIsActive(!isActive)}><FaLanguage /></button>
            { // FUNCTION FOR ACTIVE
              isActive && (
                <div className={scroll ? 'translate__options scrolled' : 'bg-yellow translate__options '}>
                    <button className="translate__item" setSelected={setSelected} onClick={(e) => { setIsActive(false); handleClick('en');}}><img src={USA} alt="Flag USA" />EN</button>
                    <button className="translate__item" setSelected={setSelected} onClick={(e) => { setIsActive(false); handleClick('bg');}}><img src={BGN} alt="Flag BG" />BG</button>
                </div>)
            }
          </div>
        {/* ============== End Translation Buttons ============== */}
        </div>
      {/* ============== End NavBar ============== */}
      </nav>
    {/* ============== End Header ============== */}
    </section>
  )
}

export default Header