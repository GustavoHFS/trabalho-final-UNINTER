import React, { useState, useEffect } from 'react';
import { getData } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => { setAppointments(getData('appointments')); }, []);

  const closeSession = () => {
    alert(`Prontuário de ${selectedPatient.patient} salvo com sucesso!`);
    setSelectedPatient(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Portal do Médico</h1>
        <button onClick={() => navigate('/')} className="btn-danger">Sair</button>
      </header>

      <div className="dashboard-grid three-cols">
        
        <div className="card" style={{gridColumn: '1 / span 2'}}> 
          <h2>Agenda do Dia</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Paciente</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appt => (
                <tr key={appt.id}>
                  <td>{appt.time} ({appt.date})</td>
                  <td>{appt.patient}</td>
                  <td><span className="badge badge-pending">{appt.status}</span></td>
                  <td>
                    <button onClick={() => setSelectedPatient(appt)} className="btn-action">Atender</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Conectar para Teleconsulta</h2>
          <p style={{marginBottom: '1rem', color: 'var(--text-gray)'}}>Use este link para iniciar a sessão de telemedicina com seu paciente.</p>
          <a href="https://zoom.us/pt/join" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button className="btn-primary" style={{backgroundColor: '#2d8cff'}}>
              🚀 **Iniciar Reunião (Zoom)**
            </button>
          </a>
        </div>

      </div> 

      {selectedPatient && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Atendendo: {selectedPatient.patient}</h2>
            <div className="form-group" style={{marginTop: '1rem'}}>
              <label>Registro Clínico (Sintomas e Diagnóstico):</label>
              <textarea className="form-control" rows="5" placeholder="Descreva os sintomas e diagnóstico..."></textarea>
            </div>
            <div className="form-group">
              <label>Prescrição Médica:</label>
              <textarea className="form-control" rows="3" placeholder="Medicamentos, dosagem e instruções..."></textarea>
            </div>
            <div className="modal-actions">
              <button onClick={() => setSelectedPatient(null)} className="btn-danger">Cancelar</button>
              <button onClick={closeSession} className="btn-primary">Salvar Prontuário</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;