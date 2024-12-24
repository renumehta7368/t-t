import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* About Section Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'Tails&tikle'} />
      </div>

      {/* About Content */}
      <div className='my-20 flex flex-col md:flex-row gap-16'>
        {/* Image Section */}
        <img 
          className='w-full md:max-w-[450px] md:max-l[300px]' 
          src="https://media.istockphoto.com/id/1415165892/photo/nova-scotia-duck-tolling-retriever-dog.jpg?s=1024x1024&w=is&k=20&c=GAILKXzusNoJl_YE63TF_hFojPlVUQSgmGTpPBkuPAo=" 
          alt="" 
        />
        
        {/* Text Section */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-800'>Tails and Tickle</b>
          <p>
            Welcome to Tails & Tickle! We are passionate about providing stylish and comfortable clothing and accessories for your furry best friends.
            Our journey started in 2025, inspired by our two adorable Chihuahuas, who are the heart and soul of our brand.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            At Tails & Tickle, we strive to combine creativity, quality, and care in every product. We design clothing and accessories that are not only fashionable but also functional and safe for your pets.
          </p>

          <b className='text-gray-800'>Why Choose Us?</b>
          <ul>
            <li>Handmade, unique designs crafted with love</li>
            <li>Comfortable and safe materials for your pets</li>
            <li>Perfect fit for every breed and size</li>
            <li>Eco-friendly and sustainable products</li>
           
          </ul>

          <b className='text-gray-800'>Handcrafted Artistry & Attention to Detail</b>
          <p>
            Each Tails & Tickle product is carefully handcrafted by artisans who pour their hearts into every stitch. Our attention to detail ensures that every piece is unique, stylish, and built to last. Whether it's a cozy sweater or a chic collar, your pet deserves the best in comfort and quality.
          </p>

          

          <b className='text-gray-800'>Tested & Approved by Our Chihuahuas</b>
          <p>
            Every product we create is tried and tested by our two Chihuahuas, who inspire our designs. From cozy winter coats to playful accessories, we ensure each item meets our own high standards for quality and comfort before it reaches you.
          </p>

          <b className='text-gray-800'>Limited Edition & Exclusive Collections</b>
          <p>
            Our limited-edition collections are inspired by the latest trends and our love for dogs. These exclusive pieces won’t last long, so make sure to get your paws on them before they’re gone! Perfect for the fashion-forward pet who loves to stand out.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
};

export default About;
