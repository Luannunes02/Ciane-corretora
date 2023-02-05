import { Link } from 'react-router-dom'

import './header.scss'



import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                    <Link className="navbar-brand ms-5" to="/" >
                        <img src={Logo} alt='logo' id='logo'  />
                    </Link>
                    <button id='menuBtn' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse me-5" id="navbarNav">
                        <ul className="navbar-nav" id="ul">
                            <li className="nav-item">
                                <a className="nav-link" href="/#start" id='navbar-item'>INÍCIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#about" id='navbar-item'>SOBRE</a>
                            </li>                            
                            <li className="nav-item">
                                <a className="nav-link" href="/#services" id='navbar-item'>SERVIÇO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#properties" id='navbar-item'>IMÓVEIS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contact" id='navbar-item'>CONTATO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </header>
    )
}

export default Header