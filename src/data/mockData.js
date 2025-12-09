const initialData = {
  users: [
    { id: 1, name: 'João Silva', role: 'paciente', email: 'joao@email.com' },
    { id: 2, name: 'Carlos Oliveira', role: 'paciente', email: 'carlos@email.com' },
    { id: 3, name: 'Maria Clara', role: 'paciente', email: 'maria@email.com' },
    { id: 4, name: 'Dr. Pedro Santos', role: 'medico', email: 'pedro@vidaplus.com' },
    { id: 5, name: 'Dra. Ana Souza', role: 'medico', email: 'ana@vidaplus.com' },
    { id: 6, name: 'Dr. Hans Chucrute', role: 'medico', email: 'hans@vidaplus.com' },
    { id: 7, name: 'Admin Gestor', role: 'admin', email: 'admin@vidaplus.com' },
    
  ],
  appointments: [
    { id: 101, patient: 'Carlos Oliveira', doctor: 'Dra. Ana Souza', date: '2023-11-20', time: '14:00', status: 'Pendente' },
    { id: 102, patient: 'Maria Clara', doctor: 'Dr. Pedro Santos', date: '2023-11-21', time: '09:30', status: 'Finalizada' },
  ]
};

export const initializeData = () => {
  if (!localStorage.getItem('sghss_data')) {
    localStorage.setItem('sghss_data', JSON.stringify(initialData));
  }
};

export const getData = (key) => {
  const data = JSON.parse(localStorage.getItem('sghss_data'));
  return data ? data[key] : [];
};

export const saveData = (key, newData) => {
  const data = JSON.parse(localStorage.getItem('sghss_data'));
  data[key] = newData;
  localStorage.setItem('sghss_data', JSON.stringify(data));
};