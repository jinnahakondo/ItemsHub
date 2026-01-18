import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ItemsCards from '@/components/Cards/ItemsCards';
import SearchFilterBar from '@/components/Search&Filter/SearchFilterBar';
import Title from '@/components/Title/Title';

import React from 'react';


const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/products`, {
        // cache: 'force-cache',
        // next: { revalidate: 60 }
    })
    const data = await res.json();
    return data.result || [];
}


const Products = async () => {
    const products = await getProducts()

    return (
        <div className='container mx-auto px-2'>
            <div className='flex items-center justify-between mb-8'>
                {/* left  */}
                <div>
                    <Title>Inventory</Title>
                    <p className='text-base-content/60'>Browse and manage your item inventory and digital assets.</p>
                </div>
                {/* right  */}
                <div>
                    <PrimaryButton to={'/products/add'}><span className='text-2xl'>+</span> Add New Product</PrimaryButton>
                </div>
            </div>
            {/* Search Bar  */}
            <div className='mb-8'>
                <SearchFilterBar />
            </div>
            {/* products  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                {
                    products.map(item => <ItemsCards key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Products;