import React from "react";

interface StatusHistoryButtonProps {
  onClick: () => void;
}

// Boton que abrira historial 
const StatusHistoryButton: React.FC<StatusHistoryButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="status-historial-button" 
      onClick={onClick} 
      aria-label="Mostrar/ocultar historial"
    >
      🔗
    </button>
  );
};

export default StatusHistoryButton;
