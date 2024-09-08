"use client";

import { useState } from "react";
import { FormState, InquiryType } from "./contactForm.type";
import { useFormState } from "react-dom";
import { sendContactForm } from "./actions";

const initialFormData = {
  yourName: "",
  email: "",
  companyName: "",
  inquiryType: InquiryType.Default,
  message: "",
  recieveMarketing: false,
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formState, submitAction] = useFormState(
    sendContactForm,
    FormState.Unsent
  );

  // Handle input change for text fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle radio button change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: Number(e.target.value) as InquiryType,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      recieveMarketing: e.target.checked,
    }));
  };

  return (
    <form className="flex flex-col">
      <div className="py-12">
        <h2 className="relative top-4 ml-4 font-semibold text-2xl bg-white px-4 w-fit">
          Are you a...
        </h2>
        <fieldset
          id="inquiryType"
          className="flex flex-col w-full border-stone-300 border rounded-lg p-8 gap-2"
        >
          <div className="flex flex-row gap-3">
            <input
              type="radio"
              value={InquiryType.Investor}
              name="inquiryType"
              id="investor"
              checked={formData.inquiryType === InquiryType.Investor}
              onChange={handleRadioChange}
              className="accent-stone-600"
            />
            <label htmlFor="investor">Investor</label>
          </div>
          <div className="flex flex-row gap-3">
            <input
              type="radio"
              value={InquiryType.ServiceProvider}
              name="inquiryType"
              id="serviceProvider"
              checked={formData.inquiryType === InquiryType.ServiceProvider}
              onChange={handleRadioChange}
              className="accent-stone-600"
            />
            <label htmlFor="serviceProvider">Service Provider</label>
          </div>
          <div className="flex flex-row gap-3">
            <input
              type="radio"
              value={InquiryType.Other}
              name="inquiryType"
              id="other"
              checked={formData.inquiryType === InquiryType.Other}
              onChange={handleRadioChange}
              className="accent-stone-600"
            />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
      </div>
      <div>
        <h2 className="font-semibold text-2xl bg-white px-4 w-fit">
          Tell us more about yourself
        </h2>
        <div className="py-6 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col w-full">
              <label
                htmlFor="yourName"
                className="font-semibold ml-5 px-2 bg-white relative top-3 w-fit"
              >
                Your Name*
              </label>
              <input
                type="text"
                name="yourName"
                id="yourName"
                value={formData.yourName}
                onChange={handleInputChange}
                required
                className="accent-stone-600 border-stone-600 border rounded-md px-6 py-4 w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="companyName"
                className="font-semibold ml-5 px-2 bg-white relative top-3 w-fit"
              >
                Company
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="accent-stone-600 border-stone-600 border rounded-md px-6 py-4 w-full"
              />
            </div>
          </div>
          <label
            htmlFor="email"
            className="font-semibold ml-5 px-2 bg-white relative top-5 w-fit"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="accent-stone-600 border-stone-600 border rounded-md px-6 py-4 w-full"
          />
        </div>
        <div className="pt-8">
          <h2 className="font-semibold text-2xl bg-white px-4 w-fit">
            What's on your mind?
          </h2>
          <label
            htmlFor="message"
            className="relative top-4 ml-4 font-semibold text-lg bg-white px-4 w-fit"
          >
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            rows={8}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-stone-600 rounded-lg p-8 accent-black"
            required
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row gap-3 px-8 py-6">
        <input
          type="checkbox"
          name="recieveMarketing"
          id="recieveMarketing"
          checked={formData.recieveMarketing}
          onChange={handleCheckboxChange}
          className="accent-stone-600 place-self-start mt-2 md:mt-0 md:place-self-center"
        />
        <label htmlFor="recieveMarketing" className="text-sm md:text-base">
          Tick this box to receive marketing emails and occasional updates.
        </label>
      </div>
      <button
        type="submit"
        className="flex flex-row gap-3 place-self-end mr-4 group hover:text-slate-500 pt-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mt-1"
        >
          <path
            className="group-hover:fill-slate-500"
            d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
          />
        </svg>
        <div className="font-bold text-2xl">Send</div>
      </button>
    </form>
  );
};
