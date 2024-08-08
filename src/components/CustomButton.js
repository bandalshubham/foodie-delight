import React from 'react';

const CustomButton = ({ onClick, add,children, className = '', ...props }) => {
    return (
        <button onClick={onClick} className={`btn ${className}`} {...props}>
            {add}
        </button>
    );
};

export default CustomButton;
