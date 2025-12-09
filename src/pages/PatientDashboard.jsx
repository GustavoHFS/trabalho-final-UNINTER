import React, { useState, useEffect } from 'react';
import { getData, saveData } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [newAppt, setNewAppt] = useState({ specialty: '', date: '', time: '' });

  useEffect(() => { setAppointments(getData('appointments')); }, []);

  const handleSchedule = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      patient: 'Joãozinho',
      doctor: 'Médico Plantonista',
      date: newAppt.date,
      time: newAppt.time,
      status: 'Agendada'
    };
    const updatedList = [...appointments, newItem];
    setAppointments(updatedList);
    saveData('appointments', updatedList);
    alert('Consulta agendada com sucesso!');
  };

  const cancelAppointment = (id) => {
    const updatedList = appointments.filter(appt => appt.id !== id);
    setAppointments(updatedList);
    saveData('appointments', updatedList);
  };

  const viewReport = (appt) => {
    alert(`📄 Abrindo Documentos da Consulta:\n\nPaciente: ${appt.patient}\nMédico: ${appt.doctor}\nData: ${appt.date}\n\nInclui: Prontuário, Receitas e Pedidos de Exame.`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Área do Paciente</h1>
        <button onClick={() => navigate('/')} className="btn-danger">Sair</button>
      </header>

      <div className="dashboard-grid three-cols">
        
        <div className="card">
          <h2>Nova Consulta</h2>
          <form onSubmit={handleSchedule}>
            <div className="form-group">
              <select className="form-control" required onChange={e => setNewAppt({...newAppt, specialty: e.target.value})}>
                <option value="">Selecione Especialidade</option>
                <option value="clinico">Clínico Geral</option>
                <option value="cardio">Cardiologia</option>
                <option value="tele">Telemedicina</option>
              </select>
            </div>
            <div className="form-group">
              <input type="date" className="form-control" required onChange={e => setNewAppt({...newAppt, date: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="time" className="form-control" required onChange={e => setNewAppt({...newAppt, time: e.target.value})} />
            </div>
            <button type="submit" className="btn-primary btn-success">Confirmar Agendamento</button>
          </form>
        </div>

        <div className="card">
          <h2>Entrar na Telemedicina</h2>
          <p style={{marginBottom: '1rem', color: 'var(--text-gray)'}}>
            Acesse sua consulta por telemedicina no horário agendado.
          </p>
          <a href="https://zoom.us/join" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button className="btn-primary" style={{backgroundColor: '#2d8cff'}}>
              🔗 **Entrar na Sala (Zoom)**
            </button>
          </a>
        </div>

        <div className="card">
          <h2>Minhas Consultas</h2>
          {appointments.length === 0 ? <p>Nenhuma consulta agendada.</p> : (
            <ul className="appt-list">
              {appointments.map(appt => (
                <li key={appt.id} className="appt-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}}>
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <strong>{appt.date} às {appt.time}</strong><br/>
                      <small>{appt.doctor}</small> - <span className="badge badge-pending">{appt.status}</span>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', gap: '10px', width: '100%'}}>
                     <button onClick={() => viewReport(appt)} className="btn-action" style={{flex: 1}}>
                       📄 Ver Laudo
                     </button>
                     <button onClick={() => cancelAppointment(appt.id)} className="btn-danger" style={{fontSize: '0.9rem'}}>
                       Cancelar
                     </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;