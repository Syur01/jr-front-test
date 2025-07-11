import React from 'react';

interface InputSectionProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onCheckStatus: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ 
  inputValue, 
  onInputChange, 
  onCheckStatus 
}) => {

  return (
    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        pattern="https?://.+"  // Agregue para que acepte URLs completas
        onChange={(e) => onInputChange(e.target.value)} 
        placeholder="Enter HTTP status code or name"
        onKeyDown={(e) => {       // agregue para que acepte la tecla Enter 
          if(e.key === 'Enter'){
            onCheckStatus();
          }
        }}
      />
      <button onClick={onCheckStatus}>Check Status</button>
    </div>
  );
};

export default InputSection;
