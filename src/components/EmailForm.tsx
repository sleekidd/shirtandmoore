import React from "react";

const EmailForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2 py-6 rounded-md">
      <div className="flex w-full max-w-lg items-center font-syne bg-black rounded-full p-[4px]">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-white bg-black placeholder-white focus:outline-none rounded-l-full"
        />
        <button className="px-6 py-3 bg-lime-500 text-black font-syne font-semibold rounded-full hover:bg-lime-400 transition">
          Get Notified
        </button>
      </div>
      <p className="text-sm text-gray-500 font-syne">
        We do not share your information with any third party & no spam*
      </p>
    </div>
  );
};

export default EmailForm;
