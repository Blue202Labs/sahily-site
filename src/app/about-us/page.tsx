import Image from "next/image";
import gigWorkers from "/public/images/gig-workers.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sahilyapp.com"),
  title: "About Sahily - Egypt's Everything App",
  description:
    "Egypt's unified service platform to find everything from tutors to deliveries.",
};

export default function AboutUs() {
  return (
    <main className="max-w-3xl mx-auto text-slate-800 py-24 px-4">
      <h1 className="text-4xl font-nunito font-bold w-full border-b pb-4">
        About Us
      </h1>
      <div className="max-w-3xl mx-auto py-20 text-lg font-light flex flex-col gap-8">
        <Image
          alt="Graphic displaying four cleaners stood beside each other"
          src={gigWorkers}
          className="md:px-24"
        />
        <p>
          Sahily is a unified service platform, empowering gig service
          professionals to reach their financial goals, while catering a wide
          range of household & lifestyle services for our users. We deliver ways
          for workers to earn a more stable income and provide the necessary
          documents and employment status needed to open bank accounts.
        </p>
        <p>
          Sahily was started because of a need to enable access to financial
          institutions to the large gig economy in Egypt. Most informal workers
          are unable to open bank accounts due to a lack of employment status
          which prevents them from being to protect their money against rapid
          currency devaluations.
        </p>
      </div>
      <h2 className="text-4xl font-nunito font-bold w-full pb-12">Our Goals</h2>
      <div className="flex flex-col gap-10 border-l-2 pl-8 py-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">
            2025: Launch in our trial market
          </h3>
          <p>
            Our beta launch will target the tutoring market, creating a platform
            for students to find and book tutors. We working on creating
            partnerships with schools and tutoring agencies.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">Mid-2025: Seed Round</h3>
          <p>
            Conduct our first round of funding, based off the market validation
            from the tutoring market.
          </p>
        </div>
      </div>
    </main>
  );
}
