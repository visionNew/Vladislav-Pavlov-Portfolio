import './dropdown.css'; // CSS FILE FOR COMPONENT
import { navData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useState } from "react"; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE

function Dropdown ({ selected, setSelected }) {
    const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
    const [isActive, setIsActive] = useState(false); // FUNCTION FOR ACTIVE
    
    return (
            <div className="dropdown">
            {/* ============== Start Dropdown Menu ============== */}
            {/* ============== Start Dropdown Button ============== */}
                <div className="dropdown__btn" onClick={(e) => {setIsActive(!isActive)}} >
                    {t(selected || "nav.1")}
                </div>
            {/* ============== End Dropdown Button ============== */}
            {/* ============== Start Dropdown Menu Button ============== */}
                { // FUNCTION FOR ACTIVE
                    isActive && (
                        <ul className="dropdown__content">
                            {   // NAVBAR DATA MAP
                                navData.map((item) => (
                                <li onClick={(e) => { setSelected (item.title); setIsActive(false);}} className="dropdown__item">
                                    <a href={item.link}>{t(item.title)}</a>
                                </li>))
                            }
                        </ul>)
                }
            {/* ============== End Dropdown Menu Button ============== */}
            {/* ============== End Dropdown Menu ============== */}
            </div>
        );
    }
export default Dropdown;
