import React from 'react'
import "./ccmStyle.css"

export default function CCM() {
  return (
    <div className='d-flex justify-content-center '>
      <div className='w-75 ccm-div'>
        <h1 className='ccm-title text-center'>Ouvrez votre compte au Maroc via l'Agence Directe en 3 étapes, rapide et simple</h1>
        <br/>
        <div className='container steps-div rounded text-center shadow'>
          <h3 className='steps-header '>Prenez en photo votre pièce d’identité, réalisez un selfie et complétez votre demande d’ouverture de compte en ligne</h3>
          <h4 className='steps-sousheader'>Préparez les pièces justificatives suivantes pour ouvrir votre compte bancaire en ligne</h4>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Votre carte nationale d'identité marocaine
          </p>
          <p className='steps-paragraph '>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Votre pièce d’identité de votre pays de résidence (si vous êtes Marocain Résident à l’Etranger- MRE)
          </p>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Votre justificatif d'adresse (ce document est obligatoire si vous êtes Marocain Résident à l’Etranger (MRE); si vous êtes résidant au Maroc, le justificatif d'adresse est nécessaire uniquement si votre adresse de résidence saisie dans le formulaire est différente de l’adresse figurant sur votre pièce d’identité)
          </p>
          <h4 className='steps-sousheader'>
          <i className="fa-solid fa-link paragraph-icons"></i>
          Les pièces justificatives demandées pour l’ouverture à distance de votre compte bancaire doivent être dans un des formats suivants : .jpeg / .png 
          </h4>
          <h3 className='steps-header '>Réalisez votre entretien d’ouverture de compte en visioconférence avec un téléconseiller</h3>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            L’entretien en visioconférence est une étape obligatoire pour finaliser l’ouverture de votre compte. Il vous suffit de choisir le créneau qui vous convient lorsque vous arrivez à l’étape RDV en visio conférence, lors de l’ouverture de votre compte bancaire en ligne.
          </p>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Un email vous sera envoyé pour confirmer la date et l’heure du RDV en visioconférence; ainsi que le lien à utiliser pour accéder à l’entretien en visioconférence.
          </p>
          <h3 className='steps-header '>Signature Electronique de vos contrats</h3>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Lors de l’entretien visioconférence, vous serez invité à procéder à la signature électronique de vos contrats. Un code de confirmation est envoyé par SMS dont la saisie sur votre espace personnel permet de signer vos contrats.
          </p>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Votre compte est activé dès la signature électronique des contrats.
          </p>
          <h3 className='steps-header '>Recevez vos contrats signés (sur votre espace personnel et aussi par mail) et vos codes d’accès à votre espace e-banking BMCE DIRECT</h3>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Une fois votre demande d’ouverture de compte bancaire en ligne vérifiée et validée et vos contrats signés par vos soins, vous recevrez vos contrats signés électroniquement aussi par email que sur votre espace personnel.
          </p>
          <p className='steps-paragraph'>
            <i className="fa-solid fa-right-long paragraph-icons"></i> 
            Vos accès BMCE DIRECT (identifiant et mot de passe) sont envoyés par SMS vous permettant d’accéder à vote compte via web ou application Mobile et en profiter pleinement
          </p>
        </div>
      </div>
    </div>
  )
}
