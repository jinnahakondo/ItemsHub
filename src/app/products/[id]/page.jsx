import React from 'react';

const getProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
}

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getProduct(id)
    console.log(product);
    return (
        <div>

        </div>
    );
};

export default ProductDetails;