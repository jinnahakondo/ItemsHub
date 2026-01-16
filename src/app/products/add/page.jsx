import React from 'react';

const AddProduct = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center mb-2">Add New Item</h2>
            <p className="text-center text-gray-500 mb-6">
                Create a new product listing for your storefront
            </p>

            {/* Form */}
            <form className="space-y-4">
                {/* Item Name */}
                <div>
                    <label className="block mb-1 font-medium">Item Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Wireless Noise Cancelling Headphones"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        placeholder="Provide a detailed description of the product features, specifications, and what's in the box..."
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                {/* Price and Image URL */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Price ($)</label>
                        <input
                            type="number"
                            placeholder="$0.00"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input
                            type="text"
                            placeholder="https://example.com/product.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* Image Preview Box */}
                <div className="border border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center text-gray-400">
                    Image preview will appear here
                </div>

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