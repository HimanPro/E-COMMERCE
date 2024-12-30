import React from 'react';

const About = () => {
  return (
    <>
       <div className="bg-gray-50 text-gray-800">
      {/* Intro Section */}
      <div className="relative h-[90vh] bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold animate-fadeInDown">Welcome to Our World</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl text-center animate-fadeInUp">
          We redefine your shopping experience with innovation, style, and quality.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-purple-700 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
          Explore Now
        </button>
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900)' }} />
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:grid grid-cols-12 gap-8">
            <div className="col-span-5 md:col-span-5">
              <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">2015</h3>
                <p className="mt-2">Founded with the mission to create a seamless online shopping experience.</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="w-1 h-full bg-purple-500" />
            </div>
            <div className="col-span-5 md:col-span-5">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">2020</h3>
                <p className="mt-2">Reached 1 million satisfied customers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-5xl font-extrabold text-purple-600">10K+</h3>
            <p className="text-gray-600 mt-2">Products</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-purple-600">1M+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-purple-600">5+</h3>
            <p className="text-gray-600 mt-2">Awards Won</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-scroll space-x-4">
            <div className="bg-purple-100 p-6 rounded-lg shadow-md w-80">
              <p className="text-gray-700">"Great service and amazing products! Highly recommend."</p>
              <h3 className="mt-4 text-lg font-semibold">- Jane Doe</h3>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md w-80">
              <p className="text-gray-700">"Exceptional quality and fast delivery. Five stars!"</p>
              <h3 className="mt-4 text-lg font-semibold">- John Smith</h3>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md w-80">
              <p className="text-gray-700">"Their customer support is top-notch. Love it!"</p>
              <h3 className="mt-4 text-lg font-semibold">- Emily Johnson</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
