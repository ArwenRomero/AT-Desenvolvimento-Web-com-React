import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/views/painel.scss';

const dadosFraldas = [
  { dia: 'Seg', fraldas: 5 },
  { dia: 'Ter', fraldas: 6 },
  { dia: 'Qua', fraldas: 4 },
  { dia: 'Qui', fraldas: 7 },
  { dia: 'Sex', fraldas: 5 },
  { dia: 'Sáb', fraldas: 8 },
  { dia: 'Dom', fraldas: 6 },
];

const dadosSono = [
  { semana: 'Semana 1', horas: 40 },
  { semana: 'Semana 2', horas: 45 },
  { semana: 'Semana 3', horas: 42 },
  { semana: 'Semana 4', horas: 48 },
];

const PainelEstatistico: React.FC = () => {
  return (
    <div className="painel-estatistico">
      <h1>Painel Estatístico</h1>
      
      <div className="grafico">
        <h2>Número Médio de Fraldas Trocadas</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dadosFraldas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fraldas" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grafico">
        <h2>Horas de Sono por Semana</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dadosSono}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semana" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="horas" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PainelEstatistico;
