import React, { useState } from 'react';
import StatutsInfoHistorialButton from './StatusInfoHistorial';

interface Props {
  history: number[];
}

// Se encarga de enlistar los historiales dentro del boton statusInfoHistorial 
const StatusHistoryWrapper: React.FC<Props> = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHistory = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <StatutsInfoHistorialButton onClick={toggleHistory} />
      {isOpen && (
        <div className="status-history-overlay" onClick={toggleHistory}>
          <div className="status-history-modal" onClick={e => e.stopPropagation()}>
            <h3>Historial de Códigos</h3>
            {history.length > 0 ? (
              <ul>
                {history.map((code, index) => (
                  <li key={index}>Código: {code}</li>
                ))}
              </ul>
            ) : (
              <p>No hay historial.</p>
            )}
            <button onClick={toggleHistory} className="close-button">Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusHistoryWrapper;
