import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NCT Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="./PCcomp.jsx">PC Completas</Link></li>
                                    <li><Link className="dropdown-item" to="./Accesorios.jsx">Teclados y Mouse</Link></li>
                                    <li><Link className="dropdown-item" to="./Videojuegos.jsx">Videojuegos</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href='' active="false" className="nav-link" >Ofertas</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <a className="ml-auto" href="./CartPage.jsx">
                                <img className='btn btn-outline-success' src="src/assets/icons8-carrito-de-compras-30.png" alt="img___shop" />
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;