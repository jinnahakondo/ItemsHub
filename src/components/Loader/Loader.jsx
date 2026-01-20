import React from 'react';
import { Sparkle } from 'lucide-react';

const Loader = () => {
    return (
        <div className='grid place-items-center h-screen bg-base-100'>
            <div className='flex flex-col items-center gap-4'>
                {/* Logo with animation */}
                <div className='flex items-center gap-2 animate-pulse'>
                    <span className='text-primary animate-spin'>
                        <Sparkle size={32} />
                    </span>
                    <h2 className="font-bold text-2xl text-base-content">ItemHub</h2>
                </div>

                {/* Loading dots */}
                <div className='flex gap-1'>
                    <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
                    <div className='w-2 h-2 bg-primary rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                    <div className='w-2 h-2 bg-primary rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;