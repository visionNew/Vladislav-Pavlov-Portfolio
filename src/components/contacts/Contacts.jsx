import './contacts.css'; // CSS FILE FOR COMPONENT
import { contactData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useState } from 'react'; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE
import { sendEmail } from '../../services/emailServices'; // EMAIL SERVICE FILE

const Contacts = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
// START FUNCTION FOR EMAIL CONTACT
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
// END FUNCTION FOR EMAIL CONTACT
  return (
    <section id="contacts">
    {/* ============== Start Contact Section ============== */}
      <h2>{t('contact-h2')}</h2> {/* ============== Contact H2 ============== */}
      <div className="container contact__container">
      {/* ============== Start Contact Options ============== */}
        <div className="contact__options">
          { // CONTACT DATA MAP
            contactData.map(item => <article className={item.class} key={item.id}>
                  {item.icon} {/* ============== Options Icon ============== */}
              <div>
                  <h4>{item.h4}</h4> {/* ============== Options H4 ============== */}
                  <h5>{t(item.h5)}</h5> {/* ============== Options H5 ============== */}
                  <a href={item.link} target={item.target}>{t(item.link_name)}</a> {/* ============== Options Button ============== */}
              </div>
            </article>)
          }
        </div>
      {/* ============== End Contact Options ============== */}
      {/* ============== Start Contact Form ============== */}
        <form className='blur'>
            <input value={name} name="name" placeholder={t('contact-placeholder.1')} onChange={({target}) => setName(target.value)} required/>
            <input value={email} type="email"  name="email" placeholder={t('contact-placeholder.2')} onChange={({target}) => setEmail(target.value)} required/>
            <textarea value={message} name="message" rows="7" placeholder={t('contact-placeholder.3')} onChange={({target}) => setMessage(target.value)} required></textarea>
          {/* ============== Start Button Send Form ============== */}
            <button onClick={(event) => { 
              event.preventDefault() 
              sendEmail(name, email, message) }} 
              className="btn"><span>{t('contact-btn.3')}</span></button>
          {/* ============== End Button Send Form ============== */}
          </form>
      {/* ============== End StartContact Form ============== */}
        </div>
      {/* ============== End Contact Section ============== */}
    </section>
  )
}

export default Contacts