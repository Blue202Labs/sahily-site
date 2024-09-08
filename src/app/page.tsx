import { Hero } from "./home/Hero";
import { Summary } from "./home/Summary";
import { MockUp } from "./home/MockUp";
import { OurMission } from "./home/OurMission";
import { Newsletter } from "./home/Newsletter";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <MockUp />
      </div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <Summary />
        <OurMission />
        <Newsletter />
      </div>
    </main>
  );
}
