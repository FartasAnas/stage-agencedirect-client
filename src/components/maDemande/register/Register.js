import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user")!=undefined){
          navigate('/home');
        }
    }, [])
    const [typeProfile,setTypeProfile]=useState("")
    const [btn, setBtn]=useState(
        <button type="submit" className="btn btn-outline-light suivant-btn" disabled> Suivant</button>
    )
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(typeProfile)
        if(typeProfile==="MarocResidant"){
            navigate("/marocainResidentPack")
        }
        else if(typeProfile==="Etudiant"){
            navigate("/studentPack")
        }
    }
    const handleCheckClick =(e)=>{
        setBtn(<button type="submit" className="btn btn-outline-light suivant-btn"> Suivant</button>)
        setTypeProfile(e.target.id)
    }

    
    return (
        <div className='ma-demande w-100'>
                <div className='d-flex justify-content-center row new-code-page w-100'>
                    <div className='w-25'>
                        <div className='d-flexjustify-content-center retour-div'>
                            <Link to="/accueil"  className='text-decoration-none'>
                                <i className="fa-solid fa-angle-left retour-icon"></i>
                                Retour
                            </Link>
                        </div>
                        <div className="card p-2 shadow">
                            <article className="card-body">
                                <Link to='/new-access-code' className="float-end btn btn-outline-primary">S'identifier</Link>
                                <h4 className="card-title mb-4 mt-1">S'inscrire</h4>
                                <h5 className='text-center'>Choisissez votre profil</h5>
                                <p className='text-center sous-title'>Saisissez vos informations pour poursuivre votre demande</p>
                                <form onSubmit={handleSubmit} action='/home'>
                                    <div className="mb-3">
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="AccType" id="MarocResidant" onClick={handleCheckClick}/>
                                                <label className="form-check-label" htmlFor="MarocResidant">
                                                Je suis un marocain/étranger résidant au Maroc
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" disabled />
                                                <label className="form-check-label">
                                                Je suis un marocain résidant à l’étranger
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="AccType" id="Etudiant" onClick={handleCheckClick} />
                                                <label className="form-check-label" htmlFor="Etudiant">
                                                Je suis un étudiant résidant au Maroc
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-grid gap-2">
                                            {btn}
                                        </div> 
                                    </div>                                        
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
    )
}
