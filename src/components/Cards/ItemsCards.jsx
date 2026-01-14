import Image from 'next/image';
import React from 'react';

const ItemsCards = ({ item }) => {
    return (
        <div
            className="card bg-base-100 border border-base-200 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <figure className="relative p-6 bg-base-200 rounded-t-2xl">
                <span className="badge badge-outline absolute top-4 right-4 text-xs">
                    {item.tag}
                </span>

                <Image
                    src={item.image}
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

                    <button className="btn btn-primary btn-sm ">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCards;