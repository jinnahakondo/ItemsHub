
import React from 'react';

const SubTitle = ({ children, style }) => {
    return <h2 className={`text-lg font-bold mb-2 ${style && style}`}>{children}</h2>
};

export default SubTitle;