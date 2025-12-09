import React, { useState, useEffect } from 'react';
import { getData } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ users: 0, appointments: 0 });
  const [users, setUsers] = useState([]);
  
  const [supplyStatus, setSupplyStatus] = useState('NORMAL');

  useEffect(() => {
    const userList = getData('users');
    const apptList = getData('appointments');
    setUsers(userList);
    setStats({ users: userList.length, appointments: apptList.length });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Painel de Gestão (Admin)</h1>
        <button onClick={() => navigate('/')} className="btn-danger">Sair</button>
      </header>

      <div className="dashboard-grid four-cols" style={{ marginBottom: '2rem' }}>
        
        <div className="card" style={{ borderLeft: '4px solid #3b82f6' }}>
          <h3>Total de Usuários</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.users}</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #10b981' }}>
          <h3>Consultas Realizadas</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.appointments}</p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
          <h3>Leitos Disponíveis</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
        </div>

        <div className="card" style={{ borderLeft: `4px solid ${supplyStatus === 'CRITICO' ? '#e63946' : '#2a9d8f'}` }}>
          <h3>Suprimentos</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: supplyStatus === 'CRITICO' ? '#e63946' : '#2a9d8f' }}>
            {supplyStatus === 'CRITICO' ? '⚠️ CRÍTICO' : '✅ NORMAL'}
          </p>
          <button 
            onClick={() => setSupplyStatus(supplyStatus === 'CRITICO' ? 'NORMAL' : 'CRITICO')}
            style={{ marginTop: '0.5rem', fontSize: '0.8rem', cursor: 'pointer', padding: '4px 8px' }}
          >
            Simular Alteração
          </button>
        </div>

      </div>

      <div className="card">
        <h2>Base de Usuários Cadastrados</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Perfil</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <span className={`badge badge-${user.role}`}>
                    {user.role.toUpperCase()}
                  </span>
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;