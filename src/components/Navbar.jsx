import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            {/* Logo */}
            <Link to='/'>
                <img className='w-16 cursor-pointer' src={assets.logo} alt="Logo" />
            </Link>

            {/* Navigation Links */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1 cursor-pointer'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[2px] bg-[#e65edf] hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 cursor-pointer'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.9px] bg-[#e65edf] hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 cursor-pointer'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.9px] bg-[#e65edf] hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 cursor-pointer'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[2px] bg-[#e65edf] hidden' />
                </NavLink>
            </ul>

            {/* Action Icons */}
            <div className='flex items-center gap-6'>
                {/* Search Icon */}
                <span
                    className="material-icons w-5 text-gray-800 cursor-pointer"
                    onClick={() => { setShowSearch(true); navigate('/collection') }}
                >
                    search
                </span>
                {/* Favorites Icon */}
               
                {/* Profile Dropdown */}
                <div className='group relative'>
                    <span className="material-icons w-5 text-gray-700 cursor-pointer">account_circle</span>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <span className="material-icons w-5 text-gray-700 cursor-pointer">shopping_cart</span>
                    <p className='absolute right-[-6px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>
                {/* Menu Icon for Small Screens */}
                <span
                    onClick={() => setVisible(true)}
                    className="material-icons w-5 text-gray-600 cursor-pointer sm:hidden"
                >
                    menu
                </span>
            </div>

            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <span className="material-icons text-gray-600 rotate-180">arrow_back</span>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to="/" className='py-2 pl-6 border cursor-pointer'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border cursor-pointer'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border cursor-pointer'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border cursor-pointer'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
