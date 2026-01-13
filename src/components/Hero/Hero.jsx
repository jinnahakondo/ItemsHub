import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-lg:items-center'>
            {/* left side/text-content  */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]
                '>Discover the Best <br /><span className='text-primary'>Deals</span> on Local <br /> Items</h1>
                <p className='text-base-content/60 text-lg'>Join thousands of users buying and selling items safely with our secure and fast platform. Experience the future of local commerce.</p>
                <div><PrimaryButton>Browse Products Now</PrimaryButton></div>
            </div>
            {/* right side/image  */}
            <div className='' >
                <img src='/hero-image.jpg' alt="Hero gadget photo " className='w-full object-cover  rounded-4xl overflow-hidden' />
            </div>
        </div>
    );
};

export default Hero;