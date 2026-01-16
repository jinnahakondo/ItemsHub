import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Images from '@/components/Images/Images';
import Title from '@/components/Title/Title';
import { ShieldCheck, ShoppingCart, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    const data = await res.json()
    return data
}

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const { title, description, category, price, discountPercentage, images, brand } = await getProduct(id)
    const discountPrice = price * (discountPercentage / 100)

    return (
        <div className='container mx-auto px-2'>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-base-content/60 mb-6">
                <Link href="/products" className="text-primary hover:underline">
                    ← Back to products
                </Link>

            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Left: Images */}
                <div className=''>
                    <Images images={images} />
                </div>

                {/* Right: Info */}
                <div>
                    <span className="badge badge-primary badge-outline mb-3">
                        {category}
                    </span>

                    <Title>
                        {title}
                    </Title>

                    <p className="text-base-content/70 mb-5">
                        {brand}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-primary">
                            ${price}
                        </span>
                        <span className="line-through text-base-content/50 text-lg">
                            ${discountPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 text-base-content/80 leading-relaxed mb-8">
                        <p>
                            {description}
                        </p>
                        <p>
                            Built for speed and precision, the elite version includes
                            dedicated enterprise-grade cloud storage and 24/7 priority
                            support.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3 p-4 border border-base-200 rounded-xl">
                            <Zap className="text-primary w-6 h-6" />
                            <div>
                                <p className="text-xs text-base-content/60">PERFORMANCE</p>
                                <p className="font-semibold">Ultra Fast</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 border border-base-200 rounded-xl">
                            <ShieldCheck className="text-primary w-6 h-6" />
                            <div>
                                <p className="text-xs text-base-content/60">SECURITY</p>
                                <p className="font-semibold">SSL Encrypted</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <PrimaryButton style={'w-full py-6'}>
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;