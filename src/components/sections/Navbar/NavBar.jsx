import Link from 'next/link';
import React from 'react';
import { Sparkle } from 'lucide-react';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Logo from '@/components/Logo/Logo';

const NavBar = () => {
    return (
        <div className='bg-base-100/80 shadow-md w-full fixed top-0 backdrop-blur-md z-9999'>
            <div className="navbar container mx-auto">
                <Link href={'/'} className='flex-1'><Logo /></Link>
                <div className="flex items-center gap-2 ">
                    <ul className="menu menu-horizontal px-2 hidden md:flex items-center gap-2 ">
                        <li><Link href={'/'} >Home</Link></li>
                        <li><Link href={'/products'}>Products</Link></li>
                        <li><Link href={'/'}>Login</Link></li>
                    </ul>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default NavBar;