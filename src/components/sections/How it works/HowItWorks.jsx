import Title from '@/components/Title/Title';
import React from 'react';
import { User, PlusCircle, CheckCircle, ShoppingCart } from 'lucide-react';
import SubTitle from '@/components/Title/SubTitle';

const steps = [
    {
        icon: <User />,
        title: "Sign Up / Login",
        description: "Create an account or log in to start exploring our products."
    },
    {
        icon: <PlusCircle />,
        title: "Add Items",
        description: "Authenticated users can add new items to the platform with ease."
    },
    {
        icon: <CheckCircle />,
        title: "Browse & Select",
        description: "View items in the list and check their details to make informed choices."
    },
    {
        icon: <ShoppingCart />,
        title: "Manage Your Items",
        description: "Keep track of all your items in one place for easy management."
    }
];

const HowItWorks = () => {
    return (
        <div className=' grid place-items-center bg-base-200'>
            <div className='py-16 container mx-auto px-2'>
                <Title style={'text-center'}>How It Works</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 bg-base-100 rounded-xl shadow-md hover:scale-105 transition-transform">
                            <div className="text-primary mb-4">{step.icon}</div>
                            <SubTitle>{step.title}</SubTitle>
                            <p className="text-base-content/70">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
