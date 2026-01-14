'use client'
import React from 'react';
import { toast } from 'react-toastify';

const LogOut = () => {
    return <button
        onClick={() => {
            document.cookie = 'auth=false; path=/';
            toast.success('log out successfull')
        }
        }
        className='btn btn-primary rounded-xl px-5 py-2 shadow'>Log out</button>
};

export default LogOut;