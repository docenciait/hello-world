import React from 'react';
import './Login.css'; // Archivo de estilos CSS

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <img alt="" src="https://www.cloudflare.com/resources/images/slt3lc6tev37/1wXlf7IjxWvr2ivJyzC9iv/4acfec55339c30d2c01eee7d80c9a183/caching-static-content.svg" />
            <input type="email" id="email" placeholder="Introduce tu correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Introduce tu contraseña" required />
          </div>
          <button type="submit" className="login-button">Acceder</button>
        </form>
        <p className="login-footer">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
