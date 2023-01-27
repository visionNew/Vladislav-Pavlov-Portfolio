import './contacts.css';
import data from './data';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { sendEmail } from '../../services/emailServices';


const Contacts = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  return (
    <section id="contacts">
      <h2 className="tracking-in-expand-fwd">{t('contact-h2')}</h2>

      <div className="container contact__container">
        <div className="contact__options">

          {
            data.map(item => <article className="contact__option" key={item.id}>
                {item.icon}
            <div>
                <h4>{item.h4}</h4>
                <h5>{t(item.h5)}</h5>
                <a href={item.link} target={item.target}>{t(item.link_name)}</a>
            </div>
          </article>)
          }

        </div> 
          <form>
              <input value={name} name="name" placeholder={t('contact-placeholder.1')} onChange={({target}) => setName(target.value)} required/>
              <input type="email" value={email} name="email" placeholder={t('contact-placeholder.2')} onChange={({target}) => setEmail(target.value)} required/>
              <textarea value={message} name="message" rows="7" placeholder={t('contact-placeholder.3')} onChange={({target}) => setMessage(target.value)} required></textarea>
              <button onClick={(event) => {
                event.preventDefault()
                sendEmail(name, email, message)
              }} className="btn">{t('contact-btn.3')}</button>
            </form>
        </div>
    </section>
  )
}

export default Contacts