import data from './data';

import './contacts.css';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
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
          <form action="">
              <input type="text" name="name" placeholder={t('contact-placeholder.1')} required/>
              <input type="email" name="email" placeholder={t('contact-placeholder.2')} required/>
              <textarea name="message" rows="7" placeholder={t('contact-placeholder.3')} required></textarea>
              <button type="submit" className="btn">{t('contact-btn.3')}</button>
            </form>
        </div>
    </section>
  )
}

export default Contacts