import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ItemsCards from '@/components/Cards/ItemsCards';
import SearchFilterBar from '@/components/Search&Filter/SearchFilterBar';
import Title from '@/components/Title/Title';

import React from 'react';
import { connect } from '../lib/dbConnect';


const Products = async ({ searchParams }) => {
    const search = await searchParams;
    const searchText = search.search || ''

    const productsCol = await connect("products")
    const products = await productsCol.find({ title: { $regex: searchText, $options: 'i' } }).toArray() || []


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
            {products.length === 0 &&
                <div className='grid place-items-center'>
                    no products found!
                </div>
            }
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