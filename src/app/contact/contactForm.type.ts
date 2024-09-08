import { Static, Type } from "@sinclair/typebox";

export enum InquiryType {
  "Investor",
  "ServiceProvider",
  "Other",
  "Default",
}

export const ContactForm = Type.Object({
  name: Type.String(),
  companyName: Type.String(),
  email: Type.String({ format: "email" }),
  inquiryType: Type.Enum(InquiryType),
  message: Type.String(),
});

export enum FormState {
  Unsent,
  Loading,
  Sent,
  Failed,
}

export type ContactFormType = Static<typeof ContactForm>;
