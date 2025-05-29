import React from "react";
import "../../styles/Chat.css";

const Chat: React.FC = () => {
  return (
    <div className="chat-page">
      <h1>💬 Chat Center</h1>
      <div className="chat-roles">
        <div className="chat-role-card">
          <h2>👤 Клиент</h2>
          <p>Общайтесь с владельцем или службой поддержки по поводу аренды.</p>
        </div>
        <div className="chat-role-card">
          <h2>🚗 Владелец</h2>
          <p>Отвечайте на вопросы клиентов, следите за своими заявками.</p>
        </div>
        <div className="chat-role-card">
          <h2>🛠 Поддержка</h2>
          <p>Помогите пользователям с вопросами и техническими проблемами.</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
