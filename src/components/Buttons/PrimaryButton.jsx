import Link from 'next/link';
import React from 'react';

const PrimaryButton = ({ children, style, to }) => {
    if (to) {
        return <Link href={to} className={`btn btn-primary rounded-xl px-5 py-2 shadow ${style && style}`}>{children}</Link>
    } else {
        return <button className={`btn btn-primary rounded-xl px-5 py-2 shadow ${style && style}`}>{children}</button>
    }


};

export default PrimaryButton;