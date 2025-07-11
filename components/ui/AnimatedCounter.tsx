"use client";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ end, duration = 1.5, className }: AnimatedCounterProps) => (
  <CountUp end={end} duration={duration} separator=" " className={className} />
); 