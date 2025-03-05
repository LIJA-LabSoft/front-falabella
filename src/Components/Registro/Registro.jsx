import React, { useState } from "react";
import './Registro.css';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineFileText, AiOutlineStar } from "react-icons/ai";


export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="wrapper">
      <div className="container">

        <div className="formulario">
          <h1>Inicia sesión o regístrate para comprar</h1>
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

              <ul className="password-requisitos">
                <li>Mín. 8 caracteres</li>
                <li>1 número</li>
                <li>1 mayúscula</li>
                <li>1 minúscula</li>
                <li>Sin espacio</li>
                <li>Sin usar \¡¿"ºª·`´çñÑ</li>
              </ul>
            </div>

            <button type="submit" className="register-button">Registrate</button>
          </form>
        </div>

        <div className="beneficios">
          <h2>Beneficios Falabella.com</h2>
          <div className="beneficios-item">
              <AiOutlineBell className="beneficios-icon" />
              <span>Recibir notificaciones en tiempo real de tus pedidos.</span>
          </div>
          <div className="beneficios-item">
            <AiOutlineFileText className="beneficios-icon" />
            <span>Revisar tus boletas online.</span>
          </div>
          <div className="beneficios-item">
            <AiOutlineStar className="beneficios-icon" />
            <span>Guardar medios de pago y direcciones favoritas.</span>
          </div>
          <div className="beneficios-item">
            <img src="https://www.cmrpuntos.com.co/static/media/logo.9c098baf.svg"
                alt="logo CMR"
                className= "cmr"
            />
            <span>Ser parte de CMR Puntos, el mejor programa de beneficios.</span>
          </div>
        </div>
      </div>
    </div>
  );
};