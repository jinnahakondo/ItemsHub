'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Images = ({ images }) => {
    const [image, setImage] = useState(images?.[0])
    return (
        <div>
            <div className="rounded-2xl overflow-hidden bg-base-200 aspect-square max-w-xl grid place-items-center mx-auto">
                <Image
                    src={image}
                    alt="Pro Dashboard Elite"
                    width={800}
                    height={600}
                    className="w-80 h-auto object-cover"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4" >
                {images.map((img, i) => (
                    <div
                        onClick={() => setImage(img)}
                        key={i}
                        className="w-20 h-20 rounded-xl border border-base-300 bg-base-200 flex items-center justify-center cursor-pointer hover:border-primary"
                    >
                        <Image
                            src={img}
                            alt="thumbnail"
                            width={80}
                            height={80}
                            className="object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Images;