import img from '../img/logo-brand.png'
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
                                <li><a class="dropdown-item" href="*">Sanguches</a></li>
                                <li><a class="dropdown-item" href="*">Pastas</a></li>
                                <li><a class="dropdown-item" href="*">Postres</a></li>
                                <li><a class="dropdown-item" href="*">Bebidas</a></li>
                            </ul>
                        </div>
                        <a class="btn boton-nav-contacto" href="*">Contacto</a>
                        <a class="navbar-brand" href="*">
                            <img src={img} alt="logo bodegon lo del gordo fallen" class="navbar-logo mx-auto d-block"></img>
                        </a>
                        <button type="button" class="btn boton-nav-form"><i class="fa-solid fa-user"></i>Iniciar sesion</button>
                        <CartWidget />
                    </div>
                </nav>
           </header>
}