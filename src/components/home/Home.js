import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { logOut , selectCurrentUser } from '../../features/auth/authSlice'
import { getClientByEmail } from '../../features/client/ClientSlice';
import CINrecto from '../../images/rectoCin.jpg'
import CINverso from '../../images/VersoCin.jpg'
import Selfi from '../../images/selfi.jpg'
import './homeStyle.css'

export default function Home() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const email=useSelector(selectCurrentUser)
    const [client,setClient]=useState('')

    useEffect(()=>{
        const fetchData = async () => {
            const clientData=await dispatch(getClientByEmail(email)).unwrap();
            if(!clientData.active){
                let clientDataFilte=clientData
                clientDataFilte.rib=''
                clientDataFilte.accountNumber=''
                clientDataFilte.cleRIB=''
                setClient(clientDataFilte)
            }
            else{
                setClient(clientData);
            }
            
        }
        fetchData();
    }, [])
    const handleLogOutClick =()=>{
        const email=client.email
        dispatch(logOut());
        navigate("/login",{state:{email}})
    }
    const contentType=client.type==="Etudiant" ? (
        <div className="agent-details-info row">
            <div className="agent-details-info col-sm-3">
                <h6 className="agent-details-info mb-0">Ecole</h6>
            </div>
            <div className="agent-details-info col-sm-9 text-secondary text-capitalize">{client.ecole}</div>
        </div>
    ):(
        <div className="agent-details-info row">
            <div className="agent-details-info col-sm-3">
                <h6 className="agent-details-info mb-0">Profession</h6>
            </div>
            <div className="agent-details-info col-sm-9 text-secondary text-capitalize">{client.profession}</div>
        </div>
    )
    const contentStatus=client.active===true ?(
        <div className="col-sm-9 text-success"><span className="badge text-bg-success" style={{fontSize:'15px'}}> Active </span></div>
    ):(
        <div className="col-sm-9 text-secondary"><span className="badge text-bg-secondary" style={{fontSize:'15px'}} > Inactive </span></div>  
    )
    const content= client!=='' ? (
        <div className='ClientInfo'>
            <div className="container informations">
                <div className="main-body w-100">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card ">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                <img src={client.selfieURL} alt="Admin" className="rounded-5 " width={125} />
                                <div className="mt-3">
                                    <h4 className='text-capitalize'>{client.nom} {client.prenom}</h4>
                                    <p className="text-secondary mb-1">{client.type}</p>
                                    <p className="text-muted font-size-sm"> {client.adresse} </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card mt-3">
                                <h5 className="d-flex align-items-center mt-3 m-4 mb-1">
                                    Carte Nationale
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-center align-items-center flex-wrap">
                                        <img src={client.cinRectoURL} alt="Admin" className="rounded shadow-sm cin " width={300}/>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-center align-items-center flex-wrap">
                                        <img src={client.cinVersoURL} alt="Admin" className="rounded shadow-sm cin" width={300}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary text-capitalize">{client.nom} {client.prenom}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{client.email}</div>
                                    </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Telephone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{client.telephone}</div>
                                </div>
                                <hr />
                                        {contentType}
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary"> {client.adresse} </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Date Naissance</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{client.dateNaissance}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Date Inscription</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{client.dateInscription}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Date Expiration</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{client.dateExpiration}</div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">CIN</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary text-uppercase">{client.cin}</div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">RIB</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">{client.rib}</div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Compt Number</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">{client.accountNumber}</div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Clé RIB</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">{client.cleRIB}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card ">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Agence</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary text-capitalize">{client.agence.nom}</div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Pack</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary text-capitalize">{client.pack.nom}</div>
                                            </div>
                                            <hr/>
                                            <div className="row ">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Status</h6>
                                                </div>
                                                {contentStatus}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="btn-group">
                                            <div className="">
                                                <button className="btn btn-secondary mr-2" onClick={handleLogOutClick} >Log Out</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):(
        <div className="spinner-div d-flex align-items-center justify-content-center">
            <div className="spinner spinner-border text-primary" role="status"/>
        </div>
    )
    return content
}
