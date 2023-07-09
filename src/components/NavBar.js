import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return <header>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="dropdown">
                            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menú</button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/menu/parrilla">Parrilla</Link></li>
                                <li><Link className="dropdown-item" to="/menu/minutas">Minutas</Link></li>
                                <li><Link className="dropdown-item" to="/menu/hamburguesas">Hamburguesas</Link></li>
                                <li><Link className="dropdown-item" to="/menu/pastas">Pastas</Link></li>
                                <li><Link className="dropdown-item" to="/menu/guarniciones">Guarniciones</Link></li>
                                <li><Link className="dropdown-item" to="/menu/postres">Postres</Link></li>
                                <li><Link className="dropdown-item" to="/menu/bebidas">Bebidas</Link></li>
                            </ul>
                        </div>
                        <Link className="btn boton-nav-contacto" to="/contacto">Contacto</Link>
                        <Link className="navbar-brand" to="/">
                            <img src="/img/logo-brand.png" alt="logo bodegon lo del gordo fallen" className="navbar-logo mx-auto d-block"></img>
                        </Link>
                        <button type="button" className="btn boton-nav-form"><i className="fa-solid fa-user"></i>Iniciar sesion</button>
                        <CartWidget />
                    </div>
                </nav>
           </header>
}