import React from "react";
import "./footerStyle.css"

export default function Footer() {
  return (
    <div className="container w-75 align-items-center" style={{backgroundColor:"#E8E8E8"}}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-0 ">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" >
                    <svg className="bi" width={30} height={24}>
                    <use xlinkHref="#bootstrap" />
                    </svg>
                </a>
                <span className="footer-text">2022 © BANK OF AFRICA. Tous droits réservés</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="footer-icon-outer align-items-center rounded-circle m-1">
                    <div className="m-2">
                        <a className="text-muted " href="https://www.instagram.com/bank_of_africa/" target="_blank">
                        <svg className="bi" width={24} height={24}>
                            <i className="fa-brands fa-instagram footer-icons"></i>
                        </svg>
                        </a>
                    </div>
                </li>
                <li className=" footer-icon-outer align-items-center rounded-circle m-1">
                    <div className="m-2">
                        <a className="text-muted" href="https://twitter.com/Bank_OfAfrica" target="_blank">
                        <svg className="bi" width={24} height={24}>
                            <i className="fa-brands fa-twitter footer-icons"></i>
                        </svg>
                        </a>
                    </div>
                </li>
                <li className="footer-icon-outer align-items-center rounded-circle m-1">
                    <div className="m-2">
                        <a className="text-muted" href="https://www.youtube.com/c/BMCEBankOfAfrica" target="_blank">
                        <svg className="bi" width={24} height={24}>
                            <i className="fa-brands fa-youtube footer-icons"></i>
                        </svg>
                        </a>
                    </div>
                </li>
                <li className="ms-3">
                    <div className="btn-group dropup">
                        <button type="button" className="footer-btn rounded text-center d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="footer-btn-text flex-grow-1">Site de groupe</span>
                            <i className="fa-solid fa-caret-down btn-icon "></i>
                        </button>
                        <ul className=" dropdown-menu shadow">
                            <li><a className="dropdown-item" href="https://www.bankofafrica.ma/" target="_blank">BANK OF AFRICA</a></li>
                            <li><a className="dropdown-item" href="https://www.bmcedirect.ma/fr/identification/authentification.html" target="_blank">BMCE Direct</a></li>
                            <li><a className="dropdown-item" href="https://www.credithabitat.ma/" target="_blank">Crédit Habitat</a></li>
                            <li><a className="dropdown-item" href="https://www.creditdaba.ma/" target="_blank">Crédit Daba</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </footer>
    </div>

  )
}
