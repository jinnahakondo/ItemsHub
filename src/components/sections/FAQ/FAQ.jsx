"use client";

import { useState } from 'react';
import Title from '@/components/Title/Title';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "How do I list an item for sale?",
            answer: "Simply create an account, click 'Add Product', upload photos of your item, add a description and price, then publish your listing. It's that easy!"
        },
        {
            question: "Is it safe to buy and sell on this platform?",
            answer: "Yes! We use industry-standard security measures to protect your data and transactions. All users are verified, and we provide secure payment processing."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
        },
        {
            question: "How does shipping work?",
            answer: "Sellers can choose to handle shipping themselves or use our integrated shipping labels. We provide tracking information for all shipments to ensure transparency."
        },
        {
            question: "What if I'm not satisfied with my purchase?",
            answer: "We offer buyer protection and a return policy. If an item doesn't match the description or arrives damaged, you can request a return within 30 days."
        },
        {
            question: "Are there any fees for using the platform?",
            answer: "Creating an account and browsing items is completely free. We only charge a small commission fee when you successfully sell an item."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach our customer support team through the contact form, email, or live chat. We're available 24/7 to help with any questions or issues."
        },
        {
            question: "Can I edit or delete my listings?",
            answer: "Yes, you can edit your listings at any time from your dashboard. You can update photos, descriptions, prices, or delete listings that are no longer available."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {/* Section title */}
            <div className='text-center mb-16'>
                <Title>Frequently Asked Questions</Title>
                <h4 className='max-w-2xl mx-auto text-base-content/60'>
                    Find answers to common questions about buying and selling on our platform.
                </h4>
            </div>

            {/* FAQ Items */}
            <div className='max-w-4xl mx-auto space-y-4'>
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className='bg-base-200 rounded-2xl border border-base-300 overflow-hidden'
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className='w-full p-6 text-left flex justify-between items-center hover:bg-base-300 transition-colors'
                        >
                            <h3 className='font-semibold text-base-content pr-4'>
                                {faq.question}
                            </h3>
                            <div className='flex-shrink-0 text-primary'>
                                {openIndex === index ? (
                                    <ChevronUp size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                            </div>
                        </button>

                        {openIndex === index && (
                            <div className='px-6 pb-6'>
                                <p className='text-base-content/70 leading-relaxed'>
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;