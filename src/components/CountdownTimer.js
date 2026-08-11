'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
        <div className="text-3xl md:text-5xl font-bold text-diu-green">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm md:text-base font-medium text-white mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-diu-green to-primary-700 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Submission Deadline Countdown
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-3xl md:text-5xl font-bold text-white">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-3xl md:text-5xl font-bold text-white">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-3xl md:text-5xl font-bold text-white">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}