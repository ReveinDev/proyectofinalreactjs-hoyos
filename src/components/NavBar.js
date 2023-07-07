import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return <header>
                <nav class="navbar">
                    <div class="container-fluid">
                        <div class="dropdown">
                            <button class="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menú</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="*">Parrilla</a></li>
                                <li><a class="dropdown-item" href="*">Minutas</a></li>
                                <li><a class="dropdown-item" href="*">Hamburguesas</a></li>
                                <li><a class="dropdown-item" href="*">Pastas</a></li>
                                <li><a class="dropdown-item" href="*">Guarniciones</a></li>
                                <li><a class="dropdown-item" href="*">Postres</a></li>
                                <li><a class="dropdown-item" href="*">Bebidas</a></li>
                            </ul>
                        </div>
                        <a class="btn boton-nav-contacto" href="*">Contacto</a>
                        <Link class="navbar-brand" to="/">
                            <img src="/img/logo-brand.png" alt="logo bodegon lo del gordo fallen" class="navbar-logo mx-auto d-block"></img>
                        </Link>
                        <button type="button" class="btn boton-nav-form"><i class="fa-solid fa-user"></i>Iniciar sesion</button>
                        <CartWidget />
                    </div>
                </nav>
           </header>
}