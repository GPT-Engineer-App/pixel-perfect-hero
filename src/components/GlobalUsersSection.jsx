import React from 'react';

const GlobalUsersSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[#ff4d00] text-xl mb-2">Benefits</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              We have many users<br />
              all over the <span className="text-[#ff4d00]">world</span>
            </h3>
            <p className="text-gray-400 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna
            </p>
            <div className="flex justify-between">
              <div>
                <h4 className="text-3xl font-bold">10K<span className="text-[#ff4d00]">+</span></h4>
                <p className="text-gray-400">User active</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">30<span className="text-[#ff4d00]">+</span></h4>
                <p className="text-gray-400">Country</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">50K<span className="text-[#ff4d00]">+</span></h4>
                <p className="text-gray-400">Feedbacks</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="World Map" className="mx-auto object-cover w-full h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalUsersSection;
