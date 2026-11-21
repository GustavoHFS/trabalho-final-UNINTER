<div align="center">

# VidaPlus · SGHSS

**Protótipo acadêmico de um sistema de gestão hospitalar.**

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Protótipo-6b7280)

</div>

## Visão geral

O **VidaPlus (SGHSS)** é um projeto de conclusão acadêmica desenvolvido com **React**, para demonstrar interfaces e fluxos de um sistema de gestão hospitalar. A aplicação reúne três perspectivas de uso — **paciente, profissional de saúde e administração** — em painéis distintos.

## Funcionalidades

| Perfil | Recursos demonstrados |
| --- | --- |
| **Paciente** | Agendamento e cancelamento de consultas, listagem de atendimentos e acesso ilustrativo a documentos. |
| **Profissional de saúde** | Visualização da agenda, abertura de atendimento e formulário ilustrativo de prontuário. |
| **Administrador** | Consulta da base de usuários, indicadores de demonstração e simulação do estado de suprimentos. |

A interface também apresenta links externos para acesso ao Zoom; **não há integração nativa de telemedicina**.

## Tecnologias

**React 19 · JavaScript · Vite 7 · React Router · Lucide React · CSS · localStorage**

A navegação utiliza **React Router**. Os dados iniciais são fictícios e os agendamentos do paciente são salvos no **localStorage** do navegador.

## Executar localmente

**Pré-requisito:** Node.js e npm instalados.

~~~bash
npm install
npm run dev
~~~

Abra o endereço indicado pelo Vite no terminal. Para gerar a versão de produção:

~~~bash
npm run build
~~~

## Organização

~~~text
src/
├── App.jsx               rotas e navegação
├── data/mockData.js       dados fictícios e localStorage
├── pages/
│   ├── Login.jsx
│   ├── PatientDashboard.jsx
│   ├── DoctorDashboard.jsx
│   └── AdminDashboard.jsx
├── App.css
└── index.css
~~~

## Escopo e limitações

Este é um **protótipo educacional**, não um sistema hospitalar pronto para uso real. A seleção de perfis simula o acesso — não existe autenticação efetiva. O prontuário exibido no painel médico não é persistido e parte dos indicadores é fixa ou demonstrativa. **Não utilize dados pessoais ou clínicos reais.**

---

Projeto acadêmico desenvolvido por **Gustavo Henrique** para a UNINTER.
