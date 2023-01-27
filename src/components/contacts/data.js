import {MdOutlineEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {FaViber} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';


const data= [
    {id: 1, icon:<MdOutlineEmail className='contact__option-icon'/>, h4: 'Email', h5: 'contact-h5.1', link:'mailto: snowcho88@gmail.com', target:'_blank', link_name:'contact-btn.1'},
    {id: 2, icon:<FaFacebookMessenger className='contact__option-icon'/>, h4: 'Messenger', h5: 'contact-h5.1', link:'http://m.me/vladislav.pavlov1', target:'_blank', link_name:'contact-btn.1'},
    {id: 3, icon:<FaViber className='contact__option-icon'/>, h4: 'Viber', h5: 'contact-h5.2', link:'viber://chat?number=+359887330448', target:'_blank', link_name:'contact-btn.1'},
    {id: 4, icon:<FaPhone className='contact__option-icon'/>, h4: 'Phone', h5: 'contact-h5.2', link:'tel:+359887330448', target:'_blank', link_name:'contact-btn.2'},
   
]

export default data;