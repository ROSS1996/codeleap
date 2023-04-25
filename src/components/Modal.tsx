import React, { useState } from "react";
import "./css/Modal.css";

interface ModalProps {
  onClose: () => void;
  onAction: () => void;
  isOpen: boolean;
  header: string;
  content: React.ReactNode;
  actionButtonText: string;
  actionButtonColor: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onAction,
  isOpen,
  header,
  content,
  actionButtonText,
  actionButtonColor,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleCloseModal = () => {
    onClose();
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) return;
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return isOpen ? (
    <div
      className="modal"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleModalClick}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{header}</h2>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            className="action-btn"
            onClick={onAction}
            style={{ backgroundColor: actionButtonColor }}
          >
            {actionButtonText}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
