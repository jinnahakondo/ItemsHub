import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemsCards = ({ item }) => {
    const image = item?.images?.[0];
    return (
        <div
            className="card bg-base-100 border border-base-200 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <figure className="relative p-6 bg-base-200 rounded-t-2xl">
                <span className="badge badge-outline badge-primary absolute top-4 right-4 text-xs">
                    {item?.category}
                </span>

                <Image
                    src={image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="mx-auto object-contain h-40"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-5">
                <h3 className="font-semibold text-base-content">
                    {item.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold text-primary">
                        {item.price}
                    </span>

                    <Link href={`/products/${item.id}`} className="btn btn-primary btn-sm ">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemsCards;