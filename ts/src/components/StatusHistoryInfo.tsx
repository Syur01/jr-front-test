import React, { useState } from 'react';
import StatutsInfoHistorialButton from './StatusInfoHistorial';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  history: number[];
}

const categorizeStatus = (code: number) => {
  if (code >= 200 && code < 300) return "2xx";
  if (code >= 300 && code < 400) return "3xx";
  if (code >= 400 && code < 500) return "4xx";
  if (code >= 500 && code < 600) return "5xx";
  return "invalid";
};

const colorsByCategory: Record<string, string> = {
  "2xx": "rgba(75, 192, 192, 0.6)",  // verde agua
  "3xx": "rgba(255, 159, 64, 0.6)",  // azul
  "4xx": "rgba(255, 99, 132, 0.6)",  // rojo claro
  "5xx": "rgba(255, 159, 64, 0.6)",  // naranja
  invalid: "rgba(255, 159, 64, 0.6)", // gris
};

const StatusHistoryWrapper: React.FC<Props> = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHistory = () => {
    setIsOpen(prev => !prev);
  };

  // Limitar a últimos 10 códigos para mostrar
  const recentHistory = history.slice(-10);
  const labels = recentHistory.map((_, i) => `#${i + 1}`);
  const categories = recentHistory.map(categorizeStatus);
  const backgroundColors = categories.map(cat => colorsByCategory[cat]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Código HTTP',
        data: recentHistory,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <>
      <StatutsInfoHistorialButton onClick={toggleHistory} />
      {isOpen && (
        <div className="status-history-overlay" onClick={toggleHistory}>
          <div className="status-history-modal" onClick={e => e.stopPropagation()}>
            <h3>Historial de Códigos HTTP</h3>
            {recentHistory.length > 0 ? (
              <Bar data={data} />
            ) : (
              <p>No hay historial para mostrar.</p>
            )}
            <button onClick={toggleHistory} className="close-button">Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusHistoryWrapper;
