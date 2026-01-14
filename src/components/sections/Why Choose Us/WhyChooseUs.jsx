import SubTitle from '@/components/Title/SubTitle';
import Title from '@/components/Title/Title';
import React from 'react';
import { GoShieldCheck } from "react-icons/go";
import { ShieldCheck, Clock, Zap, Users } from "lucide-react";


const WhyChooseUs = () => {
    const whyChooseUsContent = [
        {
            icon: <ShieldCheck />,
            title: "Secure & Reliable",
            description: "Your data and products are safe with industry-standard security measures."
        },
        {
            icon: <Clock />,
            title: "Fast & Efficient",
            description: "Quick load times and smooth navigation make the user experience seamless."
        },
        {
            icon: <Zap />,
            title: "Modern & Dynamic",
            description: "Built with the latest technologies to ensure a modern web experience."
        },
        {
            icon: <Users />,
            title: "User-Friendly",
            description: "Designed for everyone, easy to use and accessible on all devices."
        }
    ]
    return (
        <div>
            {/* section title  */}
            <div className='text-center mb-16'>
                <Title >Why Choose Us</Title>
                <h4 className='max-w-2xl mx-auto text-base-content/60 '>Experience the best way to trade items online with our modern features designed for security and speed.</h4>
            </div>
            {/* main content  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    whyChooseUsContent.map((content, i) =>
                        <div key={i} className='p-8 bg-base-200 rounded-2xl border border-base-300 group hover:border-primary'>
                            {/* icon  */}
                            <div className='text-2xl grid place-items-center rounded-xl bg-primary/10 w-12 h-12 mb-6 group-hover:bg-primary group-hover:text-white'>
                                {content.icon}
                            </div>
                            {/* title  */}
                            <SubTitle>{content.title}</SubTitle>
                            {/* short description  */}
                            <p className='text-base-content/60'>{content.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;