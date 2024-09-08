"use client";

import { BaseSyntheticEvent, useState } from "react";

export const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
  });

  const handleClick = () => {
    if (email.isValid) {
      setSubmitted(true);
    }
  };

  const handleEmailChange = (event: BaseSyntheticEvent) => {
    setEmail({
      value: event.target.value,
      isValid: event.target.validity.valid,
    });
  };

  return (
    <section className="flex flex-col md:flex-row gap-10 text-slate-700 py-40 max-w-4xl mx-auto">
      <h3 className="text-6xl font-bold max-w-80">Let&apos;s keep in touch.</h3>
      <form className="w-full">
        <p className="font-semibold py-2">Sign up to our newsletter:</p>
        {!submitted ? (
          <>
            <div className="flex flex-col md:flex-row gap-4 h-28 md:h-14 w-full">
              <label htmlFor="newsletterName" hidden={true}>
                Email
              </label>
              <input
                name="newsletterName"
                id="newsletterName"
                type="email"
                placeholder="Your email"
                onChange={handleEmailChange}
                value={email.value}
                className="border border-stone-300 px-6 h-full
            w-full rounded-md focus-within:outline outline-2 outline-slate-500"
                required
              ></input>
              <button
                onClick={handleClick}
                type="submit"
                className="bg-[#00b14f] hover:bg-emerald-600 text-white font-semibold py-2 px-8 rounded-md"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs font-light max-w-80 py-2">
              Subscribe to receive occasional updates and marketing emails. You
              can unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="flex flex-row gap-2 py-2">
            <svg
              className="flex-none w-7 pt-1"
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
            <p className="pt-1">Thanks for signing up to our newsletter.</p>
          </div>
        )}
      </form>
    </section>
  );
};
