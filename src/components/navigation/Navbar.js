import React from 'react'
import imgLogo from '../../images/identificador.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className='col-12 col-lg-12 col-xl-11 col-xxl-10'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className='row justify-content-center align-items-center rowNavBar'>
                        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center'>
                            <a className="navbar-brand d-flex justify-content-center align-items-center m-0" href="$">
                                <img src={imgLogo} alt='imagenLogo'></img>
                            </a>
                            <span className='ms-5 d-none d-lg-flex brandName'>UrU</span>
                        </div>
                        <div className='col-12 col-lg-6 d-flex'>
                            <div className="collapse navbar-collapse justify-content-start justify-content-lg-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" href="$" aria-current="page">favoritos</a>
                                    <a className="nav-link" href="$">blog</a>
                                    <a className="nav-link" href="$">nosotros</a>
                                    <a className="nav-link" href="$">contacto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar