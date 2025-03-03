import React from 'react';
import './Registro.css';
import { FiEyeOff } from 'react-icons/fi';

export const Registro = () => {
  return (
    <div className="wrapper">
      <div className="container">

        <div className="datos">
          <form action="">
            <h1>Inicia sesión o regístrate para comprar</h1>
            <h2>Ingresa tus datos personales y disfruta de una experiencia de compra más rápida.</h2>

            <div className="input-box">
              <input type="text" placeholder="Ingresa un correo" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ingresa un nombre" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ingresa apellidos" required />
            </div>
            <div className="input-box">
              <div className="document-input">
                <select className="document-type">
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                </select>
                <input type="text" placeholder="Ingresa una cédula" required />
              </div>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Ingresa un número" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Ingresa tu contraseña" required />
              <FiEyeOff className="icon" />
            </div>
          </form>
        </div>

        <div className="beneficios">
          <h2>Beneficios falabella.com</h2>
          <ul>
            <li>Recibir notificaciones en tiempo real de tus pedidos.</li>
            <li>Revisar tus boletas online.</li>
            <li>Guardar medios de pago y direcciones favoritas.</li>
            <li>Ser parte de CMR puntos, el mejor programa de beneficios.</li>
          </ul>

          <h2>Beneficios CMR Puntos</h2>
          <ul>
            <li>Canje de productos, experiencias, viajes y Gift Cards.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};