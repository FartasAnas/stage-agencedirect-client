import React from 'react'
import NavBar from '../navbar/NavBar'
import "./accueilStyle.css"
import { Link } from 'react-router-dom';
import UserIcon from '../../images/user-icon.png';
import PlaneIcon from '../../images/plane-icon.png';
import StudentIcon from '../../images/student-icon.png';


export default function Accueil() {
  const HandleResidentEtrangerClick=(e)=>{
    alert("Coming in Future Releases")
  }
  return (
    <div className='row d-flex justify-content-center w-100'>
        {/* header div */}
        <div className='d-flex justify-content-center mt-5'>
          <h1 style={{ color: '#004475' }} className='accueil-title text-center'>
              Ouvrez votre compte 100% en ligne, profitez d'offres exclusives à
              <span className="title-span" >
                  0 DH
              </span>
          </h1>
        </div>
        {/* choices div */}
        <div className='row d-flex justify-content-center '>
          <h2 className='text-center h2-title'>Ouvrez votre compte bancaire là où vous êtes</h2>
          <div className='row w-75 justify-content-center'>
            <div className="col-3">
                <div className=" shadow text-center rounded choices-div pt-3 pb-1" style={{cursor:'pointer'}}>
                    <img src={UserIcon} className="col-icons" alt=""/>
                    <p className="col-text">Particulier résidant au Maroc</p>
                    <hr />
                    <Link to="/marocainResidentPack" className='text-decoration-none'>
                      <p className="link-text">
                        Je découvre l'offre 
                        <i className="fa fa-angle-right link-icon"></i>
                      </p>
                    </Link>
                </div>
            </div>
            <div className="col-3">
                <div className="shadow text-center rounded choices-div pt-3 pb-1" style={{cursor:'pointer'}}>
                  <img src={PlaneIcon} className="col-icons" alt=""/>
                    <p className="col-text ">Marocain résidant à l'étranger</p>
                    <hr/>
                    <Link to="/" className='d flex justify-content-center text-decoration-none ' onClick={HandleResidentEtrangerClick}>
                      <p className="link-text ">
                        Je découvre l'offre 
                        <i className="fa fa-angle-right link-icon"></i>
                      </p>
                    </Link>
                </div>
            </div>
            <div className="col-3">
                <div className="shadow text-center rounded choices-div pt-3 pb-1" style={{cursor:'pointer'}}>
                <img src={StudentIcon} className="col-icons" alt=""/>
                    <p className="col-text ">Etudiant</p>
                    <hr/>
                    <Link to="/studentPack" className='text-decoration-none'>
                      <p className="link-text">
                        Je découvre l'offre 
                        <i className="fa fa-angle-right link-icon"></i>
                      </p>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        {/* Aventage div */}
        <div className='aventage-div w-75 mt-4 d-flex flex-column align-items-center'>
          <div className='d-flex aventage'>
            <i className="fa-regular fa-circle-check check-icon "></i>
            <p className='aventage-text'>Ouverture de compte en quelques clics</p>
          </div>
          <div className='d-flex aventage'>
            <i className="fa-regular fa-circle-check check-icon"></i>
            <p className='aventage-text'>Une gamme de produits large et avantageuse</p>
          </div>
          <div className='d-flex aventage'>
            <i className="fa-regular fa-circle-check check-icon"></i>
            <p className='aventage-text'>Des conseillers disponibles pour vous accompagner en ligne</p>
          </div>
        </div>
        {/* Video Div */}
        <div className='d-flex justify-content-center mt-5 '>
          <div className='w-75'>
            <h2 className='video-title text-center '> Ouvrez votre compte bancaire là où vous êtes </h2>
            <div className='text-center '>
              <iframe className='rounded-4 shadow mt-3'
                src="https://www.youtube-nocookie.com/embed/EhD0jVZ71qc?rel=0&mute=1">
              </iframe>
            </div>
          </div>
        </div>
        {/* steps Div */}
        <div className='d-flex justify-content-center mt-5 '>
          <div className='w-75'>
            <h2 className='video-title text-center '> Votre compte bancaire en 3 étapes seulement </h2>
            <div className='text-center '>
              
            </div>
          </div>
        </div>
    </div>
  )
}
