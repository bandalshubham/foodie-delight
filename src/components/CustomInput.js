import React from 'react';

const CustomInput = ({ label, value, onChange, placeholder, type = 'text', errorMessage }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={errorMessage ? 'input-error' : ''}
            />
            {errorMessage && <span className="error-text">{errorMessage}</span>}
        </div>
    );
};

export default CustomInput;
