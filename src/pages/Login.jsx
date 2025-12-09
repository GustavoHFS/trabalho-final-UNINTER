import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeData } from '../data/mockData';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('paciente');

  useEffect(() => { initializeData(); }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'paciente') navigate('/dashboard-paciente');
    else if (role === 'medico') navigate('/dashboard-medico');
    else if (role === 'admin') navigate('/dashboard-admin');
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">VidaPlus SGHSS</h1>
        <p className="login-subtitle">Acesse sua conta</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" required className="form-control" placeholder="seu@email.com" />
          </div>
          
          <div className="form-group">
            <label>Senha</label>
            <input type="password" required className="form-control" placeholder="******" />
          </div>

          <div className="form-group">
            <label>Entrar como:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
              <option value="paciente">Paciente</option>
              <option value="medico">Profissional da Saúde</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <button type="submit" className="btn-primary">Entrar no Sistema</button>
        </form>
      </div>
    </div>
  );
};

export default Login;