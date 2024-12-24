import React from 'react';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      {/* Easy Exchange Policy */}
      <div>
        <span className="material-icons text-3xl m-auto mb-5">sync_alt</span> {/* Exchange icon */}
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free 1 time exchange policy</p>
      </div>

      {/* Quality Policy */}
      <div>
        <span className="material-icons text-3xl m-auto mb-5">check_circle</span> {/* Quality icon */}
        <p className='font-semibold'>Please note:</p>
        <p className='text-gray-400'>Returns are not available for products</p>
      </div>

      {/* Customer Support */}
      <div>
        <span className="material-icons text-3xl m-auto mb-5">headset_mic</span> {/* Support icon */}
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>

    </div>
  );
}

export default OurPolicy;


