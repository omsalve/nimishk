'use client';

import Masonry from './Masonry';

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
  return (
    <section className="w-full bg-transparent px-6 md:px-20 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

        {/* LEFT — COPY */}
        <div className="lg:sticky lg:top-32">
          <p className="text-sm uppercase tracking-widest text-orange-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Stories told through <br /> motion & design
          </h2>

          <p className="mt-6 text-neutral-400 max-w-sm">
            Films, edits, and visual systems crafted to feel intentional, emotional,
            and unmistakably human.
          </p>
        </div>

        {/* RIGHT — MASONRY */}
        <div className="lg:col-span-2">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>

      </div>
    </section>
  );
}
