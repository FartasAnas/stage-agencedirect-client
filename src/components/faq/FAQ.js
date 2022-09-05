import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./faqStyle.css"

export default function FAQ() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='faq-div w-75'>
        <h1 className='faq-title text-center'>Les questions les plus fréquentes</h1>
        <br/>
        <div className=' d-flex justify-content-center  '>
        <div className="accordion w-75 shadow-lg rounded" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Qu’est-ce que l’Agence Directe ?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  L’Agence Directe est l'agence en ligne qui vous permet d’ouvrir votre compte en ligne à tout moment, sans avoir à vous déplacer en agence. Vous bénéficiez également de l’accompagnement d’un conseiller dédié qui répondra à toutes vos questions par email ou par téléphone sur des plages horaires élargies : 7j/7 de 8h à 20h (heure marocaine)
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Que propose l’Agence Directe ?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                L’Agence Directe vous permet de réaliser à distance une ouverture de compte. Différentes formules de packages sont proposées selon votre profil et vos besoins. Ces packages sont proposés à des conditions très avantageuses appliquées exclusivement pour les clients de l’Agence Directe. Ils vous permettent de bénéficier de l’essentiel des produits bancaires à une tarification unique et forfaitaire.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Quelles sont les conditions exigées pour ouvrir un compte au niveau de l’Agence Directe ?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Pour ouvrir un compte au niveau de l’Agence Directe, il suffit d’être résident (e) au Maroc (étranger ou marocain), ou Marocain résidant à l’étranger ; et être âgé(e) de plus de 18 ans.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                Comment bénéficier de ces offres ?
                </button>
              </h2>
              <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Il suffit de choisir l’offre qui vous convient, remplir le formulaire en ligne et y attacher vos pièces justificatives, sélectionner l’agence de votre choix, effectuer un premier versement (optionnel), choisir le créneau du RDV visioconférence et valider votre demande. Durant l’entretien visioconférence, vous serez invité à signer vos contrats électroniquement sur votre espace personnel. Une fois signés, vos contrats et vos accès à votre e-banking BMCE DIRECT vous sont communiqués et votre compte est activé.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingfive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                Quels documents dois-je fournir pour ouvrir mon compte via l’Agence directe ?
                </button>
              </h2>
              <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Si vous résidez au Maroc : Votre CIN ou votre Carte de séjour ainsi que votre justificatif de résidence (nécessaire uniquement si votre adresse de résidence est différente de l’adresse figurant sur votre pièce d’identité) vous seront demandés.Un certificat de scolarité vous sera demandé si vous êtes étudiant .Si vous êtes marocain résident à l’étranger : Votre CIN ; votre pièce d’identité du pays de résidence (titre de séjour, passeport du pays de résidence ou carte d’identité du pays de résidence) ainsi qu’un justificatif d’adresse vous seront demandés.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingsix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                Suis-je obligé(e) d’effectuer un versement pour ouvrir un compte au niveau de l’Agence Directe ?
                </button>
              </h2>
              <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Que vous soyez résident au Maroc ou Marocain résident à l’étranger, la réalisation d’un premier versement est optionnelle. Si vous souhaitez l’effectuer, le versement minimal est de 100 Dhs et se fait par débit de votre carte bancaire. Si vous êtes Marocain résident à l’étranger et vous optez pour le service d’envoi de carte, le montant minimum du versement doit couvrir les frais d’envoi (80MAD par Carte)
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingseven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                Comment effectuer un versement sur mon compte ?
                </button>
              </h2>
              <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Le premier versement (optionnel) peut être effectué lors de l’ouverture de compte via l’Agence Directe. Votre compte ouvert via l’Agence Directe fonctionnera de la même façon qu’un compte ouvert en agence, avec possibilité d’effectuer des versements au niveau de toutes les agences BANK OF AFRICA ou sur les GAB offrant ce service. Vous pouvez également recevoir des virements sur ce compte ouvert en ligne
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingeight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                Comment gérer et consulter mon compte ouvert en ligne ?
                </button>
              </h2>
              <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Vous pouvez consulter et gérer votre compte 24h/24, 7j/7 en vous connectant à votre espace BMCE DIRECT via web sur l’adresse www.bmcedirect.ma , ou en téléchargeant l’application mobile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
