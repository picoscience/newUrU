import React from 'react'
import imgLogo from '../../images/identificador.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="$">
                    <img src={imgLogo} alt='imagenLogo'></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="$" aria-current="page">Home</a>
                        <a className="nav-link" href="$">Features</a>
                        <a className="nav-link" href="$">Pricing</a>
                        <a className="nav-link disabled" href="$">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar