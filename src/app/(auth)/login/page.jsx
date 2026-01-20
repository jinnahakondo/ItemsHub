import SignInForms from "@/components/Forms/SignInForms";
import Logo from "@/components/Logo/Logo";
import { ShieldCheck, Users, Zap } from "lucide-react";
import React from "react";

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-4 py-8 -mt-23">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

                {/* Left Side - Branding & Features */}
                <div className="hidden lg:block space-y-8">
                    <div className="space-y-4">
                        <Logo />
                        <h1 className="text-4xl font-bold text-base-content leading-tight">
                            Welcome back to your
                            <span className="text-primary block">marketplace</span>
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-md">
                            Continue your journey of buying and selling amazing items with our secure and modern platform.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <ShieldCheck className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Secure Transactions</h3>
                                <p className="text-sm text-base-content/60">Protected payments and verified users</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Trusted Community</h3>
                                <p className="text-sm text-base-content/60">Join thousands of satisfied users</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Zap className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold">Fast & Easy</h3>
                                <p className="text-sm text-base-content/60">List items in minutes, sell in hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-base-300">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">10K+</div>
                            <div className="text-sm text-base-content/60">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">50K+</div>
                            <div className="text-sm text-base-content/60">Items Sold</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">99%</div>
                            <div className="text-sm text-base-content/60">Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 p-8 lg:p-10">

                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-6">
                            <Logo />
                        </div>

                        {/* Title */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-base-content">Welcome back</h2>
                            <p className="text-base-content/60 mt-2">
                                Sign in to access your account
                            </p>
                        </div>

                        {/* Form */}
                        <SignInForms />

                        {/* Demo credentials */}
                        <div className="mt-8 bg-info/5 border border-info/20 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-info rounded-full"></div>
                                <span className="text-sm font-semibold text-info">Demo Account</span>
                            </div>
                            <div className="space-y-1 text-sm">
                                <p className="text-base-content/70">
                                    Email: <span className="font-mono bg-base-200 px-2 py-1 rounded">example@gmail.com</span>
                                </p>
                                <p className="text-base-content/70">
                                    Password: <span className="font-mono bg-base-200 px-2 py-1 rounded">Asdf@1234</span>
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-8 pt-6 border-t border-base-200">
                            <p className="text-sm text-base-content/60">
                                Don't have an account?
                                <a href="#" className="text-primary font-medium hover:underline ml-1">
                                    Sign up for free
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
