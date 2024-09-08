"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface Props {
  max: number;
  value: number;
  min: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  size?: number; // Size of the progress bar
  strokeWidth?: number; // Thickness of the progress bar stroke
  className?: string;
}

export default function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  size = 100, // Default size
  strokeWidth = 10, // Default stroke width
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  const [currentValue, setCurrentValue] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView && currentValue !== value) {
      const handleIncrement = (prev: number) => prev + 1;
      setCurrentValue(handleIncrement);

      const interval = setInterval(() => {
        setCurrentValue(prev => {
          if (prev < value) {
            return handleIncrement(prev);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 2000);

      motionValue.set(value);

      return () => clearInterval(interval);
    }
  }, [isInView, currentValue, value, motionValue]);

  useEffect(
    () =>
      springValue.on("change", latest => {
        if (numberRef.current) {
          numberRef.current.textContent = `${Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0))
          )}%`;
        }
      }),
    [springValue]
  );

  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const percentPx = circumference / 100;
  const currentPercent = ((currentValue - min) / (max - min)) * 100;

  return (
    <div
      ref={ref}
      className={"relative"}
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          "--circle-size": "100px",
          "--circumference": circumference,
          "--percent-to-px": `${percentPx}px`,
          "--gap-percent": "5",
          "--offset-factor": "0",
          "--transition-length": "1s",
          "--transition-step": "200ms",
          "--delay": "0s",
          "--percent-to-deg": "3.6deg",
          transform: "translateZ(0)",
        } as React.CSSProperties
      }
    >
      <svg
        fill="none"
        className="absolute inset-0"
        strokeWidth={strokeWidth}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {currentPercent <= 90 && currentPercent >= 0 && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              stroke: gaugeSecondaryColor,
              strokeDasharray: `calc(${
                90 - currentPercent
              } * ${percentPx}px) ${circumference}px`,
              transform:
                "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg)))) scaleY(-1)",
              transition: "all var(--transition-length) ease var(--delay)",
              transformOrigin: "50% 50%",
            }}
          />
        )}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            stroke: gaugePrimaryColor,
            strokeDasharray: `calc(${currentPercent} * ${percentPx}px) ${circumference}px`,
            transition:
              "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
            transform:
              "rotate(calc(-90deg + var(--gap-percent) * var(--percent-to-deg)))",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      <span
        ref={numberRef}
        className={
          "absolute inset-0 m-auto size-fit ease-linear animate-in fade-in " +
          className
        }
      >
        {currentPercent.toFixed(0)}
      </span>
    </div>
  );
}
