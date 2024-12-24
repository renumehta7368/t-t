import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([]);
    const { products } = useContext(ShopContext); // Getting products from context

    useEffect(() => {
        

        // Ensure 'products' is an array and has elements
        if (Array.isArray(products) && products.length > 0) {
            setLatestProducts(products.slice(0, 10)); // Set the first 10 products
        }
    }, [products]); // Only re-run if products change

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                "Discover exclusivity with our Limited Edition product, crafted for the discerning few. Available for a short time—once it’s gone, it’s gone!"
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.length > 0 ? (
                        latestProducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No products available.</p>
                    )
                }
            </div>

        </div>
    );
}

export default LatestCollection;
