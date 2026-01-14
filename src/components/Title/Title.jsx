import React from 'react';

const Title = ({ children, style }) => {
    return <h2 className={`text-4xl font-black mb-4 ${style && style}`}>{children}</h2>
};

export default Title;