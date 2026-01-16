"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchFilterBar = () => {
    return (
        <div className="p-4 md:p-6 bg-base-100 border border-base-300 rounded-box md:rounded-2xl shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                {/* Search Bar */}
                <div className="flex-1 w-full">
                    <div className="relative">
                        <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                            <Search className="w-4 h-4 md:w-5 md:h-5 text-base-content/70" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by product name, SKU or category..."
                            className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3.5 
                         border border-base-300 rounded-lg md:rounded-xl 
                         bg-base-100 focus:outline-none focus:ring-2 
                         focus:ring-primary focus:border-transparent 
                         text-base-content placeholder:text-base-content/60
                         transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Filter Row */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {/* All Categories Dropdown */}
                    <div className="dropdown dropdown-end w-full sm:w-auto">
                        <button className="btn btn-outline w-full sm:w-auto 
                               justify-between px-4 py-2.5 md:py-3 
                               rounded-lg md:rounded-xl 
                               border-base-300 hover:border-base-400
                               bg-base-100 hover:bg-base-200">
                            <span className="text-sm md:text-base font-normal">All Categories</span>
                            <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                        <ul className="dropdown-content menu p-2 shadow-lg 
                           bg-base-100 rounded-box md:rounded-xl 
                           w-full sm:w-56 mt-1 md:mt-2 z-10 
                           border border-base-300">
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Electronics</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Clothing</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Home & Garden</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Books</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Sports</a></li>
                        </ul>
                    </div>

                    {/* Price Range Dropdown */}
                    <div className="dropdown dropdown-end w-full sm:w-auto">
                        <button className="btn btn-outline w-full sm:w-auto 
                               justify-between px-4 py-2.5 md:py-3 
                               rounded-lg md:rounded-xl 
                               border-base-300 hover:border-base-400
                               bg-base-100 hover:bg-base-200">
                            <span className="text-sm md:text-base font-normal">Price Range</span>
                            <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                        <ul className="dropdown-content menu p-2 shadow-lg 
                           bg-base-100 rounded-box md:rounded-xl 
                           w-full sm:w-56 mt-1 md:mt-2 z-10 
                           border border-base-300">
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">$0 - $50</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">$50 - $100</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">$100 - $200</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">$200+</a></li>
                        </ul>
                    </div>

                    {/* Status Dropdown */}
                    <div className="dropdown dropdown-end w-full sm:w-auto">
                        <button className="btn btn-outline w-full sm:w-auto 
                               justify-between px-4 py-2.5 md:py-3 
                               rounded-lg md:rounded-xl 
                               border-base-300 hover:border-base-400
                               bg-base-100 hover:bg-base-200">
                            <span className="text-sm md:text-base font-normal">Status</span>
                            <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                        <ul className="dropdown-content menu p-2 shadow-lg 
                           bg-base-100 rounded-box md:rounded-xl 
                           w-full sm:w-56 mt-1 md:mt-2 z-10 
                           border border-base-300">
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">In Stock</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">Out of Stock</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">On Sale</a></li>
                            <li><a className="py-2 md:py-2.5 hover:bg-base-200 rounded-box">New Arrival</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;