import { Link } from 'react-router-dom'
import ReturnLogo from "../../assets/return.png"

import './header.scss'



import Logo from "../../assets/logo.png"

const HeaderImovel = () => {
    return (
        <header>

            <nav className="container d-flex text-center bg-transparent">
                <Link className="navbar-brand" to="/" >
                    <img src={ReturnLogo} alt='logo' id='returnBtn' />
                </Link>
                <Link className="navbar-brand" to="/" >
                    <img src={Logo} alt='logo' id='logoHeaderImovel' />
                </Link>
            </nav>



        </header>
    )
}

export default HeaderImovel