import React from 'react'
import "./marocainResidentPackStyle.css"
import AzurCard from '../../../images/AzurCard.png';
import GoldCard from '../../../images/GoldCard.png';
import PlatinumCard from '../../../images/PlatinumCard.png';
import { useNavigate } from 'react-router-dom';

export default function MarocainResidentPack() {
    const navigate = useNavigate();
  const HandleOnClickBtn=(e)=>{
    navigate("/creation-compte",{state:{pack:e.target.name}})
  }
  return (
    <div className='d-flex justify-content-center'>
      <div className='MarocainResidentPack-div w-75'>
        <h1 className='MarocainResidentPack-title text-center'>Souscrivez à l’offre adaptée à vos besoins dès aujourd’hui</h1>
        <br/>
        <div className='d-flex justify-content-center row'>
            <div className='container pack-div rounded shadow col m-3'>
                <div className='pack-div-header text-center'>
                    <img src={AzurCard} className="student-card " alt=""/>
                    <h2 className="pack-div-header-text">Pack Azur</h2>
                </div>
                <hr className=''/>
                <div className='pack-div-tarification text-center'>
                    <h3 className="pack-div-tarification-text">0 Dhs pour les Jeunes Salariés 18-39 ans*</h3>
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
                            Carte Visa nationale sans contact « AZUR » avec dotation e-commerce internationale
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
                            *Hors Jeunes Salariés 18-39 ans : 0 Dhs les 6 premiers mois puis 19 Dhs HT/mois
                        </h3>
                    </div>
                </div>
                <div className='pack-div-btn d-flex justify-content-center'>
                    <div className='row w-75'>
                        <button className='btn btn-primary souscris-btn' name='pack azur' onClick={HandleOnClickBtn}> Je souscris </button>
                    </div>
                </div>

            </div>
            <div className='container pack-div rounded shadow col m-3'>
                <div className='pack-div-header text-center'>
                    <img src={GoldCard} className="student-card " alt=""/>
                    <h2 className="pack-div-header-text">Pack Gold</h2>
                </div>
                <hr className=''/>
                <div className='pack-div-tarification text-center'>
                    <h3 className="pack-div-tarification-text">0 Dhs les 6 premiers mois, puis 48 Dhs HT/mois</h3>
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
                            Opérations courantes gratuites (virements, prélèvements, remises de chèque)
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Carte Visa Gold internationale sans contact
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'> 
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Accès au programme d’avantages Visa Gold (réductions sur une sélection d’enseignes).
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'> 
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Service de Banque à distance BMCE Direct
                        </h3>
                    </div>
                </div>
                <div className='pack-div-btn d-flex justify-content-center'>
                    <div className='row w-75'>
                        <button className='btn btn-primary souscris-btn' name='pack gold' onClick={HandleOnClickBtn}> Je souscris </button>
                    </div>
                </div>

            </div>
            <div className='container pack-div rounded shadow col m-3'>
                <div className='pack-div-header text-center'>
                    <img src={PlatinumCard} className="student-card " alt=""/>
                    <h2 className="pack-div-header-text">Pack Platinum</h2>
                </div>
                <hr className=''/>
                <div className='pack-div-tarification text-center'>
                    <h3 className="pack-div-tarification-text">0 Dhs les 6 premiers mois, puis 89 Dhs HT/mois</h3>
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
                            Opérations courantes gratuites (virements, prélèvements, remises de chèque)
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'>
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Carte Mastercard Platinum internationale sans contact
                        </h3>
                    </div>
                    <div>
                        <h3 className='pack-div-body-text'> 
                            <i className="fa-solid fa-arrow-right pack-div-body-icons"></i>
                            Accès au programme d’avantages Mastercard Platinum (accès gratuit lounges d’aéroports, réductions villages de shopping…)
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
                            Assurance perte et vol de carte : Securicard
                        </h3>
                    </div>
                </div>
                <div className='pack-div-btn d-flex justify-content-center'>
                    <div className='row w-75'>
                        <button className='btn btn-primary souscris-btn' name='pack platinum' onClick={HandleOnClickBtn}> Je souscris </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
