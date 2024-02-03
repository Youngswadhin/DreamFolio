import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

import EmailImage from '../../Assets/email.png';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
   <section className='contact-container'>
    <h5>Contact Me</h5>

    <div className='contact-content'>
        <div style={{flex: 1}}>
          <ContactInfoCard 
          iconUrl={EmailImage}
          text="youngswadhin@gmail.com"
          />
          <ContactInfoCard 
          iconUrl={EmailImage}
          text="youngswadhin@gmail.com"
          />
        </div>
        <div style={{flex: 1}}>
          <ContactForm />
        </div>
    </div>
    </section>
  )
}

export default ContactMe