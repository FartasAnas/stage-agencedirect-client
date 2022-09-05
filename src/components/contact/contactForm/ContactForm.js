import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./contactFormStyle.css"

export default function ContactForm() {
    let navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Your message was sent, thank you!");
        console.log("m here")
        navigate('/')
        console.log("m here")
    }
  return (
    <div className='contact-form '>
        <div className="content ">
            <div className="container ">
                <div className="row align-items-stretch no-gutters contact-wrap rounded-4">
                <div className="col-md-8">
                    <div className="form ">
                    <h3>Contactez-nous</h3>
                    <form className="mb-5" method="post" id="contactForm" name="contactForm" onSubmit={handleSubmit} >
                        <div className="row">
                        <div className="col-md-6 form-group mb-5">
                            <label className="col-form-label">Nom *</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Nom" required/>
                        </div>
                        <div className="col-md-6 form-group mb-5">
                            <label className="col-form-label">Prénom *</label>
                            <input type="text" className="form-control" name="prenom" id="prenom" placeholder="Prénom" required/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 form-group mb-5">
                            <label className="col-form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Téléphone" />
                        </div>
                        <div className="col-md-6 form-group mb-5">
                            <label className="col-form-label">Email *</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="E-mail" required/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 form-group mb-5">
                            <label className="col-form-label">Message *</label>
                            <textarea className="form-control" name="message" id="message" cols={30} rows={4} placeholder="Write your message" defaultValue={""} />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" defaultValue="Envoyer la demande" className="btn btn-primary rounded-0 py-2 px-4" />
                            <span className="submitting" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-info h-100">
                    <h3>Nos conseillers sont à votre écoute</h3>
                    <p className="mb-5">Vous pouvez contacter nos conseillers 7j/7, de 8h à 20h (heure marocaine). Nous sommes également joignables par email et chat</p>
                    <ul className="list-unstyled">
                        <li className="d-flex">
                        <i className="fa-solid fa-map-location-dot contact-form-icons"></i>
                        <span className="text">140 Avenue Hassan II Casablanca</span>
                        </li>
                        <li className="d-flex">
                        <i className="fa-solid fa-phone contact-form-icons"></i>
                        <span className="text">+212.5.20.39.30.30</span>
                        </li>
                        <li className="d-flex">
                        <i className="fa-solid fa-envelope contact-form-icons"></i>
                        <span className="text">agencedirecte@bankofafrica.ma</span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
