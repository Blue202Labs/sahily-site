"use client";

import { motion, Variants, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible"); // Trigger animation when in view
    } else {
      controls.start("hidden"); // Hide it again when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      className={cn(
        "font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} custom={i} variants={variants}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h2>
  );
}
