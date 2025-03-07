import React, { useState } from "react";
import './Registro.css';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineFileText, AiOutlineStar,AiOutlineCreditCard } from "react-icons/ai";
import { SlPresent } from "react-icons/sl";

export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isChecked1, setIsChecked1] = useState(false); // Estado del primer checkbox
  const [isChecked2, setIsChecked2] = useState(false); // Estado del segundo checkbox

  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1); // Cambia el estado del primer checkbox
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2); // Cambia el estado del segundo checkbox
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

              <div className="password-requerimientos-flex">
                <div className="requerimientos-fila">
                  <div className="requerimientos">• Mín. 8 caracteres</div>
                  <div className="requerimientos">• 1 número</div>
                  <div className="requerimientos">• 1 mayúscula</div>
                </div>
                <div className="requerimientos-fila">
                  <div className="requerimientos">• 1 minúscula</div>
                  <div className="requerimientos">• Sin espacio</div>
                  <div className="requerimientos">• Sin usar \¡¿"ºª·`´çñÑ</div>
                </div>
              </div>
            </div>    
             {/* Checkboxes */}
            <div>
              <input
                type="checkbox"
                id="checkbox1"
                checked={isChecked1}
                onChange={handleCheckbox1Change}
              />
              <label htmlFor="checkbox1" className="checkbox-label">
                Quiero acumular CMR Puntos en mis compras según el reglamento del programa y autorizo el tratamiento de mis datos personales.
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="checkbox2"
                checked={isChecked2}
                onChange={handleCheckbox2Change}
              />
              <label htmlFor="checkbox2" className="checkbox-label">
                Acepto los términos y condiciones de falabella.com y autorizo el tratamiento de mis datos personales.
              </label>
            </div>
          <button disabled={!isChecked2}>Registrarse</button>
            
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

          <div className="beneficios-item">
            < AiOutlineCreditCard className="beneficios-icon" />
            <span>Canje de productos, experiencias, viajes y Gift Cards.</span>
          </div>

          <div className="beneficios-item">
            <SlPresent className="beneficios-icon" />
            <span>Promociones especiales, cupones de descuento y más.</span>
          </div>
        </div>
      </div>
    </div>
  );
};