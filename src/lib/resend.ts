"use server";

import React from "react"; // Ensure React is imported
import { Resend } from "resend";
import EmailLead from "@/components/emails/leadEmail";
import { Lead } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (lead: Lead) => {
  console.log(lead.email);

  try {
    await resend.emails.send({
      to: lead.email,
      from: "accessacpa <onboarding@resend.dev>",
      subject: "Welcome to Accessacpa",
      react: React.createElement(EmailLead, { lead }), // Correctly pass props using React.createElement
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
