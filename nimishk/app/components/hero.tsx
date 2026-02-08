"use client";

import { motion, Variants } from 'framer-motion';

export function Hero() {
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.18,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: 12, skewY: 8, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      skewY: 0,
      scale: 1,
      transition: { duration: 0.78, ease: 'easeOut' },
    },
  };

  const first = 'Creative';
  const second = 'Director';

  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-b-[10rem]">

      {/* BACKGROUND OVERLAY (you add image yourself) */}
      <div className="absolute inset-0 bg-orange-600 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
        <div className="max-w-3xl">
          {/* SMALL INTRO */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest uppercase text-neutral-300 mb-4"
          >
            Hey, I’m a
          </motion.p>

          {/* MAIN HEADLINE */}
          <motion.h1
            variants={headingContainer}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_18px_36px_rgba(0,0,0,0.6)]"
          >
            <span className="block leading-tight">
              {first.split('').map((ch, i) => (
                <motion.span
                  key={`c-${i}`}
                  variants={letter}
                  className="inline-block will-change-transform"
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </span>

            <span className="block leading-tight">
              {second.split('').map((ch, i) => (
                <motion.span
                  key={`d-${i}`}
                  variants={letter}
                  className="inline-block will-change-transform"
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-md text-neutral-300 text-base md:text-lg"
          >
            Great design should feel invisible.  
            I craft visuals that hit hard, convert faster, and don’t beg for attention.
          </motion.p>

          {/* STATS / SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">
                Brand Strategy
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">
                Brand Identity Design
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">
                Packaging Design
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">
                Creative Direction
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
