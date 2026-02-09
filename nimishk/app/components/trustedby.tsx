'use client';

import LogoLoop from './logomarquee';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


export default function TrustedBy() {
  return (
    <section className="w-full px-6 md:px-20 rounded-b-[2rem]">
      <div className="relative flex items-center gap-8 rounded-2xl bg-transparent py-6 px-6 overflow-hidden">
        
        {/* LEFT: STATIC TEXT */}
        <div className="shrink-0">
          <p className="text-xs uppercase tracking-widest text-neutral-400 leading-tight">
            Trusted by brands I’ve <br />
            helped shape
          </p>
        </div>

        {/* RIGHT: LOGO MARQUEE */}
        <div className="relative flex-1 overflow-hidden">
          <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="var(--background)"
        ariaLabel="Technology partners"
      />
        </div>

      </div>
    </section>
  );
}
