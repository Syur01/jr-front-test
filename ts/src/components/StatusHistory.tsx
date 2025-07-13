import { useState } from "react";

// Funcion que se encarga de agregar los estados al historial enlistarlos
export function useStatusHistory() {
  const [history, setHistory] = useState<number[]>([]);

  const addStatus = (code: number) => {
    const updated = [...history, code];
    setHistory(updated.slice(-10)); // guarda los últimos 10
  };

  return {
    history,
    addStatus,
  };
}
