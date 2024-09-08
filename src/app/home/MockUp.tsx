import Image from "next/image";

import sahilyMockup from "/public/images/sahily-device-mockup.png";
import { FadeIn } from "../components/FadeIn";
import WordFadeIn from "../components/WordFadeIn";

export const MockUp = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between h-screen pt-12 md:pt-0 items-center pb-32">
      <div className="md:w-2/5 flex flex-col gap-10">
        <WordFadeIn
          delay={0.2}
          words="Sahily. Everything you need, all in one app."
          className="font-bold text-6xl text-slate-800 pl-4"
        ></WordFadeIn>
        <FadeIn
          direction="up"
          duration={1}
          delay={1.2}
          offset={20}
          className="py-2 px-4 bg-gradient-to-r rounded-lg from-stone-100 tracking-wide 
          font-nunito text-green-900"
        >
          Coming soon to IOS and Android
        </FadeIn>
      </div>
      <FadeIn
        direction="up"
        duration={1.5}
        delay={0.3}
        offset={40}
        className="w-full"
      >
        <Image
          alt="Two phones displaying the Sahily app, open on the homescreen and the ordering page 
          for a chef catering service."
          src={sahilyMockup}
        ></Image>
      </FadeIn>
    </section>
  );
};
