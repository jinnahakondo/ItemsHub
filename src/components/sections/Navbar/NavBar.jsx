import Link from 'next/link';
import React from 'react';
import { Sparkle } from 'lucide-react';
import PrimaryButton from '../../Buttons/PrimaryButton';

const NavBar = () => {
    return (
        <div className='bg-base-100/80 shadow-md w-full fixed top-0 backdrop-blur-md'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link href={'/'} className="font-bold text-xl flex items-center gap-2 "><span className='text-primary'><Sparkle size={24} /></span> ItemHub</Link>
                </div>
                <div className="flex items-center gap-2 ">
                    <ul className="menu menu-horizontal px-2 hidden md:flex items-center gap-2 ">
                        <li><Link href={'/'} >Home</Link></li>
                        <li><Link href={'/'}>Products</Link></li>
                        <li><Link href={'/'}>Login</Link></li>
                    </ul>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default NavBar;