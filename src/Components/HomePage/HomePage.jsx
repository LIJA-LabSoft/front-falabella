import React from "react";
import { Header } from "../Header/Header"; 
import './HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-page">
            {/* Header */}
            <Header />

            {/* Contenido principal */}
            <div className="main-content">
                {/* Sección de REBAJAS */}
                <section className="sales-section">
                    <h1>REBAJAS</h1>
                    <h2>AQUI VA FOTO REBJA</h2>
                </section>

                {/* Sección de Tus últimos vistos */}
                <section className="last-viewed-section">
                    <h2>Tus últimos vistos</h2>
                    <div className="products-grid">
                        {/* Aquí puedes agregar los productos vistos */}
                        <div className="product-card">Producto 1</div>
                        <div className="product-card">Producto 2</div>
                        <div className="product-card">Producto 3</div>
                    </div>
                </section>

            </div>
        </div>
    );
};