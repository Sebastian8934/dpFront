import React from 'react'

//Hoja de estilos
import './navbar.css';

// Enrutado
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <p onClick={() => navigate('/')} className="navbar-brand mx-3">
                Libreria
            </p>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <p onClick={() => navigate('/')} className="nav-link" aria-current="page">
                        Pagina inicio
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => navigate('/pageTwo')} className="nav-link" aria-current="page">
                        Pagina dos
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => navigate('/listUser')} className="nav-link" aria-current="page">
                        Registrar
                    </p>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar