import React from 'react';

const OrderCartIcon = ({className}) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M6 6h15l-1.5 9h-12L6 6z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
        />
        <path
            d="M6 6L5 3H2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.25" fill="currentColor"/>
        <circle cx="17" cy="20" r="1.25" fill="currentColor"/>
    </svg>
);

export default OrderCartIcon;
