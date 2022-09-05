import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GenerateNewAccessCode } from '../../../features/client/ClientSlice';
import "./newAccessCodeStyle.css"

export const NewAccessCode = () => {
    const navigate=useNavigate();
    const dipatch=useDispatch();
    const errRef = useRef();

    useEffect(() => {
        if(localStorage.getItem("user")!=undefined){
          navigate('/home');
        }
    }, [])
    const [btn, setBtn]=useState(
        <button type="submit" className="btn btn-outline-light suivant-btn"> Suivant</button>
    )
    const [email,setEmail]=useState("")
    const sendMail=true
    const [errMsg, setErrMsg] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            setBtn(
                <button type="submit" className="btn btn-outline-light suivant-btn" disabled>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </button>
            )
            await dipatch(GenerateNewAccessCode({email,sendMail})).unwrap();
            setEmail("")
            alert("Un email contenant votre code d’accès à votre espace personnel vous a été envoyé avec succès")
            navigate('/login',{state:{email}})
        }
        catch(err){
            setBtn(<button type="submit" className="btn btn-outline-light suivant-btn"> Suivant</button>)
            if(!err){
                setErrMsg('No Server Response');
            }else if(err.message.includes('400')){
                setErrMsg('Missing Email');
            }else if(err.message.includes('500')){
                setErrMsg('Wrong Email');
            }else{
                setErrMsg('Generating Access Code Failed');
            }
            errRef.current.focus();
        }
        
    }
    const handleEmailChange =(e)=>setEmail(e.target.value)
    return (
        <div className='ma-demande'>
            <div className='d-flex justify-content-center row new-code-page w-100'>
                <div className='w-25'>
                    <div className='d-flexjustify-content-center retour-div'>
                        <Link to='/accueil'  className='text-decoration-none'>
                            <i className="fa-solid fa-angle-left retour-icon"></i>
                            Retour
                        </Link>
                    </div>
                    <div className="card p-2 shadow">
                        <article className="card-body">
                            <Link to='/register' className="float-end btn btn-outline-primary">S'inscrire</Link>
                            <h4 className="card-title mb-4 mt-1">S'identifier</h4>
                            <h5 className='text-center'>Nouveau code d’accès</h5>
                            <p className='text-center sous-title'>Saisissez vos informations pour récupérer votre code</p>
                            <div className={errMsg ? "alert alert-danger p-0 ": "offscreen"}>
                                <p ref={errRef} className={errMsg ? "text-danger text-center errmsg pt-3" : "offscreen"} aria-live="assertive"> {errMsg} </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>Adresse e-mail</label>
                                    <input className="form-control form-inputs" placeholder="Adresse e-mail *" type="email" onChange={handleEmailChange} required/>
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
