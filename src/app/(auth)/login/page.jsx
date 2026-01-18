import SignInForms from "@/components/Forms/SignInForms";
import { Lock } from "lucide-react";
import React from "react";

const Login = () => {
    return (
        <div className="h-full  px-4">
            <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg p-8 mx-auto">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="text-primary" size={28} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center">Welcome back</h2>
                <p className="text-sm text-center text-base-content/70 mt-1">
                    Log in to your account to continue
                </p>

                {/* Form */}
                <SignInForms />

                {/* Demo credentials */}
                <div className="mt-6 border border-dashed rounded-xl p-4 text-sm">
                    <p className="font-semibold flex items-center gap-2">
                        <span className="badge badge-info badge-sm"></span>
                        DEMO CREDENTIALS
                    </p>
                    <p className="mt-1 text-base-content/70">
                        Email: <span className="font-medium">admin@example.com</span>
                    </p>
                    <p className="text-base-content/70">
                        Password: <span className="font-medium">password123</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;
