import React from "react";
import "../../styles/Register.css";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: "driver" | "owner") => void;
}

const UserTypeModal: React.FC<UserTypeModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content user-type-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h3>Выберите тип аккаунта</h3>
        <div className="modal-options">
          <button className="modal-option" onClick={() => onSelect("driver")}>
            Я водитель, хочу арендовать
          </button>
          <button className="modal-option" onClick={() => onSelect("owner")}>
            Я владелец, хочу сдавать
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeModal;
