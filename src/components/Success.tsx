import React from "react";
import succes from "../assets/success.svg";
import { SuccessProps } from "../types/types";

export const Success: React.FC<SuccessProps> = ({ count }) => {
    return (
        <div className="success-block">
            <img src={succes} alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button
                onClick={() => window.location.reload()}
                className="send-invite-btn"
            >
                Назад
            </button>
        </div>
    );
};
