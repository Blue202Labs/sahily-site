"use client";

import Image from "next/image";
import heroImage from "/public/images/sahily-hero.png";
import mobileHeroImage from "/public/images/sahily-hero-mobile.png";
import { AnimatedListItem } from "../components/AnimatedList";
import tutorNotif from "/public/images/tutor-notif.png";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

export const Hero = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <section className="relative h-[93vh] md:h-[70vh] bg-gray-900 overflow-hidden z-20 pt-12 md:pt-0">
      <Image
        alt="Woman smiling and using her phone with two men having a conversation in the background."
        className="absolute -top-2 object-cover md:w-full h-[95vh] md:h-[72vh] z-20 blur-sm"
        src={isMobile ? mobileHeroImage : heroImage}
        placeholder="blur"
        blurDataURL=""
      />
      <div
        className="flex flex-col md:flex-row items-end h-full w-full relative z-30 max-w-6xl mx-auto 
      pb-24 justify-between px-4 md:px-0"
      >
        <div
          className="flex flex-col
        text-6xl font-extrabold text-white opacity-90 font-nunito"
        >
          <h1>Sahily.</h1>
          <h2>
            Making life <span className="text-[#00b14f]">easy</span>.
          </h2>
        </div>
        <div className="relative pb-20 md:pb-[calc(11rem-3vw)] opacity-80">
          <AnimatedListItem>
            <Image
              alt="Notification from a phone showing an English Tutor profile."
              src={tutorNotif}
            />
          </AnimatedListItem>
        </div>
      </div>
    </section>
  );
};
