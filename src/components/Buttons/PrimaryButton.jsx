import React from 'react';

const PrimaryButton = ({ children, style }) => {
    return <button className={`btn btn-primary rounded-xl px-5 py-2 shadow ${style && style}`}>{children}</button>
};

export default PrimaryButton;