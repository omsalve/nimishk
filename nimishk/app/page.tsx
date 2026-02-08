import { Hero } from "./components/hero";
import TrustedBy from "./components/trustedby";
import FeaturedWork from "./components/FeaturedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <FeaturedWork />
    </main>
  );
}
