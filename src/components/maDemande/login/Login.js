import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../features/auth/authApiSlice';
import { setCredentials } from '../../../features/auth/authSlice';
import { GenerateNewAccessCode } from '../../../features/client/ClientSlice';
import './loginStyle.css'
export const Login = () => {
    const errRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [username, setUsername] = useState(location?.state?.email);
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        setErrMsg('');
    }, [username, password])
    useEffect(() => {
        console.log()
        if(localStorage.getItem("user")!=undefined){
          navigate('/home');
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userData= await login({ username , password }).unwrap();
            dispatch(setCredentials({...userData,username}));
            let email=username;
            let sendMail=false;
            await dispatch(GenerateNewAccessCode({email,sendMail})).unwrap();
            setUsername('');
            setPassword('');
            navigate('/home');
        }catch(err){
            if(!err?.status){
                setErrMsg('No Server Response');
            }else if(err.status === 400){
                setErrMsg('Missing Email or Password');
            }else if(err.status === 401){
                setErrMsg('Wrong Email or Password');
            }else{
                setErrMsg('Login Failed'); 
            }
            errRef.current.focus();
        }
    }
    const handleUserInput = (e) => setUsername(e.target.value.toLowerCase())
    const handlePwdInput = (e) => setPassword(e.target.value)
    return (
        <div className='ma-demande'>
            <div className='d-flex justify-content-center row login-page w-100'>
                <div className='w-25'>
                    <div className='d-flexjustify-content-center retour-div'>
                        <Link to='/accueil'  className='text-decoration-none'>
                            <i className="fa-solid fa-angle-left retour-icon"></i>
                            Retour
                        </Link>
                    </div>
                    <div className="card p-2 shadow">
                        <article className="card-body">
                            <Link to='/register' className="float-end btn btn-outline-primary ">S'inscrire</Link>
                            <h4 className="card-title mb-4 mt-1">S'identifier</h4>
                            <div className={errMsg ? "alert alert-danger p-0 ": "offscreen"}>
                                <p ref={errRef} className={errMsg ? "text-danger text-center errmsg pt-3" : "offscreen"} aria-live="assertive"> {errMsg} </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>Adresse e-mail</label>
                                    <input className="form-control form-inputs" placeholder="Adresse e-mail *" type="email" value={username} onChange={handleUserInput} required/>
                                </div> 
                                <div className="mb-3">
                                    <label>Code d'accès</label>
                                    <input className="form-control form-inputs" placeholder="Code d'accès *" type="password" onChange={handlePwdInput} required/>
                                </div> 
                                <div className="mb-3">
                                    <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-outline-light suivant-btn"> Suivant</button>
                                    </div>
                                    <p className="text-center "><Link to="/new-access-code" className="btn mt-2">Demander un nouveau code d'accès</Link></p>     
                                </div>                                      
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}
