"use client";

import "./button.css";

const Button = ({ children, type, onClick }) => {
    return (
        <button onClick={onClick} type={type || "button"}>
            <span className="text">{children}</span>
        </button>
    );
};

export default Button;
