import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./accountCrationStyle.css"
import AccoutCreationStepper from './AccoutCreationStepper'

export default function AccountCreation() {
    const location=useLocation()
    const packChosen=location?.state?.pack
    return (
        <div className='d-flex justify-content-center'>
            <div className='accountcreation-div w-75'>
                <h1 className='accountcreation-title text-center'>Ma demande de création de compte</h1>
                <br/>
                <div className='d-flex justify-content-center'>
                    <div className='container demande-div w-75 rounded shadow'>
                        <div className='pack-chosen'> 
                            <button className="btn btn-outline-light choice-btn text-capitalize float-end" >
                                {packChosen}
                            </button>
                            <AccoutCreationStepper pack={packChosen}/>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
