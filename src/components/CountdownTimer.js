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
      <div className="min-w-[80px] rounded-xl bg-white p-4 shadow-lg md:min-w-[100px] md:p-5">
        <div className="text-3xl font-black text-sky-800 md:text-5xl">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">{label}</div>
    </div>
  );

  return (
    <div className="bg-[linear-gradient(135deg,#061a34,#102d52_45%,#0e6287)] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-black text-white md:text-3xl">{title}</h2>
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-3xl font-black text-white md:text-5xl">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-3xl font-black text-white md:text-5xl">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-3xl font-black text-white md:text-5xl">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}