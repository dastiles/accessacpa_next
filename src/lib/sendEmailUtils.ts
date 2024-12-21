interface EmailPayload {
  to: string;
  subject: string;
  templateName: string;
  placeholders: Record<string, string>;
}

export async function sendEmail({
  to,
  subject,
  templateName,
  placeholders,
}: EmailPayload): Promise<void> {
  try {
    const response = await fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, templateName, placeholders }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error sending email:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("Email sent successfully");
  } catch (err) {
    console.error("Failed to send email:", err);
    throw err;
  }
}
