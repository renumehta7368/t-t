import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([]);
    const { products = [] } = useContext(ShopContext); // Default to an empty array if products is undefined

    useEffect(() => {
        
        if (Array.isArray(products) && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 7)); 
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                "Experience the favorite choice of thousands—our Best Seller, loved for its unmatched quality and value. Don’t miss out on what everyone’s raving about!"
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.length > 0 ? (
                        bestSeller.map((item, index) => (
                            <ProductItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No best-selling products available.</p>
                    )
                }
            </div>
        </div>
    );
}

export default BestSeller;
