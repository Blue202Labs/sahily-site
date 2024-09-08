import sahilyWordmarkWhite from "/public/logos/sahily-wordmark-white.png";
import sahilyWordmarkBlack from "/public/logos/sahily-wordmark-black.png";
import sahilyLogoGreen from "/public/logos/sahily-green-icon.png";
import Image from "next/image";
import Link from "next/link";

export const SahilyLogo = ({
  theme = "black",
}: {
  theme?: "white" | "black";
}) => {
  const wordmark =
    theme === "white" ? sahilyWordmarkWhite : sahilyWordmarkBlack;

  return (
    <Link href="/" className="flex flex-row items-center gap-2">
      <div>
        <Image
          alt="Sahily logo"
          width={50}
          height={50}
          src={sahilyLogoGreen}
          className="w-9 md:w-12"
        ></Image>
      </div>
      <div>
        <Image
          className="pt-1 w-20 md:w-24"
          alt="Sahily"
          width={100}
          src={wordmark}
        ></Image>
      </div>
    </Link>
  );
};
