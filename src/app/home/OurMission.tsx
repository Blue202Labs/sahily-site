"use client";

import Image from "next/image";
import cleaners from "/public/images/cleaners.svg";
import AnimatedCircularProgressBar from "../components/ProgressCircle";
import WordFadeIn from "../components/WordFadeIn";
import { ReactNode } from "react";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

export const OurMission = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <section className="py-20 text-slate-700">
      <h2 className="text-2xl uppercase font-nunito font-bold w-full border-b pl-4 pb-2">
        Our Mission
      </h2>
      <div
        className="flex flex-col 
      gap-20 md:p-10 items-center pt-12"
      >
        <div className="flex flex-row md:items-center gap-10">
          <div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={40}
              size={isMobile ? 150 : 300}
              strokeWidth={isMobile ? 15 : 30}
              gaugePrimaryColor="#10b151"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="text-3xl md:text-7xl font-extrabold font-nunito"
            />
          </div>
          <WordFadeIn
            words="of Egypt’s GDP depends on the informal economy.
"
            className="text-2xl md:text-6xl font-light tracking-wide"
          ></WordFadeIn>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <p className="md:text-2xl md:pl-12 md:pr-24">
            <span className="font-bold">67%</span> of informal workers pay no
            taxes, and are <span className="font-bold">excluded</span> by
            financial institutions. They mainly operate through cash, with{" "}
            <span className="font-bold">
              no access to loans or formal banking.
            </span>
          </p>
          <Image
            className="w-3/4"
            alt="Graphic of two people cleaning a living room"
            src={cleaners}
          ></Image>
        </div>
        <div className="w-full flex flex-col items-center gap-16">
          <h3 className="text-3xl font-semibold">Our goals:</h3>
          <div className="flex flex-col md:flex-row w-full gap-8 text-center">
            <article
              className="w-full shadow-blurred border-gray-100 pt-12 pb-24 px-6 md:px-20 gap-8 
            flex flex-col rounded-lg"
            >
              <div className="text-6xl">👨🏼‍🔧</div>
              <h4 className="text-3xl font-bold font-nunito text-slate-700 border-b w-full">
                Service Providers
              </h4>
              <ul className="text-lg md:text-2xl flex flex-col gap-2 md:gap-4 font-light text-slate-700 text-left pl-4">
                <CheckBullet>Discover new clients</CheckBullet>
                <CheckBullet>Milestone-based revenue boosts</CheckBullet>
                <CheckBullet>Unlock Nationwide Financial Inclusion</CheckBullet>
                <CheckBullet>Convenient job opportunities</CheckBullet>
              </ul>
            </article>
            <article
              className="w-full shadow-blurred border-gray-100 pt-12 pb-24 px-6 md:px-20 gap-8 
            flex flex-col rounded-lg"
            >
              <div className="text-6xl">👩🏽‍💼</div>
              <h4 className="text-3xl font-bold font-nunito text-slate-700 border-b w-full">
                Users
              </h4>
              <ul className="text-lg md:text-2xl flex flex-col gap-2 md:gap-4 font-light text-slate-700 text-left pl-4">
                <CheckBullet>Quality help, on-demand</CheckBullet>
                <CheckBullet>Safety screening</CheckBullet>
                <CheckBullet>Make better informed hiring choices</CheckBullet>
                <CheckBullet>Digital Payments & Booking</CheckBullet>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckBullet = ({ children }: { children: ReactNode }) => {
  return (
    <li className="flex flex-row items-start gap-4">
      <svg
        className="flex-none w-5 md:w-7 pt-1"
        clip-rule="evenodd"
        fillRule="evenodd"
        stroke-linejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#10b151"
          d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
          fillRule="nonzero"
        />
      </svg>
      {children}
    </li>
  );
};
