import './contacts.css'; // CSS FILE FOR COMPONENT
import { contactData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useState } from 'react'; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE

const Contacts = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
// START FUNCTION FOR EMAIL CONTACT
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
// END FUNCTION FOR EMAIL CONTACT
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/sendEmail.php', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (data.status === 'success') {
    setStatus('Message sent successfully!');
  } else {
    setStatus('Error sending message.');
  }
};
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
        <form className='blur' onSubmit={handleSubmit}>
            <input value={name} name="name" placeholder={t('contact-placeholder.1')} onChange={({target}) => setName(target.value)} required/>
            <input value={email} type="email"  name="email" placeholder={t('contact-placeholder.2')} onChange={({target}) => setEmail(target.value)} required/>
            <textarea value={message} name="message" rows="7" placeholder={t('contact-placeholder.3')} onChange={({target}) => setMessage(target.value)} required></textarea>
          {/* ============== Start Button Send Form ============== */}
            <button className="btn"><span>{t('contact-btn.3')}</span></button>

            <p>{status}</p>
          {/* ============== End Button Send Form ============== */}
          </form>
      {/* ============== End StartContact Form ============== */}
        </div>
      {/* ============== End Contact Section ============== */}
    </section>
  )
}

export default Contacts