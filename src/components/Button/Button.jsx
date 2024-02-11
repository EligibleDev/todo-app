"use client";

import "./button.css";

const Button = ({ children, type, onClick }) => {
    return (
        <button className="button" onClick={onClick} type={type || "button"}>
            <span className="text span">{children}</span>
        </button>
    );
};

export default Button;
