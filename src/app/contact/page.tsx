import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

const ContactPage = () => {
  return (
    <main className="flex flex-col flex-1">
      <ContactForm />
    </main>
  );
};

export default ContactPage;
