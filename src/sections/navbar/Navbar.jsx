import Logo from '../../assets/vplogo.png';
import data from './data';
import './navbar.css';
import Dropdown from './Dropdown';
import Translate from './Translate';
import { useState} from "react";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("");

  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="#header" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {
            data.map(item => <li key={item.id}>
                                <a href={item.link} className="btn">{t(item.title)}</a>
                             </li>)
          }
        </ul>
        
        <Dropdown selected={selected} setSelected={setSelected} />
        <Translate setSelected={setSelected} />
      </div>
    </nav>
  )
}

export default Navbar