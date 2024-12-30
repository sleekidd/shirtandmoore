import React from 'react';
import CountdownTimer from './CountdownTimer';
import EmailForm from './EmailForm';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFF5]">
      {/* Header Section */}
      <header className="bg-[#000] shadow-lg p-4">
        <nav className="container mx-auto items-center">
          <div className="text-2xl font-bold text-white font-syne">Shirt And Moore</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFFFF5] text-[#000] py-20">
        <div className="container mx-auto text-center max-w-[800px] p-6">
          <h1 className="text-4xl md:text-6xl font-bold font-syne mb-4">Exciting things are coming soon</h1>
          <p className="text-[16px] font-syne mx-auto md:text-[18px] mb-6 max-w-[500px]">Get notified when we launch something new for you! Enter your email address below and stay tuned with us.</p>
          {/* <button className="bg-white text-blue-500 px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
            Get Started
          </button> */}
          
        <CountdownTimer targetDate="2025-01-11T23:59:59" />
        <EmailForm />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#000] text-white py-6">
        <div className="container mx-auto text-center">
          <p className='font-syne'>© 2024 ShirtAndMoore. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
