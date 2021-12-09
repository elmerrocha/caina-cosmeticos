import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="caina-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light caina-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="caina-logo" src={logo} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/products/eyes">Ojos</Link></li>
                                    <li><Link className="dropdown-item" to="/products/lips">Labios</Link></li>
                                    <li><Link className="dropdown-item" to="/products/face">Rostro</Link></li>
                                    <li><Link className="dropdown-item" to="/products/nails">Uñas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">Quienes somos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/mission-vision">Misión y Visión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/objectives">Objetivos corporativos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contáctanos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
