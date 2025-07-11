import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  url?: string; // Agregue esto para pasar el contenido de la url para que conincida con el modal de la url
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, url }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-body">
          {children}
        </div>
        {/* Agregue una condicion en la cual si la url existe y contiene algun http o https, se muestra el boton sino no */}
        {url && (url.includes("http://") || url.includes("https://")) && (
          <div className="modal-content-url">
            <button className="modal-close-url">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Abrir URL del input ingresado 🔗
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
