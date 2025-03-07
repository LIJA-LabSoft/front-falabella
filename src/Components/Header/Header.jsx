import React, { useState } from "react";
import {LoginForm} from "../LoginForm/LoginForm";
import {Menu} from '../Menu/Menu'; 
import './Header.css';
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io"; 
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false); 
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return(
        <div className="header">
            <div className="subheader-top">
                <div className="subheader-top-container">
                    <a href="#Falabella">
                        <img src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt9a6cb2faab703fa5/65a68ebb130790558acbf0cb/falabella.com_green_icon.svg" alt="falabella" />
                    </a>
                    <a href="#Homecenter">
                        <img src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltccc5a7e27f9cab2f/6418aba238ab2c1b60a4bc29/logo-homecenter-our-stores.svg" alt="Homecenter" />
                    </a>
                    <a href="#Linio">
                        <img src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta5a44443cc0e501c/63b6ff659233961262fbd64c/logo-linio.svg" alt="Linio" />
                    </a>
                </div>
            </div>
            {/* Header principal */}
            <div className="header-main">
                <div className="header-container">
                    <div className="logo">
                        <img src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt9a6cb2faab703fa5/65a68ebb130790558acbf0cb/falabella.com_green_icon.svg"
                        alt="logo de falabella"
                        style={{ width: '100px', height: 'auto' }}
                        />
                    </div>
                    <div className="Menu">
                        <ul className="nav-list">
                            <li><a href="javascript:void(0);" onClick={() => setIsMenuVisible(!isMenuVisible)} className="nav-link">☰ Menú</a>
                            </li>
                        </ul>
                    </div>
                    {isMenuVisible && <Menu />}
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar en falabella.com" />
                        <div className="search-icon-container">
                            <IoIosSearch className="search-icon" />
                        </div>
                    </div>

                    <div
                        className="user-section"
                        onMouseEnter={() => setIsPopupVisible(true)} // Mostrar pop-up al pasar el mouse
                        onMouseLeave={() => setIsPopupVisible(false)} // Ocultar pop-up al quitar el mouse
                    >
                        <span>Hola, inicia sesión</span>

                        {/* Pop-up */}
                        {isPopupVisible && (
                            <div className="user-popup">
                                <div className="popup-content">
                                    <a href="javascript:void(0);" onClick={() => setIsLoginVisible(true)}>Inicia sesión</a>
                                    <a href="#registrarse">Regístrate</a>
                                    <a href="#mi-cuenta">Mi cuenta</a>
                                </div>
                            </div>
                        )}
                        {isLoginVisible && (
                            <div className="login-modal">
                                <div className="login-container">
                                    <button onClick={() => setIsLoginVisible(false)}>Cerrar</button>
                                    <LoginForm />
                                </div>
                            </div>
                        )}

                    </div>

                    <nav>
                        <ul className="nav-list">
                            <li><a href= "#compras" className="nav-link">Mis Compras</a></li>
                            <li>
                                <a href= "#wishlist" className="nav-link">
                                    <IoIosHeartEmpty className="wishlist-icon" /> 
                                </a>
                            </li>
                            <li><a href= "#carrito" className="nav-link">
                                    <IoCartOutline className="cart-icon" /> 
                                </a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Subheader */}
            <div className="subheader">
                <div className="subheader-container">
                    <div className="additional-links">
                        <span>Ingresa tu ubicación</span>
                        <a href="#vende">Vende en falabella.com</a>
                        <a href="#tarjetas">Tarjetas y cuentas</a>
                        <a href="#novios">Novios</a>
                        <a href="#ayuria">Ayuda</a>
                    </div>
                </div>
            </div>
        </div>
    );
};