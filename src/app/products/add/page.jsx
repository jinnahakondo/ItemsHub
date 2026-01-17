'use client'
import { uploadImage } from '@/app/lib/ImageUpload/UploadImage';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const handelAddProdut = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const discountPrice = form.discountPrice.value;
        const product = { title, description, category, price, discountPrice, image }

        try {
            const res = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)

            })

            const data = await res.json()
            setImage('')
            form.reset()
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 rounded-lg shadow-md">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center mb-2">Add New Item</h2>
            <p className="text-center text-base-content/60 mb-6">
                Create a new product listing for your storefront
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => handelAddProdut(e)}>
                {/* Item Title */}
                <div>
                    <label className="block mb-1 font-medium">Product Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Wireless Noise Cancelling Headphones"
                        className="input input-bordered w-full"
                        name='title'
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        placeholder="Provide a detailed description of the product features, specifications, and what's in the box..."
                        className="textarea textarea-bordered w-full"
                        name='description'
                        required
                    />
                </div>
                {/* category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        placeholder="Provide a detailed description of the product features, specifications, and what's in the box..."
                        className="select w-full"
                        name='category'
                        required
                    >
                        <option value="">select a category</option>
                        <option value="beauty">beauty</option>
                        <option value="fragrances">fragrances</option>
                        <option value="furniture">furniture</option>
                        <option value="groceries">groceries</option>
                    </select>
                </div>

                {/* Price  */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Price ($)</label>
                        <input
                            type="number"
                            placeholder="$0.00"
                            className="input input-bordered w-full"
                            name='price'
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Discount Price ($) </label>
                        <input
                            type="number"
                            placeholder="$0.00"
                            className="input input-bordered w-full"
                            name='discountPrice'
                            required
                        />
                    </div>
                </div>

                {/* Image Preview Box */}
                <label for='image' className="border border-dashed border-base-300 rounded-lg h-40 flex flex-col items-center justify-center text-base-content/60">


                    {
                        image ?
                            <img src={image} className='w-full h-full' />
                            :
                            <>
                                <FaCloudUploadAlt size={30} />
                                {
                                    loading ? 'image uploading...' : 'upload produt image'
                                }
                            </>

                    }
                </label>
                <input className='invisible' id='image' type="file" onChange={async (e) => {
                    setLoading(true)
                    const imageUrl = await uploadImage(e)
                    setLoading(false)
                    setImage(imageUrl);
                }} />

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                    Add Product
                </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-4">
                All fields are required unless marked as optional.
            </p>
        </div>
    );
};

export default AddProduct;