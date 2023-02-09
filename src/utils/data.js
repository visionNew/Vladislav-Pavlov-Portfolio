            //============================ TABLE OF CONTENTS ============================

                    //============== -1- NAVBAR DATA ==============
                    //============== -2- SOCIALS DATA ==============
                    //============== -3- SKILLS DATA ==============
                    //============== -4- PORTFOLIO DATA ==============
                    //============== -5- CONTACT DATA ==============

import { FaFacebook, FaGithub, FaLinkedin, FaReact, FaVuejs, FaViber, FaPhone, FaFacebookMessenger } from 'react-icons/fa'; // IMPORT ICON FILE
import { IoLogoCss3, IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io'; // IMPORT ICON FILE
import { SiTypescript } from 'react-icons/si'; // IMPORT ICON FILE
import { MdOutlineEmail } from 'react-icons/md'; // IMPORT ICON FILE

    //============== -1- NAVBAR DATA ==============
export const navData= [
        {id: 1, link:'#hero', title:'nav.1'},
        {id: 2, link:'#about', title:'nav.2'},
        {id: 3, link:'#skills', title:'nav.3'},
        {id: 4, link:'#portfolio', title:'nav.4'},
        {id: 5, link:'#contacts', title:'nav.5'},
    ];

    //============== -2- SOCIALS DATA ==============
export const socialData= [
        {id: 1, link:'https://www.facebook.com/vladislav.pavlov1', icon: <FaFacebook />},
        {id: 2, link:'https://github.com/visionNew', icon: <FaGithub />},
        {id: 3, link:'https://www.linkedin.com/in/vladislav-pavlov-202841165', icon: <FaLinkedin />}
    ];

    //============== -3- SKILLS DATA ==============
export const skillData= [
        {id: 1, icon:<IoLogoHtml5/>, title: 'HTML', desc: 'skills-desc.1'},
        {id: 2, icon:<IoLogoCss3/>, title: 'CSS', desc: 'skills-desc.1'},
        {id: 3, icon:<IoLogoJavascript/>, title: 'JAVASCRIPT', desc: 'skills-desc.2'},
        {id: 4, icon:<FaReact/>, title: 'REACT.JS', desc: 'skills-desc.3'},
        {id: 5, icon:<FaVuejs/>, title: 'VUE.JS', desc: 'skills-desc.4'},
        {id: 6, icon:<SiTypescript/>, title: 'TYPESCRIPT', desc: 'skills-desc.4'},
       
    ];

    //============== -4- PORTFOLIO DATA ==============
export const cardData= [
        {id: 1, title:'portfolio-h3', img_name:'project-1', target:'_blank', link_git:'https://github.com/visionNew/Vladislav-Pavlov-Portfolio', link_dribb:'#index.html'},
        {id: 2, title:'COCO Services V1',  img_name:'project-2', target:'_blank', link_git:'https://github.com/visionNew/COCO-host-version-1', link_dribb:'https://dribbble.com/shots/20404584-COCO-Services-V1'},
        {id: 3, title:'COCO Services V2',  img_name:'project-3', target:'_blank', link_git:'https://github.com/visionNew/COCO-host-version-2', link_dribb:'https://dribbble.com/shots/20405827-COCO-Services-V2'},
        {id: 4, title:'COCO Services V3',  img_name:'project-4', target:'_blank', link_git:'https://github.com/visionNew/COCO-host-version-3', link_dribb:'https://dribbble.com/shots/20405835-COCO-Services-V3'},
        {id: 5, title:'COCO Services V4',  img_name:'project-5', target:'_blank', link_git:'https://github.com/visionNew/COCO-host-version-4', link_dribb:'https://dribbble.com/shots/20405946-COCO-Services-V4'},
        {id: 6, title:'COCO Services V5', img_name:'project-6', target:'_blank', link_git:'https://github.com/visionNew/COCO-host-version-5', link_dribb:'https://dribbble.com/shots/20407084-COCO-Services-V5'},
        {id: 7, title:'COCO Studios V1', img_name:'project-7', target:'_blank', link_git:'https://github.com/visionNew/COCO-studios-version-1', link_dribb:'https://dribbble.com/shots/20426337-COCO-Studios-V1'},
        {id: 8, title:'COCO Studios V2', img_name:'project-8', target:'_blank', link_git:'https://github.com/visionNew/COCO-studios-version-2', link_dribb:'https://dribbble.com/shots/20426807-COCO-Sudios-V2'},
        {id: 9, title:'COCO Studios V3', img_name:'project-9', target:'_blank', link_git:'https://github.com/visionNew/COCO-studios-version-3', link_dribb:'https://dribbble.com/shots/20426853-COCO-Sudios-V3'},
        {id: 10, title:'COCO Studios V4', img_name:'project-10', target:'_blank', link_git:'https://github.com/visionNew/COCO-studios-version-4', link_dribb:'https://dribbble.com/shots/20426864-COCO-Sudios-V4'},
        {id: 11, title:'COCO Studios V5', img_name:'project-11', target:'_blank', link_git:'https://github.com/visionNew/COCO-studios-version-5', link_dribb:'https://dribbble.com/shots/20426875-COCO-Sudios-V5'},
    ];
    
    //============== -5- CONTACT DATA ==============
export const contactData= [
        {id: 1, icon:<MdOutlineEmail className='contact__option-icon'/>, h4: 'Email', h5: 'contact-h5.1', link:'mailto: snowcho88@gmail.com', target:'_blank', link_name:'contact-btn.1'},
        {id: 2, icon:<FaFacebookMessenger className='contact__option-icon'/>, h4: 'Messenger', h5: 'contact-h5.1', link:'http://m.me/vladislav.pavlov1', target:'_blank', link_name:'contact-btn.1'},
        {id: 3, icon:<FaViber className='contact__option-icon'/>, h4: 'Viber', h5: 'contact-h5.2', link:'viber://chat?number=+359887330448', target:'_blank', link_name:'contact-btn.1'},
        {id: 4, icon:<FaPhone className='contact__option-icon'/>, h4: 'Phone', h5: 'contact-h5.2', link:'tel:+359887330448', target:'_blank', link_name:'contact-btn.2'},
       
    ];
