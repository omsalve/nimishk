'use client';

import Masonry from './Masonry';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import DomeGallery and prefer the default export if present.
const DomeGallery = dynamic(() => import('./DomeGallery'), { ssr: false });

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  // add more real projects later
];

export default function FeaturedWork() {
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 8 }
  };
  return (
    <section className="w-full bg-transparent px-6 md:px-20 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

        {/* LEFT — COPY */}
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Stories told through <br /> motion & design
          </h2>

          <p className="mt-6 text-neutral-400 max-w-sm">
            Films, edits, and visual systems crafted to feel intentional, emotional,
            and unmistakably human.
          </p>

          <motion.button
            aria-label="Selected Work"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg"
            onClick={() => {
              const el = document.querySelector('.sphere-root');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            <span>Selected Work</span>
            <motion.span variants={arrowVariants} className="inline-flex items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </motion.button>
        </div>

        {/* RIGHT — MASONRY */}
          <div className="lg:col-span-2 h-[700px] md:h-[600px]">
             <DomeGallery
    fit={0.8}
    minRadius={600}
    maxVerticalRotationDeg={0}
    segments={26}
    dragDampening={2}
    grayscale
    overlayBlurColor="var(--background)"
  /
  >
        </div>

      </div>
    </section>
  );
}
