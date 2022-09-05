import React from 'react'
import ContactForm from './contactForm/ContactForm'
import './contactStyle.css'

export default function Contact() {
  return (
    <div className='d-flex justify-content-center '>
      <div className='w-75 contact-div'>
        <h1 className='contact-title text-center'>Nous sommes là pour vous aider</h1>
        <h2 className='contact-second-title text-center'>Nous sommes disponibles pour répondre à toutes vos questions de manière rapide et personnelle, par téléphone, email ou chat</h2>
          <div className='contact-info-div rounded-4'>
            <ContactForm/>
          </div>
      </div>
    </div>
  )
}
