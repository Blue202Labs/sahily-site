"use server";

import { ContactFormType, FormState, InquiryType } from "./contactForm.type";

export async function sendContactForm(_: FormState, formData: FormData) {
  try {
    const request: ContactFormType = {
      name: formData.get("yourName") as string,
      email: formData.get("email") as string,
      companyName: formData.get("companyName") as string,
      inquiryType: formData.get("inquiryType")
        ? (Number(formData.get("inquiryType")) as InquiryType)
        : InquiryType.Other,
      message: formData.get("message") as string,
    };

    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ADDRESS!, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (response.ok) {
      return FormState.Sent;
    } else {
      return FormState.Failed;
    }
  } catch {
    return FormState.Failed;
  }
}
