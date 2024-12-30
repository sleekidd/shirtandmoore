import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Target date in "YYYY-MM-DDTHH:mm:ss" format
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countdownDate = new Date(targetDate).getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetDate]);

  return (
    <div className="flex flex-wrap mx-auto gap-[16px] text-center justify-center text-white rounded-lg">
      <div className="border-[2px] border-[#000] rounded-[16px] px-8 py-4 mx-auto w-[156px]">
        <div className="flex justify-center text-[32px] lg:text-[80px] font-bold font-syne leading-[40px] lg:leading-[96px] text-[#000]">{timeLeft.days}</div>
        <div className="text-[16px] font-bold font-syne leading-[24px] text-[#000]">Days</div>
      </div>
      <div className="border-[2px] border-[#000] rounded-[16px] px-8 py-4 mx-auto w-[156px]">
        <div className="flex justify-center text-[32px] lg:text-[80px] font-bold font-syne leading-[40px] lg:leading-[96px] text-[#000]">{timeLeft.hours}</div>
        <div className="text-[16px] font-bold font-syne leading-[24px] text-[#000]">Hours</div>
      </div>
      <div className="border-[2px] border-[#000] rounded-[16px] px-8 py-4 mx-auto w-[156px]">
        <div className="flex justify-center text-[32px] lg:text-[80px] font-bold font-syne leading-[40px] lg:leading-[96px] text-[#000]">{timeLeft.minutes}</div>
        <div className="text-[16px] font-bold font-syne leading-[24px] text-[#000]">Minutes</div>
      </div>
      <div className="border-[2px] border-[#000] rounded-[16px] px-8 py-4 mx-auto w-[156px]">
        <div className="flex justify-center text-[32px] lg:text-[80px] font-bold font-syne leading-[40px] lg:leading-[96px] text-[#000]">{timeLeft.seconds}</div>
        <div className="text-[16px] font-bold font-syne leading-[24px] text-[#000]">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
