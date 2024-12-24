import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {
  const { products = [], search, showSearch } = useContext(ShopContext); // Ensure 'products' defaults to an empty array if undefined

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((a) => a !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((a) => a !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    if (!Array.isArray(products)) return; // Prevent further execution if products is not an array

    let productsCopy = [...products]; // Use spread to ensure we're not directly mutating the state

    // Apply search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Apply subCategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts]; // Use spread to avoid direct mutation

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter(); 
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct(); 
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.coller2}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" value={'walk'} onChange={toggleCategory} type="checkbox" />
              walk 
            </p>
           
            <p className="flex gap-2">
              <input className="w-3" value={'cloth'} onChange={toggleCategory} type="checkbox" />
              cloth
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" value={'harness'} onChange={toggleSubCategory} type="checkbox" />
              harness
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'collar'} onChange={toggleSubCategory} type="checkbox" />
              collar
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'leash'} onChange={toggleSubCategory} type="checkbox" />
              leash
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'bandana'} onChange={toggleSubCategory} type="checkbox" />
              bandana
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'bow'} onChange={toggleSubCategory} type="checkbox" />
              bow
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'dress'} onChange={toggleSubCategory} type="checkbox" />
              dress
            </p>
            <p className="flex gap-2">
              <input className="w-3" value={'t-shirt'} onChange={toggleSubCategory} type="checkbox" />
              t-shirt
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
            name=""
            id=""
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
