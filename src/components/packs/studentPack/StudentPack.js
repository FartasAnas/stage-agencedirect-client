import React from 'react'
import "./studentPackStyle.css"
import StudentCard from '../../../images/StudentCard.png';
import { useNavigate } from 'react-router-dom';

export default function StudentPack() {
    const navigate=useNavigate()
    const HandleOnClickBtn=(e)=>{
        navigate("/creation-compte",{state:{pack:e.target.name}})
    }
  return (
    <div className='d-flex justify-content-center'>
        <div className='studentpack-div w-75'>
        <h1 className='studentpack-title text-center'>Découvrez nos avantages et souscrivez à l’offre étudiant résidant au Maroc</h1>
        <br/>
        <div className='d-flex justify-content-center'>
            <div className='container pack-div w-75 rounded shadow '>
                <div className='pack-div-header text-center'>
                    <img src={StudentCard} className="student-card " alt=""/>
                    <h2 className="pack-div-header-text">Pack Jeune Campus - Réservé aux 18-25 ans</h2>
                </div>
                <hr className=''/>
                <div className='pack-div-tarification text-center'>
                    <h3 className="pack-div-tarification-text">0 Dhs/mois</h3>
                </div>
                <hr className='pack-div-hr '/>
                <div className='pack-div-body'>
                    <div>
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Compte chèques
                        </h3>
                    </div>
                    <div >
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Frais de tenue de compte offerts
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Carte Visa sans contact « Jeune Campus »
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Service de Banque à distance BMCE Direct
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'> 
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Activation gratuite et à distance de la dotation e-commerce
                        </h3>
                    </div>
                </div>
                <div className='pack-div-btn d-flex justify-content-center'>
                    <div className='w-25 row'>
                        <button className='btn btn-primary souscris-btn' onClick={HandleOnClickBtn} name="pack jeune"> Je souscris </button>
                    </div>
                </div>

            </div>
        </div>

        </div>
    </div>
  )
}
