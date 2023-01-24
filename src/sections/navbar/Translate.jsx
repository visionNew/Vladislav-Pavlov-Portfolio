import { useState } from "react";
import './translate.css';
import BGN from '../../assets/bulgaria.png';
import USA from '../../assets/usa.png';
import {FaLanguage} from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';

const Translate = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

    const { i18n } = useTranslation();
    function handleClick(lang){
      i18n.changeLanguage(lang);
    }
  return (
    <div className="translate">
        <button id='item__icon' className="btn" onClick={(e) => setIsActive(!isActive)}><FaLanguage /></button>
        {isActive && (
        <div className="translate__options">
            <button className="translate__item" onClick={(e) => { setSelected (); setIsActive(false); handleClick('en');}}><img src={USA} alt="Flag USA" />EN</button>
            <button className="translate__item" onClick={(e) => { setSelected (); setIsActive(false); handleClick('bg');}}><img src={BGN} alt="Flag BG" />BG</button>
        </div>
        )}
    </div>
  )
}

export default Translate

