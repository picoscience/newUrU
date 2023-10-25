import React from 'react'
import imgLogo from '../../images/identificador.png'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const Navbar = () => {

    const handleClick = () => { 
        const multiCollapseExample2 = document.getElementById('navbarNavAltMarkup')
        const bsCollapse = new bootstrap.Collapse(multiCollapseExample2)
        if (multiCollapseExample2.classList.contains('show')) {
            bsCollapse.hide()
        } else {
            bsCollapse.show()
        }      
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img src={imgLogo}></img>
                </a>
                <button className="navbar-toggler" type="button" onClick={() => handleClick()}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar