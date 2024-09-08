import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sahilyapp.com"),
  title: "Reach out to the Sahily team",
  description:
    "Egypt's unified service platform to find everything from tutors to deliveries.",
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto text-slate-700 py-20 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-center">
        Want to reach out to us?
      </h1>
      <ContactForm />
    </main>
  );
}
