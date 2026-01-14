import { Sparkle } from 'lucide-react';
import React from 'react';

const Logo = () => {
    return (
        <div className="">
            <h2 className="font-bold text-xl flex items-center gap-2 "><span className='text-primary'><Sparkle size={24} /></span> ItemHub</h2>
        </div>
    );
};

export default Logo;