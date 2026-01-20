"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Sparkle } from 'lucide-react';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Logo from '@/components/Logo/Logo';
import LogOut from '@/components/Buttons/LogOut';


const NavBar = () => {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth')
        setAuth(storedAuth)
    }, [])

    return (
        <div className='bg-base-100/80 shadow-md w-full fixed top-0 backdrop-blur-md z-9999'>
            <div className="navbar container mx-auto">
                <Link href={'/'} className='flex-1'><Logo /></Link>
                <div className="flex items-center gap-2 ">
                    <ul className="menu menu-horizontal px-2 hidden md:flex items-center gap-2 ">
                        <li><Link href={'/'} >Home</Link></li>
                        <li><Link href={'/products'}>Products</Link></li>
                        {
                            auth ?
                                <li><Link href={'/products/add'}>Add Product</Link></li>
                                :
                                auth || <li><Link href={'/login'}>Login</Link></li>

                        }
                        
                    </ul>
                    {
                        auth ? <LogOut setAuth={setAuth} /> : <PrimaryButton to={'/login'} className='btn btn-primary rounded-xl px-5 py-2 shadow'>Get Started</PrimaryButton>
                    }
                
                </div>
            </div>
        </div>
    );
};

export default NavBar;