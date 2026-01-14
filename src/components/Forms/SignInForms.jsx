'use client'
import { Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const SignInForms = () => {

    const router = useRouter()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handelLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email === "admin@example.com" && password === "password123") {
            document.cookie = 'auth=true; path=/';
            toast.success('logged in successfull')
            router.push('/')
        }
        else {
            toast.error('enter a valid email & password')
        }
    }
    return (
        <div>
            <form className="mt-6 space-y-4" onSubmit={(e) => handelLogin(e)}>

                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Email Address</span>
                    </label>
                    <div className="relative">
                        <Mail
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
                        />
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="admin@example.com"
                            className="input input-bordered w-full pl-3"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="form-control">
                    <div className="flex justify-between items-center">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <a href="#" className="text-sm link link-primary">
                            Forgot password?
                        </a>
                    </div>
                    <div className="relative">
                        <Lock
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
                        />
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full pl-3"
                        />
                    </div>
                </div>

                {/* Remember */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="text-sm text-base-content/70">
                        Stay signed in for 30 days
                    </span>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-full mt-4">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInForms;