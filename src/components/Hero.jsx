import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#e65edf]'></p>
                        <p className='font-medium text-sm md:text-base'>TAILS & TICKLE</p>
                    </div>

                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-3xl leading-relaxed'>Comfort for Every Paw</h1>

                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base cursor-pointer'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#e65edf]' ></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <img
    className=' w-full sm:w-1/4 ml-16' // Add margin-left for a slight shift to the right
    src="https://images.pexels.com/photos/8530860/pexels-photo-8530860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Dog with clothes"
/>

        </div>
    );
}

export default Hero;
