import { useState } from "react";
import data from './data';
import './dropdown.css';
import { useTranslation } from 'react-i18next';

function Dropdown ({ selected, setSelected }) {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(false);
    return (
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => {setIsActive(!isActive)}} >
                    {t(selected)}
                </div>
                {isActive && (
                    <ul className="dropdown-content">
                        {   data.map((item) => (
                            <li onClick={(e) => { setSelected (item.title); setIsActive(false);}} className="dropdown-item">
                                <a href={item.link}>{t(item.title)}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
export default Dropdown;
