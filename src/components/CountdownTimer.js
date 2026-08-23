'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate, title = 'Conference Countdown' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-[clamp(48px,17vw,100px)] rounded-xl bg-[#fffdf8] p-2 shadow-lg sm:p-4 md:p-5">
        <div className="text-2xl font-black text-[#a85c3b] sm:text-3xl md:text-5xl">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">{label}</div>
    </div>
  );

  return (
    <div className="bg-[#3c5147] py-10 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="mb-8 text-center text-2xl font-black text-white md:text-3xl">{title}</h2>
        <div className="flex items-start justify-center gap-0.5 sm:gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="pt-3 text-xl font-black text-[#e4eee2] sm:pt-4 sm:text-3xl md:pt-5 md:text-5xl">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="pt-3 text-xl font-black text-[#e4eee2] sm:pt-4 sm:text-3xl md:pt-5 md:text-5xl">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="pt-3 text-xl font-black text-[#e4eee2] sm:pt-4 sm:text-3xl md:pt-5 md:text-5xl">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}