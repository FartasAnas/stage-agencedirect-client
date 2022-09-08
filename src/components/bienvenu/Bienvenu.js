import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./bienvenuStyle.css"
export default function Bienvenu() {
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClick=()=>{
        const email=location?.state?.email
        navigate('/login',{state:{email}})
    }
    return (
        <div className='d-flex justify-content-center '>
            <div className='w-50 bienvenu-div '>
                <div className='container bienvenu-container-div rounded text-center shadow '>
                    <i class="fa-solid fa-circle-check bienvenu-icon" style={{fontSize: '5em'}}></i><br/><br/>
                        <h1 className='bienvenu-title text-center'>Bienvenu chez BANK OF AFRICA</h1>
                        <div className='row justify-content-center'>
                            <h3 className='bienvenu-txt text-center'>Nous avons le plaisir de vous compter parmi nos clients</h3>
                            <h3 className='bienvenu-txt text-center'>Votre demande d'ouverture de compte est bien reçue. Elle sera finalisée suite au rendez-vous en visio-conférence avec un de nos conseillers.</h3>
                            <h3 className='bienvenu-txt text-center'>Vous pourrez ensuite profiter pleinement de votre compte</h3>
                        </div>
                        <div className='bienvenu-btn-div'>
                            <button type="button" className="btn btn-success w-25" style={{fontSize: '1.5em'}} onClick={handleOnClick}>Terminer</button>
                        </div>
                </div>
            </div>
            
        </div>
    )
}
