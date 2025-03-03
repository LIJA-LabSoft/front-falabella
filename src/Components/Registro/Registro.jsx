import React, { useState } from "react";
import './Registro.css';
import { FiEyeOff, FiEye } from 'react-icons/fi';

export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="wrapper">
      <div className="container">

        <div className="formulario">
          <h1>Regístrate</h1>
          <p className="subtitle">Ingresa tus datos personales y disfruta de una experiencia de compra más rápida.</p>

          <form>
            <div className="input-box">
              <label>Correo electrónico</label>
              <input type="email" placeholder="Ingresa tu correo electrónico" required />
            </div>

            <div className="input-box">
              <label>Nombre</label>
              <input type="text" placeholder="Ingresa tu nombre" required />
            </div>

            <div className="input-box">
              <label>Apellidos</label>
              <input type="text" placeholder="Ingresa tus apellidos" required />
            </div>

            <div className="input-box">
              <label>Tipo de documento</label>
              <div className="document-input">
                <select className="document-type">
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                </select>
                <input type="text" placeholder="Número de documento" required />
              </div>
            </div>

            <div className="input-box">
              <label>Celular</label>
              <input type="tel" placeholder="Ingresa tu número de celular" required />
            </div>

            <div className="input-box password-input">
              <label>Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                required
              />
              <span className="icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>

            <button type="submit" className="register-button">Registrate</button>
          </form>
        </div>

        <div className="beneficios">
          <h2>Beneficios de registrarte</h2>
          <ul>
            <li>Recibir notificaciones en tiempo real de tus pedidos.</li>
            <li>Revisar tus boletas online.</li>
            <li>Guardar medios de pago y direcciones favoritas.</li>
            <li>Ser parte de CMR Puntos, el mejor programa de beneficios.</li>
          </ul>

          <h2>Beneficios CMR Puntos</h2>
          <ul>
            <li>Canje de productos, experiencias, viajes y Gift Cards.</li>
            <li>Promociones especiales, cupones de descuento y más.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};