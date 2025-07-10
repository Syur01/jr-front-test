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
  /* Esto es de prueba luego lo mejore dentro de el input para mejor practica*/
  // const enter = document.addEventListener('keydown', (e) => {
  //   if (e.key === 'Enter') {
  //     onCheckStatus();
  //   }
  // })
  return (
    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter HTTP status code or name"
        onKeyDown={(e) => {
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
