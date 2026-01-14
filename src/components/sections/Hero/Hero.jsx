import React from 'react';
import PrimaryButton from '../../Buttons/PrimaryButton';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* left side/text-content  */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-4xl lg:text-6xl font-black tracking-tight leading-[1.1]
                '>Discover the Best <br className='lg:hidden xl:block' /><span className='text-primary'>Deals</span> on Local <br className='lg:hidden xl:block' /> Items</h1>
                <p className='text-base-content/60 text-lg max-w-xl'>Join thousands of users buying and selling items safely with our secure and fast platform. Experience the future of local commerce.</p>
                <div><PrimaryButton style={'max-md:w-full px-8 py-6'}>Browse Products Now</PrimaryButton></div>
            </div>
            {/* right side/image  */}
            <div className='' >
                <img src='/hero-image.jpg' alt="Hero gadget photo " className='w-full object-cover  rounded-4xl overflow-hidden' />
            </div>
        </div>
    );
};

export default Hero;