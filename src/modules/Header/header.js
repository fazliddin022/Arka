import LogoImg from "../../assets/images/site-logo.svg"
import CartIcon from "../../assets/icons/icons"

import "./header.css"

function Header(){
    return(
        <header className="site-header">
        <div className="container header">
            <a className="site-logo-link" href="/">
            <img src={LogoImg} alt="Site Logo" width={85} height={24}/>
            </a>
            <nav className="header-navbar">
            <a className="nav-link" href="/">Start your design</a>
            <a className="nav-link" href="/">All products</a>
            <a className="nav-link" href="/">Inspiration</a>
            <a className="nav-link" href="/">About</a>
            </nav>
            <div className="header-right-part">
            <button className="btn-account">Account</button>
            <button className="btn-cart">
                <CartIcon/>
            </button>
            </div>
        </div>
    </header>
    )
}

export default Header