import React from "react";
// import { useForm, ValidationError } from '@formspree/react';

const EmailForm: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center space-y-2 py-6 rounded-md">
      <form action="https://formspree.io/f/xvggbpob" method="POST" className="flex w-full max-w-lg items-center font-syne bg-black rounded-full p-[4px]">
        <input
          type="email" 
          name="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-white bg-black placeholder-white focus:outline-none rounded-l-full"
        />
        <button type="submit" className="px-6 py-3 bg-lime-500 text-black font-syne font-semibold rounded-full hover:bg-lime-400 transition">
          Get Notified
        </button>
        </form>
      <p className="text-sm text-gray-500 font-syne">
        We do not share your information with any third party & no spam*
      </p>
    </div>
  );
};

export default EmailForm;
