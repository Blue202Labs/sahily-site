import Link from "next/link";
import { SahilyLogo } from "./SahilyLogo";

export const Footer = () => {
  return (
    <footer className="md:h-96 bg-stone-100 px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 py-12 justify-between text-slate-700">
        <div className="flex flex-col gap-8">
          <SahilyLogo />
          <div className="flex flex-row gap-4">
            <Link
              className="w-12"
              href="https://www.linkedin.com/company/sahilyapp/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  fill="#9ba4b0"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                />
              </svg>
            </Link>
            <Link className="w-12" href="https://www.instagram.com/sahilyapp/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  fill="#9ba4b0"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"
                />
              </svg>
            </Link>
          </div>
          <Link
            href="mailto:info@sahilyapp.com"
            className="font-light text-slate-600 tracking-wide"
          >
            info@sahilyapp.com
          </Link>
        </div>
        <div className="flex flex-col gap-2 md:text-center">
          <p className="text-4xl font-bold">The Everything App.</p>
          <p className="font-light">Coming soon to IOS and Android.</p>
        </div>
        <div className="flex flex-col gap-6 md:text-right text-slate-500 text-lg font-semibold">
          <Link href="/about-us">About Us</Link>
          <Link href="/about-us">Blog</Link>
        </div>
      </div>
    </footer>
  );
};
